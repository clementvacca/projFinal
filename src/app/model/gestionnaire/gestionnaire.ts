import {Coordonnees} from '../coordonnees/coordonnees';
import {Adresse} from '../adresse/adresse';
import {Formation} from "../formation/formation";


export class Gestionnaire {
  constructor(private  _id?: number, private _prenom?: string, private _nom?: string, private _coordonnees?: Coordonnees,
              private _adresse?: Adresse, private _formation?: Formation) {
  }


  get id(): number {
    return this._id;
  }

  get formation(): Formation {
    return this._formation;
  }

  set formation(value: Formation) {
    this._formation = value;
  }

  set id(value: number) {
    this._id = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get coordonnees(): Coordonnees {
    return this._coordonnees;
  }

  set coordonnees(value: Coordonnees) {
    this._coordonnees = value;
  }

  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
  }
}
