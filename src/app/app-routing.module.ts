import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: '',
  redirectTo: 'home',
  pathMatch:'full'
},

{
  path: 'solicitudes',
  loadChildren:()=> import('./solicitudes/solicitudes.module').then(
    (m) => m.SolicitudesModule)
},
{ path: '**', redirectTo: '/solicitudes', pathMatch: 'full' },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
