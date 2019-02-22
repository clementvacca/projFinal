import {ModulenseignementService} from '../../services/modulenseignement/modulenseignement.service';
import {FormationService} from '../../services/formation/formation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Modulenseignement} from '../../../model/modulenseignement/modulenseignement';
import {Formation} from '../../../model/formation/formation';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-choixmodule',
  templateUrl: './choixmodule.component.html',
  styleUrls: ['./choixmodule.component.css']
})
export class ChoixmoduleComponent implements OnInit {
  private modules: Modulenseignement[];
  private modulesFormation: Modulenseignement[];
  titre: string;
  formation: string;
  private formationVrai: Formation;
  moduleChoisi: Modulenseignement;

  constructor(private modulenseignementService: ModulenseignementService, private formationService: FormationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.list();
    this.activatedRoute.params.subscribe(params => {
      this.titre = params.titre;
    });
    this.formationService.findById(this.titre).subscribe(result => {
      this.modulesFormation = result.modules;
      this.formation = result.id;
      this.formationVrai = result;
    });
  }

  private list() {
    this.modulenseignementService.findAll().subscribe(result => {
      this.modules = result;
    });
  }

  private ajout(module: Modulenseignement) {
    this.formationService.findById(this.formation).subscribe(result => {
      this.formationVrai = result;
    });
    this.modulesFormation.push(module);
    this.formationVrai.modules = this.modulesFormation;
    this.formationService.update(this.formationVrai).subscribe(result => {
      this.formationVrai = result;
      console.log(result);
    });
    console.log(this.modulesFormation);
  }

  private delete(module: Modulenseignement) {
    //  console.log(this.formationVrai);
    // this.formationService.findById(this.formation).subscribe(result => {
    //   this.formationVrai = result;
    //   this.modulenseignementService.retirer(this.formationVrai.id, module);
    // });
    //   this.formationService.update(this.formationVrai).subscribe(result => {
    //  this.formationVrai = result;
    //   });
    this.modulenseignementService.retirer(this.formation, module).subscribe(result => {
      this.listM();
    }, error => {
      console.log(error);
    });
  }

  private cancel() {
    this.activatedRoute.params.subscribe(params => {
      this.router.navigate([`formations/${params.titre}/detail`]);
    });
  }

  private listM() {
    this.formationService.findById(this.titre).subscribe(result => {
      this.modulesFormation = result.modules;
    });

  }
}
