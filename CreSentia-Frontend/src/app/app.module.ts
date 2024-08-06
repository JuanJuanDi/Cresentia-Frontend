import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioAdultoComponent } from './formulario-adulto/formulario-adulto.component';


@NgModule({

  declarations:[
    FormularioAdultoComponent,
  ],

  imports: [
    FormularioAdultoComponent,
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
