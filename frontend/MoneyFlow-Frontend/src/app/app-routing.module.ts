import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './modulos/cliente/cliente.component';

const routes: Routes = [
  {path:"app", loadChildren: () => import("./modulos/modulos.module").then((m) => {return m.ModulosModule})}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
