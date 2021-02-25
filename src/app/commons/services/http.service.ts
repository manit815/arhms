import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constants/environment.const';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }
  
  public getEndPoint= function(endpointURL): any {
    return `${BASE_URL.protocol}://${BASE_URL.host}:${BASE_URL.port}/${endpointURL}`;
  }

  public getMethod = function(endpointURL): any {
      return this.httpClient.get(this.getEndPoint(endpointURL));
  }

  public postMethod = function(endpointURL): any {
    return this.httpClient.post(this.getEndPoint(endpointURL));
  }
}
