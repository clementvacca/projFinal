import {Component, OnInit} from '@angular/core';
import {Stagiaire} from '../../model/stagiaire/stagiaire';
import {StagiairesService} from '../services/stagiaires/stagiaires.service';
import {FormationService} from '../services/formation/formation.service';

@Component({
  selector: 'app-stagiaires',
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.css']
})
export class StagiairesComponent implements OnInit {

  private stagiaires: Stagiaire[];

  constructor(private stagiaireService: StagiairesService) {
  }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.stagiaireService.findAll().subscribe(result => {
      console.log(result);
      this.stagiaires = result;
    });
  }
}
