import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  // newsapiurl
  newsApiUrl  = "https://fakestoreapi.com/products";

  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }









}
