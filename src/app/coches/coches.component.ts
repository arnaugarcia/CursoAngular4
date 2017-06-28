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

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.coche = new Coche('', 0, '');
    this.coches = [new Coche('Seat Panda', 120, 'Blanco'), new Coche('Renault Clio', 110, 'Azul')];
  }

  ngOnInit() {
    console.log(this._peticionesService.getPrueba());
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche('', 0, '');
  }
}
