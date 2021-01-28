import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsociacionesComponent } from './asociaciones/asociaciones.component';

import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [

  { path: '', component: AsociacionesComponent },
  { path: 'usuario', component: UsuarioComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
