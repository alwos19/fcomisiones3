import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

<<<<<<< HEAD

{
  path: '',
  loadChildren:()=> import('./solicitudes/solicitudes.module').then(
    (m) => m.SolicitudesModule)
},
{ path: '**', redirectTo: '', pathMatch: 'full' },
=======
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
}


>>>>>>> jara


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
