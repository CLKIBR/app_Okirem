import { Injectable, inject } from '@angular/core';
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
  private auth = inject(Auth);
  public user$: Observable<User | null> = authState(this.auth);

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
    return signInWithEmailAndPassword(this.auth, email, password).then(
      () => {}
    );
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
      // Firestore'a kullanıcı ekle
      const { getFirestore, doc, setDoc } = await import('firebase/firestore');
      const db = getFirestore();
      await setDoc(doc(db, 'users', cred.user.uid), {
        email,
        role: extraData.role,
        ...extraData,
      });
    }
  }
}
