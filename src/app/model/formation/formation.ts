export class Formation {
  private _id: string;

  constructor(private _nomFormation?: string) {
    this._nomFormation = _nomFormation;
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

