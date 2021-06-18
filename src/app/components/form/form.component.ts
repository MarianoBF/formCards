import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../models/person.model';
import { PersonsService } from '../../services/persons.service';
import { Team } from '../../models/team-enums.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  teamMember: Person;
  teamMemberForm: FormGroup;
  teams: string[] = [Team.AMARILLO, Team.AZUL, Team.ROJO, Team.VERDE];

  constructor(private PersonsService: PersonsService, private router: Router) {
    this.teamMemberForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl(),
      password: new FormControl(),
      age: new FormControl('', [this.ageValidator]),
      email: new FormControl('', [Validators.pattern(/@/)]),
      team: new FormControl(),
      image: new FormControl(''),
    });
    this.teamMember = { ...this.teamMemberForm.value };
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.teamMember = { ...this.teamMemberForm.value };
    this.PersonsService.addPerson(this.teamMember).then(res=>{
      console.log("added ok:", res);
      this.router.navigate(["/verPersonas"])
    });
  }

  ageValidator(formControl: any): any {
    console.log(formControl.value);
    const max = 90;
    const min = 18;
    const value = formControl.value;
    if (value > 18 && value < 90) {
      return null;
    } else {
      return { edadvalidator: { max, min } };
    }
  }
}
