
import { CreacionTareasComponent } from './formulario/formularioTarea/creacion-tareas/creacion-tareas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasCreadasComponent } from './lista-tareas/tareas-creadas/tareas-creadas.component';

const routes: Routes = [{
  path: 'formulario', loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule),
},{
  path: 'crearTarea', component: CreacionTareasComponent
},{
  path: 'tareas', loadChildren: () => import('./lista-tareas/lista-tareas.module').then(m => m.ListaTareasModule),
},{
  path: 'listaTareas/:nombreTarea/:prioridad/:descripcion', component: TareasCreadasComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
