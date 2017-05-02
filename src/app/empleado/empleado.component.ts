/**
 * Created by arnau on 15/4/17.
 */
import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado-tag',
  templateUrl: './empleado.component.html'
})
export class EmpleadosComponent {
  public titulo = 'Componente empleados:';
  public empleado: Empleado;
  public trbajadores: Array<Empleado>;


  constructor() {
    this.empleado = new Empleado('David Lopez', 45, 'Cocinero', true);
    this.trbajadores = [
      new Empleado('Manolo Martinez', 35, 'Administrativo', true),
      new Empleado('Ana Lopez', 25, 'Cocinera', true),
      new Empleado('Víctor Robles', 66, 'Programador', false),
    ];
  }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trbajadores);
  }
}
