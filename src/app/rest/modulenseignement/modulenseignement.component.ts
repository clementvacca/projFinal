import {Component, OnInit} from '@angular/core';
import {ModulenseignementService} from '../services/modulenseignement/modulenseignement.service';
import {Modulenseignement} from '../../model/modulenseignement/modulenseignement';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modulenseignement',
  templateUrl: './modulenseignement.component.html',
  styleUrls: ['./modulenseignement.component.css']
})
export class ModulenseignementComponent implements OnInit {
  private modulenseignement: Modulenseignement = new Modulenseignement();
  private edit = false;

  constructor(private modEnsServ: ModulenseignementService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.titre) {
        this.edit = true;
        console.log(this.edit);
        this.modEnsServ.findById(params.titre).subscribe(result => {
          console.log(result);
          this.modulenseignement = result;
        });
      }
    });
  }

  public save() {
    if (this.edit) {
      this.update();
    } else {
      this.create();
    }
  }
  private create() {
    this.modEnsServ.create(this.modulenseignement).subscribe(result => {
      this.goList();
    });
  }

  private update() {
    this.modEnsServ.update(this.modulenseignement).subscribe(result => {
      this.goList();
    });
  }


  public cancel() {
    this.goList();
  }

  private goList() {
    this.router.navigate(['/modulenseignementlist']);
  }

}
