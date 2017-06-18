/**
 * Created by arnau on 15/6/17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class RopaService {

  public nombre_prenda = 'Pantalones vaqueros';

  public colecion_ropa = ['Pantalones Blancos', 'Camiseta Roja'];

  prueba(nombre_prenda) {
    return nombre_prenda;
  }

  addRopa(nombre_prenda: string): Array<String> {
    this.colecion_ropa.push(nombre_prenda);
    return this.getRopa();
  }

  getRopa(): Array<string> {
    return this.colecion_ropa;
  }

  eliminarPrenda(index: number): Array<string> {
    this.colecion_ropa.splice(index, 1);
    return this.getRopa();
  }

}
