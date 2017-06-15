/**
 * Created by arnau on 15/6/17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class RopaService {

  public nombre_prenda = 'Pantalones vaqueros';

  prueba(nombre_prenda) {
    return nombre_prenda;
  }

}
