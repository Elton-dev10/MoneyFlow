import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const routes: Routes = [
  {path: '', component: ClienteComponent},
  {path: 'edit', component: ClienteEditComponent},
  {path: 'cadastrar', component: ClienteFormComponent}
];

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ClienteRoutingModule { }