import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComisionesService } from './models/comisiones/services/comisiones.service';
import { ComisionesModule } from './models/comisiones/comisiones.module';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    ComisionesModule,
    ReactiveFormsModule,


  ],

  exports:[

  ],
  providers: [ ComisionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
