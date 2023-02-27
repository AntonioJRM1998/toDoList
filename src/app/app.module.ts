
import { ListaTareasModule } from './lista-tareas/lista-tareas.module';
import { TareasCreadasComponent } from './lista-tareas/tareas-creadas/tareas-creadas.component';
import { FormularioModule } from './formulario/formulario.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasCreadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormularioModule,
    ListaTareasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
