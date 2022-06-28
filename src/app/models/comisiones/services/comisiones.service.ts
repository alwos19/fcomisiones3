import { Comision, intermediate_comisiones } from '../interfaces/comisiones';

import { Injectable } from '@angular/core';
import { Observable, of, map } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ComisionesService {
  private urlEndPoint:string = 'http://localhost:3000/api/comisiones';


  constructor( private http: HttpClient) { }

  getComisiones(): Observable <any> {
    return this.http.get<Comision[]>(this.urlEndPoint).pipe(
      map((res) => {
        const comision = res as Comision[];
        return comision.map((newComision) => {
          // console.log(newComision.documentos.length);

          const lenEstados = newComision.intermediate_comisiones.length;

          console.log(lenEstados);

          const final_estado = newComision.intermediate_comisiones[lenEstados - 1]
          ['intermediate_estados']['nombre'];

          newComision.nombreEstadoActual = final_estado;
          return newComision
        });
      })
    )
   }


}




