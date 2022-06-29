import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FEvalucionPropuestaComponent } from './f-evalucion-propuesta/f-evalucion-propuesta.component';

const routes: Routes = [

  {
    path:'f-evaluacion-propuesta',
    component:FEvalucionPropuestaComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DexclusivaRoutingModule {}