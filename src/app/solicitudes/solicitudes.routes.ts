import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudesTableComponent } from './components/solicitudes-table/solicitudes-table.component';
import { CrearComisionComponent } from './page/comisiones/crear-comision/crear-comision.component';
import { VercomisionesComponent } from './page/comisiones/vercomisiones/vercomisiones.component';
import { VerPermisoComponent } from './page/permisos/ver-permiso/ver-permiso.component';

const routes: Routes = [
  {
    path: 'solicitudes',
    component: SolicitudesTableComponent
  },
  {
    path: 'crear-comision',
    component: CrearComisionComponent

  },

  {
    path: 'ver-comision/id',
    component: VercomisionesComponent

  },
  {
    path: 'ver-permiso/id',
    component: VerPermisoComponent
  },


  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/solictudes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesRoutingModule {}
