import { Injectable, Injector } from '@angular/core';

  import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
  import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { ServiceNameService } from './api.sevice';

  
  @Injectable()

  export class TokenInterceptorsService implements HttpInterceptor {

    constructor(private inject:Injector) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let authService=this.inject.get(ServiceNameService)
      let token=sessionStorage.getItem('token')
      // let jwttoken=req.clone({
      //   setHeaders:{
      //     // Authorization:`bearer` + token
      //     'Authorization': 'bearer '+token

          
      //   }
      // })


//  req=req.clone({
//     setHeaders:{
//       Authorization: `Bearer ${token}`
//     }
//   });

let jwtToken=req.clone({
  setHeaders:{
    Authorization:`bearer` + authService.getToken()

  }
});

      return next.handle(jwtToken);
    }
  }

