import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { ComisionEstados } from "../../interfaces/comisiones/comisionesxestados";

@Injectable({
  providedIn: 'root'
})
export class ComisionxestadoService {

  private urlEndPoint:string = 'http://localhost:3000/api/comisiones-estados';

  constructor( private http : HttpClient) { }

  getComisionxEstado(): Observable <ComisionEstados[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as ComisionEstados[])
    ) }
}