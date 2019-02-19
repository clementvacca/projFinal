import {Adresse} from '../Adresse/adresse';
import {Ordinateur} from '../ordinateur/ordinateur';

class Coordonees {
}

export class Stagiaire {
  private _id: number;
  private _coordonnees: Coordonees;
  private _adresse: Adresse;
  private _prenom: string;
  private _nom: string;
  private _ordinateur: Ordinateur;

  constructor(id?: number, coordonnees?: Coordonees, adresse?: Adresse, prenom?: string, nom?: string, ordinateur?: Ordinateur) {
    this._id = id;
    this._coordonnees = coordonnees;
    this._adresse = adresse;
    this._prenom = prenom;
    this._nom = nom;
    this._ordinateur = ordinateur;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get coordonnees(): Coordonees {
    return this._coordonnees;
  }

  set coordonnees(value: Coordonees) {
    this._coordonnees = value;
  }

  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
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

  get ordinateur(): Ordinateur {
    return this._ordinateur;
  }

  set ordinateur(value: Ordinateur) {
    this._ordinateur = value;
  }
}
