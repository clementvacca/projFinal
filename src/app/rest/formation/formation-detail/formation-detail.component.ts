import {Component, OnInit} from '@angular/core';
import {Formation} from '../../../model/formation/formation';
import {Stagiaire} from '../../../model/stagiaire/stagiaire';
import {ActivatedRoute, Router} from '@angular/router';
import {FormationService} from '../../services/formation/formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {

  public formation: Formation = new Formation();
  public stagiaires: Stagiaire[];
  private _edit = false;


  constructor(private formationService: FormationService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.titre) {
        this._edit = true;
        this.formationService.findById(params.titre).subscribe(result => {
          this.formation = result;
        });
      }
    });
  }
  public save() {
    if (this._edit) {
      this.update();
    } else {
      this.create();
    }
  }

  private create() {
    this.formationService.create(this.formation).subscribe(result => {
      this.goList();
    });
  }

  private update() {
    this.formationService.update(this.formation).subscribe(result => {
      this.goList();
    });
  }


  public cancel() {
    this.goList();
  }

  private goList() {
    this.router.navigate(['/formations']);
  }


  get edit(): boolean {
    return this._edit;
  }

  set edit(value: boolean) {
    this._edit = value;
  }
}
