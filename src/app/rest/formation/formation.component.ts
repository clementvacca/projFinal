import { Component, OnInit } from '@angular/core';
import {Formation} from '../../model/formation/formation';
import {FormationService} from '../services/formation/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {


  private formations: Formation[];

  constructor(private formationService: FormationService) {
  }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.formationService.findAll().subscribe(result => {
      console.log(result);
      this.formations = result._embedded.ordinateurs;
    });
  }

  delete(code: string) {
    this.formationService.delete(code).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }

}

