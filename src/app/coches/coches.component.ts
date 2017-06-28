/**
 * Created by arnau on 22/6/17.
 */
import {Component} from '@angular/core';
import {Coche} from './coche';
import {PeticionesService} from '../services/peticiones.service';
@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})
export class CochesComponent {
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.coche = new Coche('', 0, '');
    this.coches = [new Coche('Seat Panda', 120, 'Blanco'), new Coche('Renault Clio', 110, 'Azul')];
  }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;
        if (!this.articulos) {
          console.error('Error en el servidor');
        }
      },
      error => {
        console.error('Error en la peticion' + error);
      }
    );
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche('', 0, '');
  }
}
