import {Component, OnInit} from '@angular/core';
import {Modulenseignement} from '../../../model/modulenseignement/modulenseignement';
import {ModulenseignementService} from '../../services/modulenseignement/modulenseignement.service';
import {FormationService} from '../../services/formation/formation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-aoduleenseignementlist-absolue',
  templateUrl: './aoduleenseignementlist-absolue.component.html',
  styleUrls: ['./aoduleenseignementlist-absolue.component.css']
})
export class AoduleenseignementlistAbsolueComponent implements OnInit {
  private modules: Modulenseignement[];

  constructor(private modulenseignementService: ModulenseignementService, private formationService: FormationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.modulenseignementService.findAll().subscribe(result => {
      this.modules = result;
      console.log(result);
    });
  }
}
