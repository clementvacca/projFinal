import { Component, OnInit } from '@angular/core';
import {Modulenseignement} from '../../../model/modulenseignement/modulenseignement';
import {ModulenseignementService} from '../../services/modulenseignement/modulenseignement.service';

@Component({
  selector: 'app-modulenseignementlist',
  templateUrl: './modulenseignementlist.component.html',
  styleUrls: ['./modulenseignementlist.component.css']
})
export class ModulenseignementlistComponent implements OnInit {

  private modules: Modulenseignement[];

  constructor(private modulenseignementService: ModulenseignementService) {
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

  delete(titre: string) {
    this.modulenseignementService.delete(titre).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }
}
