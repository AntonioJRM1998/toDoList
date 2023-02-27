import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
var contador=0;
var ids=4;

@Component({
  selector: 'app-tareas-creadas',
  templateUrl: './tareas-creadas.component.html',
  styleUrls: ['./tareas-creadas.component.scss']
})
export class TareasCreadasComponent implements OnInit {
  constructor(private router:Router, private activateRouter:ActivatedRoute) { }
  

  ngOnInit(): void {
   (document.getElementById('tareaName') as HTMLLabelElement).innerHTML=this.activateRouter.snapshot.paramMap.get("nombreTarea")!,
   (document.getElementById('prioridad') as HTMLLabelElement).innerHTML=this.activateRouter.snapshot.paramMap.get("prioridad")!,
   (document.getElementById('desc') as HTMLLabelElement).innerHTML=this.activateRouter.snapshot.paramMap.get("descripcion")!
  }
  
  moverDerecha(){
    contador++
    alert(contador)
    var tarea=document.getElementById(ids.toString());
    ids++;
    var nuevaTarea=tarea?.cloneNode(true);
    nuevaTarea!.firstChild!.parentElement!.id=ids.toString()
    var columnas=document.getElementById('contenedorColumnasID')as HTMLElement;
    alert(columnas.children[contador])
    columnas.children[contador].appendChild(nuevaTarea!)
    // nuevaTarea!.querySelector('.derecha')!.addEventListener('click',this.moverDerecha)
    nuevaTarea?.firstChild?.parentElement!.querySelector('.derecha')?.addEventListener('click',this.moverDerecha);
    tarea?.parentNode?.removeChild(tarea);
    nuevaTarea!.firstChild!.parentElement!.id=ids.toString()
  }

  moverIzquierda(){
    var tarea=document.getElementById(ids.toString());
    var nuevaTarea=tarea!.cloneNode(true)
    const columnas=document.getElementById('contenedorColumnasID')as HTMLElement;
    columnas.childNodes[contador].appendChild(nuevaTarea!);
    tarea?.parentNode?.removeChild(tarea);
    ids++;
    nuevaTarea!.firstChild!.parentElement!.id=ids.toString()
  }
}
