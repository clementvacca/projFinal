export class Modulenseignement {
  private _titre: string;
  private _duree: number;
  private _objectif: string;
  private _prerequis: string;
  private _contenu: string;
  private _dateDebut: number;
  private _dateFin: number;
  private _niveau: string;
  private _matiere: string;


  constructor(titre: string, duree: number, objectif: string, prerequis: string, contenu: string, dateDebut: number, dateFin: number, niveau: string, matiere: string) {
    this._titre = titre;
    this._duree = duree;
    this._objectif = objectif;
    this._prerequis = prerequis;
    this._contenu = contenu;
    this._dateDebut = dateDebut;
    this._dateFin = dateFin;
    this._niveau = niveau;
    this._matiere = matiere;
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

  get dateDebut(): number {
    return this._dateDebut;
  }

  set dateDebut(value: number) {
    this._dateDebut = value;
  }

  get dateFin(): number {
    return this._dateFin;
  }

  set dateFin(value: number) {
    this._dateFin = value;
  }

  get niveau(): string {
    return this._niveau;
  }

  set niveau(value: string) {
    this._niveau = value;
  }

  get matiere(): string {
    return this._matiere;
  }

  set matiere(value: string) {
    this._matiere = value;
  }
}
