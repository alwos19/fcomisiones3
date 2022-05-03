import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: '',
  redirectTo: 'comisiones',
  pathMatch:'full'
},

{
  path: 'comisiones',
  loadChildren:()=> import('./comisiones/comisiones.module').then(
    (m) => m.ComisionesModule)
},
{ path: '**', redirectTo: 'comisiones', pathMatch: 'full' },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
