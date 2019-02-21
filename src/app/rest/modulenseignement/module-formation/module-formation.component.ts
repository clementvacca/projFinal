import {Component, OnInit} from '@angular/core';
import {Modulenseignement} from '../../../model/modulenseignement/modulenseignement';
import {ModulenseignementService} from '../../services/modulenseignement/modulenseignement.service';
import {FormationService} from '../../services/formation/formation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-module-formation',
  templateUrl: './module-formation.component.html',
  styleUrls: ['./module-formation.component.css']
})
export class ModuleFormationComponent implements OnInit {

  private modules: Modulenseignement[];
  editFormation = false;
  titre: string;
  id: number;

  constructor(private moduleService: ModulenseignementService, private formationService: FormationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  ajout() {

  }

  delete(titre: string) {

  }
}
