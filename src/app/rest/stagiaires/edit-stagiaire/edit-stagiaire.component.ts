import {Component, OnInit} from '@angular/core';
import {Stagiaire} from '../../../model/stagiaire/stagiaire';
import {StagiairesService} from '../../services/stagiaires/stagiaires.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormationService} from '../../services/formation/formation.service';
import {FormationDetailComponent} from '../../formation/formation-detail/formation-detail.component';
import {Formation} from '../../../model/formation/formation';

@Component({
  selector: 'app-edit-stagiaire',
  templateUrl: './edit-stagiaire.component.html',
  styleUrls: ['./edit-stagiaire.component.css']
})
export class EditStagiaireComponent implements OnInit {

  private stagiaire: Stagiaire = new Stagiaire();
  private formation: Formation = new Formation();
  private formations: Formation[];
  private edit = false;
  private editFormation = 'false';

  constructor(private stagiaireService: StagiairesService, private formationService: FormationService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.formationService.findAll().subscribe(result => {
      this.formations = result;
    });
    this.activatedRoute.params.subscribe(params => {
      this.editFormation = params.edit;
      if (this.editFormation === 'true') {
        this.stagiaireService.findById(params.id).subscribe(result => {
          this.stagiaire = result;
        });
      }
      this.formationService.findById(params.titre).subscribe(result => {
        this.formation = result;
        this.stagiaire.formation = this.formation;
      });
    });
  }

  public save() {
    if (this.editFormation === 'true') {
      this.update();
    } else {
      console.log('passe dans le create');
      this.create();
    }
  }

  private create() {
    console.log(this.stagiaire.formation);
    this.stagiaireService.create(this.stagiaire).subscribe(result => {
      this.goList();
    });
  }

  private update() {
    if (this.editFormation) {
      console.log(this.stagiaire);
      this.stagiaireService.update(this.stagiaire).subscribe(result => {
        this.goList();
      });
    } else {
      this.stagiaireService.update(this.stagiaire).subscribe(result => {
        this.goList();
      });
    }

  }


  public cancel() {
    this.goList();
  }

  private goList() {
    this.activatedRoute.params.subscribe(params => {
      this.router.navigate([`formations/${params.titre}/detail`]);
    });

  }

}
