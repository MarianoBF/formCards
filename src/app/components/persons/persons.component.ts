import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonsService } from '../../services/persons.service';
import { Team } from 'src/app/models/team-enums.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  persons: Person[] = [];

  constructor(private PersonsService: PersonsService) {}

  ngOnInit(): void {
    this.PersonsService.getAll().then((res) => (this.persons = res));
  }

  getColor(i: Team): string {
    switch (i) {
      case 'Rojo':
        return 'lightcoral';
      case 'Verde':
        return 'lightgreen';
      case 'Azul':
        return 'lightblue';
      case 'Amarillo':
        return 'lightyellow';
      default:
        return 'white';
    }
  }
}
