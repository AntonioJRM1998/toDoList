import { Router , ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-tareas',
  templateUrl: './creacion-tareas.component.html',
  styleUrls: ['./creacion-tareas.component.scss']
})
export class CreacionTareasComponent implements OnInit {

  constructor(private router:Router, activateRouter:ActivatedRoute) { }
  ngOnInit(): void {
  
  }
  mandarFormulario(){
    this.router.navigate(['/listaTareas',(document.getElementById("tareaname") as HTMLInputElement)!.value,(document.getElementById('selector')as HTMLSelectElement).value,(document.getElementById("desc") as HTMLInputElement)!.value]);
  }
}
