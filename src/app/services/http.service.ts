import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public static JsonHeader = { "Content-Type": "application/json" }
  public static AuthHeader = { "X-Protected-Route": "true" }

  constructor(private http: HttpClient) { }

  get<T = any>(url: string, params?: any, headers?: any): Promise<T | any>{
    return new Promise((next, _reject) => {
      this.http.get(url, {
        params: {...params},
        headers: {...headers}
      }).subscribe({ next, error: (e) => next(e.error) });
    });
  }

  post<T = any>(url: string, body: any, headers?: any): Promise<T | any>{
    return new Promise((next, _reject) => {
      this.http.post(url, body, {
        headers: {...headers}
      }).subscribe({ next, error: (e) => next(e.error) });
    });
  }

  put<T = any>(url: string, body: any, headers?: any): Promise<T | any>{
    return new Promise((next, _reject) => {
      this.http.put(url, body, {
        headers: {...headers}
      }).subscribe({ next, error: (e) => next(e.error) });
    });
  }

  delete<T = any>(url: string, headers?: any): Promise<T | any>{
    return new Promise((next, _reject) => {
      this.http.delete(url, {
        headers: {...headers}
      }).subscribe({ next, error: (e) => next(e.error) });
    });
  }

}