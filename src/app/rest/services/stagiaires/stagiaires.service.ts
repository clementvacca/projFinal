import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stagiaire} from '../../../model/stagiaire/stagiaire';

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
    return this.http.get<any>('http://localhost:8080/ajc/rest/stagiaire/', {headers: this.headers});
  }

  public findById(id: number) {
    return this.http.get<any>(`http://localhost:8080/ajc/rest/stagiaire/${id}`, {headers: this.headers});

  }

  public create(stagiaire: Stagiaire): Observable<any> {
    const s = {
      'nom': stagiaire.nom,
      'prenom': stagiaire.prenom
    };
    return this.http.post<any>(`http://localhost:8080/ajc/rest/stagiaire`, s, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`
    http://localhost:8080/ajc/rest/stagiaire/${id}`, {headers: this.headers});
  }

  public update(stagiaire: Stagiaire): Observable<any> {
    console.log(stagiaire.id);
    return this.http.put<any>(`http://localhost:8080/ajc/rest/stagiaire/${stagiaire.id}`, stagiaire, {headers: this.headers});
  }
}
