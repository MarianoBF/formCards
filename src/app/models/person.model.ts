import { Team } from './team-enums.model';

export class Person {
  name: string;
  surname: string;
  age: number;
  email: string;
  team: Team;
  image: string;

  constructor(
    name: string,
    surname: string,
    age: number,
    email: string,
    team: Team,
    image: string
  ) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.team = team;
    this.email = email;
    this.image = image;
  }
}
