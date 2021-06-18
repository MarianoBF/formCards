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

  getAll(): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPersons);
    });
  }

  addPerson(person: Person): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPersons.push(person));
    });
  }
}
