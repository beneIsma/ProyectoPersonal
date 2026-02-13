import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthCookieService {

  constructor(private cookieService: CookieService) {
  }
  set(key: string, value: string, days:number = 7) {
    this.cookieService.set(
      key,
      value,
      days,
      "/",
      undefined,
      false,
      "Strict",
    )
  }

  get(key: string): any {
    return this.cookieService.get(key)
  }

  remove(key: string) {
    return this.cookieService.delete(key)
  }

  removeAll(key: string) {
    return this.cookieService.deleteAll(key)
  }

  exists(key: string) {
    return this.cookieService.check(key)
  }

}
