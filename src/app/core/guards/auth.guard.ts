import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../';
import { map, switchMap, take,of } from 'rxjs';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    take(1),
    switchMap((user) => {
      if (!user) {
        console.warn('[AuthGuard] Kullanıcı yok → /login');
        router.navigate(['/login']);
        return of(false);
      }

      return authService.getUserRole$(user.uid).pipe(
        map((role) => {
          console.log('[AuthGuard] Kullanıcı rolü:', role);
          const requestedPath = '/' + route.routeConfig?.path;

          // Eğer doğru route'taysa → geçişe izin ver
          if (
            (role === 'admin' && requestedPath.startsWith('/admin')) ||
            (role === 'student' && requestedPath.startsWith('/student')) ||
            (role === 'teacher' && requestedPath.startsWith('/teacher')) ||
            (role === 'parent' && requestedPath.startsWith('/parent'))
          ) {
            console.log('[AuthGuard] Kullanıcı doğru rolde, geçişe izin veriliyor.');
            return true;
          }

          // Değilse uygun sayfaya yönlendir
          const redirectPath =
            role === 'admin' ? '/admin' :
            role === 'student' ? '/student' :
            role === 'teacher' ? '/teacher' :
            role === 'parent' ? '/parent' : '/';

          console.warn('[AuthGuard] Uygun sayfaya yönlendir:', redirectPath);
          router.navigate([redirectPath]);
          return false;
        })
      );
    })
  );
};
