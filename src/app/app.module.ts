import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComisionesService } from './models/comisiones/services/comisiones.service';
import { ComisionesModule } from './models/comisiones/comisiones.module';
import { ComponentsModule } from './components/components.module';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
=======
import { ReactiveFormsModule } from '@angular/forms';


>>>>>>> Simon


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    ComisionesModule,
<<<<<<< HEAD
    NgbModule
=======
    ReactiveFormsModule,

>>>>>>> Simon

  ],

  exports:[

  ],
  providers: [ ComisionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
