export class Coordonnees {
  private _tel: string;
  private _fax: string;
  private _mail: string;

  constructor(tel?: string, fax?: string, mail?: string) {
    this._tel = tel;
    this._fax = fax;
    this._mail = mail;
  }


  get tel(): string {
    return this._tel;
  }

  set tel(value: string) {
    this._tel = value;
  }

  get fax(): string {
    return this._fax;
  }

  set fax(value: string) {
    this._fax = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }
}
