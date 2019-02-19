export class Formation {

  constructor( private _nomFormation?: string){
    this._nomFormation=_nomFormation;
  }


  get nomFormation(): string {
    return this._nomFormation;
  }

  set nomFormation(value: string) {
    this._nomFormation = value;
  }
}

