import { Component, OnInit } from '@angular/core';
import {Formation} from '../../model/formation/formation';
import {FormationService} from '../services/formation/formation.service';
import {Stagiaire} from '../../model/stagiaire/stagiaire';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {


  public formations: Formation[] ;
  public stagiaires: Stagiaire[];
  private edit = false;


  constructor( private formationService: FormationService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.formationService.findAll().subscribe(result => {
      console.log(result);
      this.formations = result;
    });
  }

  delete(id: string) {
    this.formationService.delete(id).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }

  getLogin() {
    return JSON.parse(localStorage.getItem('user')).login;
  }
  logout() {
    console.log('Tentative de déconnexion');

    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }


}

