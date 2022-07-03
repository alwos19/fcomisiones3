import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComisionesService } from './core/services/comisiones.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';
<<<<<<< HEAD
=======
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { HeaderComponent } from './shared/components/header/header.component';

>>>>>>> bc6833cfaa84b99205e5913eec3b3aec3ad1c2a3




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
<<<<<<< HEAD
=======
    SideBarComponent,
    HeaderComponent,
    
>>>>>>> bc6833cfaa84b99205e5913eec3b3aec3ad1c2a3
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,


  ],

  exports:[

  ],
  providers: [ ComisionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
