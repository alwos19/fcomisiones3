import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesTableComponent } from './components/solicitudes-table/solicitudes-table.component';
import { SolicitudesRoutingModule } from './solicitudes.routes';
import { VerPermisosComponent } from './page/permisos/ver-permisos/ver-permisos.component';
import { EditarPermisosComponent } from './page/permisos/editar-permisos/editar-permisos.component';
import { CrearPermisosComponent } from './page/permisos/crear-permisos/crear-permisos.component';




@NgModule({
  declarations: [
    SolicitudesTableComponent,
    VerPermisosComponent,
    EditarPermisosComponent,
    CrearPermisosComponent,
  ],
  imports: [

    SolicitudesRoutingModule,
    CommonModule,



  ],
  exports:[
    SolicitudesTableComponent,
  ]
})
export class SolicitudesModule { }
