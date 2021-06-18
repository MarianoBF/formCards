import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PersonsComponent } from './components/persons/persons.component';

const routes: Routes = [
  { path: 'agregarPersona', component: FormComponent },
  { path: 'verPersonas', component: PersonsComponent },
  { path: '**', redirectTo: 'verPersonas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
