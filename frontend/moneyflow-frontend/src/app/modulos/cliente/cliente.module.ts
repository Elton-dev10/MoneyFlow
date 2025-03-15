import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';


@NgModule({
  declarations: [
    ClienteComponent,
    ClienteEditComponent,
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
