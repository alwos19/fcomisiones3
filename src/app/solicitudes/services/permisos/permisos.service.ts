import { Injectable } from '@angular/core';
import { PERMISOS } from '../../json/permisos.json'
import { Permiso } from "../../interfaces/permisos/permisos";

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor() { }

  getPermisos(): Permiso[] { return PERMISOS }
}
