
import {Modulenseignement} from '../../../model/modulenseignement/modulenseignement';
import {ModulenseignementService} from '../../services/modulenseignement/modulenseignement.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modulenseignementlist',
  templateUrl: './modulenseignementlist.component.html',
  styleUrls: ['./modulenseignementlist.component.css']
})
export class ModulenseignementlistComponent implements OnInit {

  private modules: Modulenseignement[];
  private titre: string;

  constructor(private modulenseignementService: ModulenseignementService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.modulenseignementService.findAll().subscribe(result => {
      console.log(result);
      this.modules = result;
    });
  }

  delete(module: Modulenseignement) {
    this.modulenseignementService.retirer(this.titre, module).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }

  ajout() {
    this.activatedRoute.params.subscribe(params => {
      this.router.navigate(['formations', params.titre, 'detail', 'modules']);
    });

  }
}
