import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { PERSONS } from 'src/assets/persons.db';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  arrPersons: Person[];

  constructor() {
    this.arrPersons = [...PERSONS];
  }

  getAll(): Person[] {
    return this.arrPersons;
  }

  addPerson(person: Person): void {
    this.arrPersons.push(person);
    console.log('arr', this.arrPersons);
  }
}
