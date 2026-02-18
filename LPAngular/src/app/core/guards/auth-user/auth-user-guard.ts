import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AuthCookieService} from '../../services/auth-cookie/auth-cookie.service';

export const authUserGuard: CanActivateFn = (route, state) => {

  const cookie = inject(AuthCookieService)
  const router = inject(Router)

  const token = cookie.get('token_usuario');

  if (!token) {
    return router.navigate(['']);
  }
  return true;
};
