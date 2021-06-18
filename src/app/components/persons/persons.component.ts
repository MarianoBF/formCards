import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons: Person[] = [];

  constructor(private PersonsService: PersonsService) { }

  ngOnInit(): void {
    this.persons = this.PersonsService.getAll()
  }

}
