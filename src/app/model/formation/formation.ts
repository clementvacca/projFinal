import {Modulenseignement} from '../modulenseignement/modulenseignement';

export class Formation {
  private _id: string;
  private _modules: Modulenseignement[];
  constructor(_id?: string, private _dateDebut?: Date, private _duree?: number) {
    this._id = _id;
  }


  get dateDebut(): Date {
    return this._dateDebut;
  }

  set dateDebut(value: Date) {
    this._dateDebut = value;
  }

  get duree(): number {
    return this._duree;
  }

  set duree(value: number) {
    this._duree = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get modules(): Modulenseignement[] {
    return this._modules;
  }

  set modules(value: Modulenseignement[]) {
    this._modules = value;
  }
}

