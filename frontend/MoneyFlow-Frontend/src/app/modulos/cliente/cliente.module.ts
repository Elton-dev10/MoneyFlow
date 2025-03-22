import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

@NgModule({
  declarations: [ClienteComponent, ClienteEditComponent, ClienteFormComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ]
})
export class ClienteModule { }
