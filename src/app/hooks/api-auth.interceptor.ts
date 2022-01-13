import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

@Injectable()
export class ApiAuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = request.headers; 
    let params = request.params;

    if (headers.has('x-protected-route')){
      if (headers.get('x-protected-route') == 'true'){
        params.set('APPID', '1884d402665d107395559afac11f5d87');
        headers = headers.delete('x-protected-route');
      }
    }
  
    return next.handle(request.clone({ headers, params }));
  }

}

export const ApiAuthInterceptorService = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiAuthInterceptor,
  multi: true
}
