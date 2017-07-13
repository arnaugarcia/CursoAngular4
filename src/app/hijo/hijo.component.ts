/**
 * Created by arnau on 13/7/17.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'componente-hijo',
  template: `<p>Este es el {{titulo}}</p>
  <ul>
    <li>{{propiedad_uno}}</li>
    <li>{{propiedad_dos.web}}</li>
  </ul>
    <button (click)="enviar($event)">Enviar datos al padre</button>
  `
})

export class HijoComponent {
  public titulo: string;

  @Input('texto1') propiedad_uno: string;
  @Input('texto2') propiedad_dos: string;

  @Output() desde_el_hijo = new EventEmitter();
  constructor () {
    this.titulo = 'Componente Hijo';
  }

  ngOnInit() {
    console.log(this.propiedad_uno);
    console.log(this.propiedad_dos);
    this.enviar();
  }

  enviar() {
    this.desde_el_hijo.emit({
      nombre: 'Arnau García',
      web: 'arnaugarcia.com',
      twitter: '@arnaugarcia97'
    });
  }
}
