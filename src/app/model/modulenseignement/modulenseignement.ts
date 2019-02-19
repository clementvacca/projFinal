export class Modulenseignement {
  private _titre: string;
  private _duree: number;
  private _objectif: string;
  private _prerequis: string;
  private _contenu: string;


  constructor(titre: string, duree: number, objectif: string, prerequis: string, contenu: string) {
    this._titre = titre;
    this._duree = duree;
    this._objectif = objectif;
    this._prerequis = prerequis;
    this._contenu = contenu;
  }


  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get duree(): number {
    return this._duree;
  }

  set duree(value: number) {
    this._duree = value;
  }

  get objectif(): string {
    return this._objectif;
  }

  set objectif(value: string) {
    this._objectif = value;
  }

  get prerequis(): string {
    return this._prerequis;
  }

  set prerequis(value: string) {
    this._prerequis = value;
  }

  get contenu(): string {
    return this._contenu;
  }

  set contenu(value: string) {
    this._contenu = value;
  }
}
