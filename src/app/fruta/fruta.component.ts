/**
 * Created by arnau on 15/4/17.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent{
 public nombre_componente = 'Componente de fruta';
 public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

 public nombre:string = 'Arnau García';
 public edad:number = 20;
 public mayordDeEdad:boolean = true;
 public trabajos:Array<any> = ['Programador', 44, 'Project Manager'];
}
