/**
 * Created by arnau on 13/7/17.
 */
import {Component, Input} from '@angular/core';
@Component({
  selector: 'componente-hijo',
  template: `<p>Este es el {{titulo}}</p>
  <ul>
    <li>{{propiedad_uno}}</li>
    <li>{{propiedad_dos.web}}</li>
  </ul>
  `
})

export class HijoComponent {
  public titulo: string;

  @Input('texto1') propiedad_uno: string;
  @Input('texto2') propiedad_dos: string;

  constructor () {
    this.titulo = 'Componente Hijo';
  }

  ngOnInit() {
    console.log(this.propiedad_uno);
    console.log(this.propiedad_dos);
  }
}
