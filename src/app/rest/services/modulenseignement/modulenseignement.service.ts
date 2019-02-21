import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Modulenseignement} from '../../../model/modulenseignement/modulenseignement';
import {Stagiaire} from '../../../model/stagiaire/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class ModulenseignementService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/ajc/rest/module', {headers: this.headers});
  }

  public findById(titre: string) {
    return this.http.get<any>(`http://localhost:8080/ajc/rest/module/${titre}`, {headers: this.headers});

  }

  public create(modulenseignement: Modulenseignement): Observable<any> {
    const s = {
      titre: modulenseignement.titre,
      duree: modulenseignement.duree,
      objectif: modulenseignement.objectif,
      prerequis: modulenseignement.prerequis,
      contenu: modulenseignement.contenu
    };
    return this.http.post<any>(`http://localhost:8080/ajc/rest/module`, s, {headers: this.headers});
  }

  public delete(titre: string): Observable<any> {
    return this.http.delete(`
    http://localhost:8080/ajc/rest/module/${titre}`, {headers: this.headers});
  }
  public update(modulenseignement: Modulenseignement): Observable<any> {
    console.log(modulenseignement.titre);
    return this.http.put<any>(`http://localhost:8080/ajc/rest/module/`, modulenseignement, {headers: this.headers});
  }

  retirer(id: string, module: Modulenseignement) {
    return this.http.delete(`http://localhost:8080/ajc/rest/${module}/`);
  }
}
