/**
 * Created by arnau on 26/6/17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PeticionesService {

  public url: string;

  constructor(
    private _http: Http
  ) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPrueba() {
    return 'Hola mundo desde el servicio';
  }

  getArticulos() {
    return this._http.get(this.url)
      .map(res => res.json());
  }

}
