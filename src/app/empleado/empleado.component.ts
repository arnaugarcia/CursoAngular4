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
  public trabajador_externo: boolean;
  public color: string;
  public color_selecionado: string;


  constructor() {
    this.empleado = new Empleado('David Lopez', 45, 'Cocinero', true);
    this.trbajadores = [
      new Empleado('Manolo Martinez', 35, 'Administrativo', false),
      new Empleado('Ana Lopez', 25, 'Cocinera', true),
      new Empleado('Víctor Robles', 66, 'Programador', false),
    ];
    this.trabajador_externo = true;
    this.color = 'red';
    this.color_selecionado = '#ccc';
  }

  cambiarExterno (valor) {
    this.trabajador_externo = valor;
  }

  logColorSeleccionado() {
    console.log(this.color_selecionado);
  }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trbajadores);
  }
}
