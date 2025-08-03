import { Injectable, inject } from '@angular/core';
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
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user$: Observable<User | null>;

  constructor(
    private auth: Auth,
    private encryptionService: DataEncryptionService
  ) {
    this.user$ = authState(this.auth);
  }

  getUserRole$(uid: string): Observable<string | null> {
    return from(
      import('firebase/firestore').then(
        async ({ getFirestore, doc, getDoc }) => {
          const db = getFirestore();
          const userDoc = await getDoc(doc(db, 'users', uid));
          return userDoc.exists() ? userDoc.data()['role'] : null;
        }
      )
    );
  }

  loginWithEmail(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password).then(() => {});
  }

  loginWithGoogle(): Promise<void> {
    return signInWithPopup(this.auth, new GoogleAuthProvider()).then(() => {});
  }

  isLoggedIn(): Observable<boolean> {
    return user(this.auth).pipe(map((u) => !!u));
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  async registerWithEmail(
    email: string,
    password: string,
    extraData?: any
  ): Promise<void> {
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
      const { getFirestore, doc, setDoc } = await import('firebase/firestore');
      const db = getFirestore();
      await setDoc(doc(db, 'users', cred.user.uid), {
        email,
        role: extraData.role,
        ...encryptedData,
      });
    }
  }
}
