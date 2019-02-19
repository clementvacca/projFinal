import { Component, OnInit } from '@angular/core';
import {Formation} from '../../../model/formation/formation';
import {FormationService} from '../../services/formation/formation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-formation-edit',
  templateUrl: './formation-edit.component.html',
  styleUrls: ['./formation-edit.component.css']
})
export class FormationEditComponent implements OnInit {

  private formation: Formation = new Formation();
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

  public save() {
    if (this.edit) {
      this.update();
    } else {
      this.create();
    }
  }

  private create() {
    this.formationService.create(this.formation).subscribe(result => {
      this.goList();
    });
  }

  private update() {
    this.formationService.update(this.formation).subscribe(result => {
      this.goList();
    });
  }


  public cancel() {
    this.goList();
  }

  private goList() {
    this.router.navigate(['/formations']);
  }

}
