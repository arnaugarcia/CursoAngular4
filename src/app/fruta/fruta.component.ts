/**
 * Created by arnau on 15/4/17.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent {
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
  public nombre: string;
  public edad: number;
  public mayordDeEdad: boolean;
  public trabajos: Array<any> = ['Programador', 44, 'Project Manager'];
  comodin: any = 17;

  constructor() {
    this.nombre = 'Arnau García';
    this.edad = 20;
    this.mayordDeEdad = true;
    this.comodin = true;
 }
 ngOnInit() {
   this.cambiarNombre(this.nombre);
   this.cambiarEdad(17);
 }
  cambiarNombre(nombre) {
     this.nombre = 'Arnau2';
 }
 cambiarEdad(edad) {
      this.edad = edad;
 }
}
