import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StagiairesService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/ajc/rest/gestionnaire/formation/', {headers: this.headers});
  }

}
