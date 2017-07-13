/**
 * Created by arnau on 28/6/17.
 */
import {Component} from '@angular/core';
@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html'
})
export class PlantillasComponent {
  public titulo: string;
  public administrador: boolean;
  public dato_externo = 'Arnau García';
  public identity = {
    id: 1,
    web: 'arnaugarcia.com',
    tematica: 'Desarrollo'
  }

  constructor() {
    this.titulo = 'Plantillas ngTemplate en Angular';
    this.administrador =  true;
  }

  cambiar(value: boolean) {
    this.administrador = value;
  }
}
