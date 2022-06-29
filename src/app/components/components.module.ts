import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './components.routes';
import { FormsModule } from '@angular/forms';
import { SolicitudesTableComponent } from './solicitudes-table/solicitudes-table.component';



@NgModule({
  declarations: [
    SolicitudesTableComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
    
  ]
})
export class ComponentsModule { }
