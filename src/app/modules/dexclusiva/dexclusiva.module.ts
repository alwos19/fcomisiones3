import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FEvalucionPropuestaComponent } from './pages/f-evalucion-propuesta/f-evalucion-propuesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DexclusivaRoutingModule } from './dexclusiva.routes';
import { CartaInicioComponent } from './pages/carta-inicio/carta-inicio.component';
import { QuillModule } from 'ngx-quill';



@NgModule({
  declarations: [
    FEvalucionPropuestaComponent,
    CartaInicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DexclusivaRoutingModule,
    QuillModule.forRoot()
  ]
})
export class DexclusivaModule { }
