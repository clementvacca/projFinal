export class Adresse {
  private _numero: string;
  private _rue: string;
  private _codePostal: string;
  private _ville: string;


  constructor(numero?: string, rue?: string, codePostal?: string, ville?: string) {
    this._numero = numero;
    this._rue = rue;
    this._codePostal = codePostal;
    this._ville = ville;
  }

  get numero(): string {
    return this._numero;
  }

  set numero(value: string) {
    this._numero = value;
  }

  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }

  get codePostal(): string {
    return this._codePostal;
  }

  set codePostal(value: string) {
    this._codePostal = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }
}
