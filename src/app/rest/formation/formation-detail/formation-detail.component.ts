import {Component, OnInit} from '@angular/core';
import {Formation} from '../../../model/formation/formation';
import {Stagiaire} from '../../../model/stagiaire/stagiaire';
import {ActivatedRoute, Router} from '@angular/router';
import {FormationService} from '../../services/formation/formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {

  public formation: Formation = new Formation();
  public stagiaires: Stagiaire[];
  private edit = false;


  constructor(private formationService: FormationService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.edit = true;
        this.formationService.findById(params.id).subscribe(result => {
          this.formation = result;
        });
      }
    });
  }

}
