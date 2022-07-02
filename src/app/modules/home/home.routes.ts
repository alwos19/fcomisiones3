import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaSolicitudesComponent } from './components/tabla-solicitudes/tabla-solicitudes.component';

const routes: Routes = [

    {
        path:'', component:TablaSolicitudesComponent
    }

]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
   
  ],
  exports:[
    RouterModule
  ]
})
export class HomeRoutingModule { }
