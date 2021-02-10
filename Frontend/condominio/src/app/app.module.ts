import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Forms
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitaCreateComponent } from './ventas/citas/cita-create/cita-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CitaCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
