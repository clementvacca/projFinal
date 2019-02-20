import {Component, OnInit} from '@angular/core';
import {Stagiaire} from '../../../model/stagiaire/stagiaire';
import {StagiairesService} from '../../services/stagiaires/stagiaires.service';
import {FormationService} from '../../services/formation/formation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-stagiaires-formation',
  templateUrl: './stagiaires-formation.component.html',
  styleUrls: ['./stagiaires-formation.component.css']
})
export class StagiairesFormationComponent implements OnInit {

  private stagiaires: Stagiaire[];
  editFormation = false;

  constructor(private stagiaireService: FormationService, private stagiaireService2: StagiairesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.list(params.titre);
      this.editFormation = true;
    });
  }

  private list(id: string) {
    this.stagiaireService.findById(id).subscribe(result => {
      console.log(result);
      this.stagiaires = result.stagiaires;
    });
  }

  delete(id: number) {
    this.stagiaireService2.delete(id).subscribe(result => {
      this.list(result.id);
    }, error => {
      console.log(error);
    });

  }

  edit(id: number) {
    this.activatedRoute.params.subscribe(params => {
      this.router.navigate(['/formations', params.titre, 'detail', 'stagiaires',
        this.editFormation, id]);
    });
  }

}
