import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpInterceptorService implements HttpInterceptor {
  constructor(private token: TokenStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.token.getToken();
    if (!token) {
      return next.handle(req);
    }
    if (this.token.getUsername() != null && token != null) {
      // let headers = new Headers();
      // headers.append( 'Content-Type', 'application/json' );

      const req1 = req.clone(
        {
          headers: req.headers.append('authorization', `Bearer ${token}`)
        }
      )

      //   Accept: `application/json`,
      // 'Content-Type': `application/json`,
      // 'authorization': `Bearer ${token}`

      // } });

      //   const req1 = req.clone({
      //     headers: req.headers.set('Authorization', `Bearer ${token}`),
      //   });
      // console.log(token);


      console.log(req1);


      return next.handle(req1);
    }

  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true }
];
