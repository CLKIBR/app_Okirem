import { Injectable } from '@angular/core';
import { DataEncryptionService } from './data-encryption.service';
import {
  Auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  user,
  createUserWithEmailAndPassword,
  User,
  authState,
} from '@angular/fire/auth';
import { Firestore, doc, getDoc, setDoc, addDoc, collection } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user$: Observable<User | null>;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private encryptionService: DataEncryptionService
  ) {
    this.user$ = authState(this.auth);
  }

  getUserRole$(uid: string): Observable<string | null> {
    return from(
      getDoc(doc(this.firestore, 'users', uid)).then(userDoc =>
        userDoc.exists() ? userDoc.data()['role'] : null
      )
    );
  }

  async loginWithEmail(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      await this.logAudit('login', email, 'Giriş başarılı');
    } catch (error) {
      await this.logAudit('login', email, 'Giriş başarısız: ' + error);
      throw error;
    }
  }

  loginWithGoogle(): Promise<void> {
    return signInWithPopup(this.auth, new GoogleAuthProvider()).then(() => {});
  }

  isLoggedIn(): Observable<boolean> {
    return user(this.auth).pipe(map((u) => !!u));
  }

  async logout(): Promise<void> {
    const user = this.auth.currentUser;
    await signOut(this.auth);
    await this.logAudit('logout', user?.email || '', 'Çıkış yapıldı');
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  async registerWithEmail(
    email: string,
    password: string,
    extraData?: any
  ): Promise<void> {
    try {
      const cred = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      if (extraData) {
        // Şifrelenmesi gereken alanlar listesi
        const fieldsToEncrypt = ['tcKimlik', 'phone', 'address'];
        const encryptedData = { ...extraData };
        fieldsToEncrypt.forEach(field => {
          if (extraData[field]) {
            encryptedData[field] = this.encryptionService.encryptData(extraData[field]);
          }
        });
        // Firestore'a kullanıcı ekle
        await setDoc(doc(this.firestore, 'users', cred.user.uid), {
          email,
          role: extraData.role,
          ...encryptedData,
        });
      }
      await this.logAudit('register', email, 'Kayıt başarılı');
    } catch (error) {
      await this.logAudit('register', email, 'Kayıt başarısız: ' + error);
      throw error;
    }
  }

  async logAudit(action: string, user: string, message: string) {
    try {
      // IP adresini almak için basit bir fetch
      let ip = '';
      try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        ip = data.ip;
      } catch (e) {
        ip = 'unknown';
      }
      await addDoc(collection(this.firestore, 'audit_logs'), {
        action,
        user,
        message,
        timestamp: new Date().toISOString(),
        ip
      });
    } catch (e) {
      // log hatası sessiz geçilsin
    }
  }
}
