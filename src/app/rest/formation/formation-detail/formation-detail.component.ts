import {Component, OnInit} from '@angular/core';
import {Formation} from '../../../model/formation/formation';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {

  public formation: Formation;

  constructor() {
  }

  ngOnInit() {
  }

}
