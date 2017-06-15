/**
 * Created by arnau on 14/6/17.
 */
import { Component } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'contacto',
  templateUrl: 'contacto.component.html'
})
export class ContactoComponent {
  public titulo = 'Página de contacto';
  public parametro;

  constructor (
    private _route: ActivatedRoute,
    private _router: Router,
  ){}

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      console.log(params);
      this.parametro = params['page'];
    });
  }

  redirigir () {
    this._router.navigate([ '/contacto' , 'arnaugarcia.com' ]);
  }

  redirigirDos () {
      this._router.navigate([ 'home' ]);
  }
}
