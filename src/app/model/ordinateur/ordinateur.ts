import {Stagiaire} from '../stagiaire/stagiaire';

export class Ordinateur {
  private _code: string;
  private _cout: number;
  private _dates: Date[];
  private _processeur: string;
  private _ram: number;
  private _dd: number;
  private _annee: number;
  private _stagiaire: Stagiaire;


  constructor(code?: string, cout?: number, dates?: [Date], processeur?: string, ram?: number, dd?: number, annee?: number, stagiaire?: Stagiaire) {
    this._code = code;
    this._cout = cout;
    this._dates = dates;
    this._processeur = processeur;
    this._ram = ram;
    this._dd = dd;
    this._annee = annee;
    this._stagiaire = stagiaire;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get cout(): number {
    return this._cout;
  }

  set cout(value: number) {
    this._cout = value;
  }

  get dates(): Date[] {
    return this._dates;
  }

  set dates(value: Date[]) {
    this._dates = value;
  }

  get processeur(): string {
    return this._processeur;
  }

  set processeur(value: string) {
    this._processeur = value;
  }

  get ram(): number {
    return this._ram;
  }

  set ram(value: number) {
    this._ram = value;
  }

  get dd(): number {
    return this._dd;
  }

  set dd(value: number) {
    this._dd = value;
  }

  get annee(): number {
    return this._annee;
  }

  set annee(value: number) {
    this._annee = value;
  }

  get stagiaire(): Stagiaire {
    return this._stagiaire;
  }

  set stagiaire(value: Stagiaire) {
    this._stagiaire = value;
  }
}
