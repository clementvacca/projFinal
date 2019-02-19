export class Formation {

  constructor( private _id: string, private _nomFormation?: string){
    this._nomFormation=_nomFormation;
    this._id=_id;
  }


  get nomFormation(): string {
    return this._nomFormation;
  }

  set nomFormation(value: string) {
    this._nomFormation = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}

