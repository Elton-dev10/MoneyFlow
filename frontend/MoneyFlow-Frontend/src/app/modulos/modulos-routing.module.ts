import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'cliente', loadChildren:() => import("./cliente/cliente.module").then(m => m.ClienteModule)}
];

@NgModule({
  exports:[RouterModule],
    imports: [
      RouterModule.forChild(routes)
    ]
})
export class ModulosRoutingModule { }
