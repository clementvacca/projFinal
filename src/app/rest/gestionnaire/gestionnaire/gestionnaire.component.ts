import { Component, OnInit } from '@angular/core';
import {Gestionnaire} from '../../../model/gestionnaire/gestionnaire';
import {GestionnaireService} from '../../services/gestionnaires/gestionnaire.service';
import {FormationService} from '../../services/formation/formation.service';
import {Formation} from '../../../model/formation/formation';

@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css']
})
export class GestionnaireComponent implements OnInit {

  private formations: Formation[];
  private f: Formation;

  constructor(private formationService: FormationService) { }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.formationService.findAll().subscribe(result => {
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

//  deconnexion() {
//    this.formationService.deconnexion();
//  }

}
