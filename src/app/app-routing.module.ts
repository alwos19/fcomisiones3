import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: '',
  redirectTo: '/home/tabla-solicitudes',
  pathMatch:'full'
},

{
  path: 'home',
  loadChildren:()=> 
    import('./components/components.module').then(
    (m) => m.ComponentsModule)
},

{
  path: 'comision',
  loadChildren:()=>
  import('./models/comisiones/comisiones.module').then(
    (m)=>m.ComisionesModule)
},

{
  path: 'dexclusiva',
  loadChildren:()=>
  import('./models/dexclusiva/dexclusiva.module').then(
    (m)=>m.DexclusivaModule)
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
