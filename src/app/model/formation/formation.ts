export class Formation {

<<<<<<< HEAD
  constructor(private _nomFormation?: string) {
    this._nomFormation = _nomFormation;
=======
  constructor( private _id: string, private _nomFormation?: string){
    this._nomFormation=_nomFormation;
    this._id=_id;
>>>>>>> e862bf713644a7830d65b74ff2d2284cef18d05e
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

