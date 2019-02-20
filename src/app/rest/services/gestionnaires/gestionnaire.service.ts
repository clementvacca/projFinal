import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gestionnaire} from '../../../model/gestionnaire/gestionnaire';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GestionnaireService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/ajc/rest/gestionnaire');
  }

  public findAllWithFormation(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/ajc/rest/gestionnaire/formation');
  }

  public findById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/ajc/rest/gestionnaire/${id}`, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/ajc/rest/gestionnaire/${id}`, {headers: this.headers});
  }

  public update(gestionnaire: Gestionnaire): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/ajc/rest/gestionnaire/${gestionnaire.id}`, gestionnaire, {headers: this.headers});
  }

  public create(gestionnaire: Gestionnaire): Observable<any> {
    const g = {
      'id': gestionnaire.id,
      'prenom': gestionnaire.prenom,
      'nom': gestionnaire.nom,
      'adresse': {
        'numero': gestionnaire.adresse.numero,
        'rue': gestionnaire.adresse.rue,
        'codePostal': gestionnaire.adresse.codePostal,
        'ville': gestionnaire.adresse.ville,
      },
    };
    return this.http.post<any>(`http://localhost:8080/ajc/rest/gestionnaire`, g, {headers: this.headers});
  }

  public deconnexion(): void {
    this.router.navigate(['/index']);
  }

}
