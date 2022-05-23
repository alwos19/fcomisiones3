import { Injectable } from '@angular/core';
import { Comisiones} from '../../interfaces/comisiones/comision'

@Injectable({
  providedIn: 'root'
})
export class ComisionesService {

  constructor() { }

  getComisiones(): Comisiones[] { return Comision;}
}

