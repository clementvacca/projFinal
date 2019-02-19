import { Component, OnInit } from '@angular/core';
import {ModulenseignementService} from '../services/modulenseignement/modulenseignement.service';
import {Modulenseignement} from '../../model/modulenseignement/modulenseignement';

@Component({
  selector: 'app-modulenseignement',
  templateUrl: './modulenseignement.component.html',
  styleUrls: ['./modulenseignement.component.css']
})
export class ModulenseignementComponent implements OnInit {
  private modulenseignement: Modulenseignement
  constructor(private modEnsServ: ModulenseignementService) { }

  ngOnInit() {
  }

  private list() {
    this.modEnsServ.findAll().subscribe(result => {
      this.modulenseignement = result.modulenseignement;
    });
  }

}
