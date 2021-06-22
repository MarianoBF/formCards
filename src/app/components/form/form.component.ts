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
  teamOptions: string[];

  constructor(private PersonsService: PersonsService, private router: Router) {
    this.teamMemberForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, this.ageValidator]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)]),
      team: new FormControl('', [Validators.required, this.teamValidator]),
      image: new FormControl(''),
    });
    this.teamMember = { ...this.teamMemberForm.value };
    this.teamOptions = [...Object.keys(Team)]
  }

  ngOnInit(): void {
    console.log(this.teamOptions)

  }

  onSubmit(): void {
    this.teamMember = { ...this.teamMemberForm.value };
    this.PersonsService.addPerson(this.teamMember).then(res=>{
      console.log("added ok:", res);
      this.router.navigate(["/verPersonas"])
    });
  }

  teamValidator(formControl: any): any {
    (formControl.value) in Team ? null : { teamValidator: "Elegí un equipo"}
  }

  ageValidator(formControl: any): any {
    const max = 90;
    const min = 18;
    const value = formControl.value;
    if (value > 18 && value < 90) {
      return null;
    } else {
      return { edadValidator: { max, min } };
    }
  }
}
