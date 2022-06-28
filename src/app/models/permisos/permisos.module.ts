import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerPermisoComponent } from './ver-permiso/ver-permiso.component';
import { CrearPermisoComponent } from './crear-permiso/crear-permiso.component';



@NgModule({
  declarations: [
    VerPermisoComponent,
    CrearPermisoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PermisosModule { }
