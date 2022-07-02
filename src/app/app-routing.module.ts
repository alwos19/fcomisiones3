import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  { 
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m=> m.AuthModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },

  { path: 'comision',
    loadChildren:() => import( './modules/comisiones/comisiones.module').then(m=> m.ComisionesModule)},

  { path: '**', redirectTo: 'home'}





// {
//   path: '',
//   redirectTo: '/home/tabla-solicitudes',
//   pathMatch:'full'
// },

// {
//   path: 'home',
//   loadChildren:()=> 
//     import('./components/components.module').then(
//     (m) => m.ComponentsModule)
// },

// {
//   path: 'comision',
//   loadChildren:()=>
//   import('./modules/comisiones/comisiones.module').then(
//     (m)=>m.ComisionesModule)
// },

// {
//   path: 'dexclusiva',
//   loadChildren:()=>
//   import('./modules/dexclusiva/dexclusiva.module').then(
//     (m)=>m.DexclusivaModule)
// }


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
