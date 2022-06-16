import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudesTableComponent } from './components/solicitudes-table/solicitudes-table.component';
import { VercomisionesComponent } from './page/comisiones/vercomisiones/vercomisiones.component';

const routes: Routes = [
  {
    path: 'solicitudes',
    component: SolicitudesTableComponent
  },

  {
    path: 'ver-comision/id',
    component: VercomisionesComponent

  },


  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/solictudes-tabla', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesRoutingModule {}
