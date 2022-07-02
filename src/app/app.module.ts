import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComisionesService } from './core/services/comisiones.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { HeaderComponent } from './shared/components/header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideBarComponent,
    HeaderComponent,
    
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
