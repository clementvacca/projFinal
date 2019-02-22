import {Modulenseignement} from '../../../model/modulenseignement/modulenseignement';
import {ModulenseignementService} from '../../services/modulenseignement/modulenseignement.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormationService} from '../../services/formation/formation.service';

@Component({
  selector: 'app-modulenseignementlist',
  templateUrl: './modulenseignementlist.component.html',
  styleUrls: ['./modulenseignementlist.component.css']
})
export class ModulenseignementlistComponent implements OnInit {

  private modules: Modulenseignement[];
  private titreFormation: string;

  constructor(private modulenseignementService: ModulenseignementService, private formationService: FormationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.titreFormation = params.titre;
    });
    this.list();
  }

  private list() {
    this.formationService.findById(this.titreFormation).subscribe(result => {
      this.modules = result.modules;
      console.log(result);
    });
    // this.modulenseignementService.findAll().subscribe(result => {
    // console.log(result);
    // this.modules = result;
    // });
  }

  delete(module: Modulenseignement) {
    this.modulenseignementService.retirer(this.titreFormation, module).subscribe(result => {
      this.list();
      console.log(this.titreFormation);
    }, error => {
      console.log(error);
    });
  }

  ajout() {
    this
      .activatedRoute.params
      .subscribe(params => {
        this.router.navigate(['formations', params.titre, 'detail', 'modules']);
      });

  }
}
