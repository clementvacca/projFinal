import {Component, OnInit} from '@angular/core';
import {ModulenseignementService} from '../services/modulenseignement/modulenseignement.service';
import {Modulenseignement} from '../../model/modulenseignement/modulenseignement';

@Component({
  selector: 'app-modulenseignement',
  templateUrl: './modulenseignement.component.html',
  styleUrls: ['./modulenseignement.component.css']
})
export class ModulenseignementComponent implements OnInit {
  private modulenseignement: Modulenseignement[];

  constructor(private modEnsServ: ModulenseignementService) {
  }

  ngOnInit() {
    this.list();
  }

  private list() { // ici on appelle la fonction findAll du service
    this.modEnsServ.findAll().subscribe(result => { // subscribe car c'est un observable
      console.log(result);
      this.modulenseignement = result.modulenseignement;
    });
  }

}
