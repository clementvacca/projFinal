import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formation} from '../../../model/formation/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {


  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
      }
    );

  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/ajc/rest/formation/', {headers: this.headers});
  }

  public findById(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/ajc/rest/formation/${id}`, {headers: this.headers});
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`
   http://localhost:8080/ajc/rest/formation/${id}`, {headers: this.headers});
  }

  public update(formation: Formation): Observable<any> {
    console.log(formation);
    return this.http.put<any>(`http://localhost:8080/ajc/rest/formation`, formation,
      {headers: this.headers});
  }

  public create(formation: Formation): Observable<any> {
    const f = {
      'id': formation.id,
      'dateDebut': formation.dateDebut,
      'duree': formation.duree
    };
    return this.http.post<any>(`http://localhost:8080/ajc/rest/formation`, f, {headers: this.headers});
  }
}
