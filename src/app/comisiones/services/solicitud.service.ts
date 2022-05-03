import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comision } from '../model/comision';

@Injectable({
  providedIn: 'root',
})
export class ComisionService {
  private urlEndPoint = 'http://localhost:3000/api/comisiones';

  // headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // CRUD

  getComisiones(): Observable<any> {
    return this.http.get<Comision[]>(this.urlEndPoint).pipe(
      map((res) => {
        const comision = res as Comision[];
        return comision.map((newComision) => {
          console.log(newComision.documentos.length);

          const lenEstados = newComision.intermediate_comisiones.length;

          const final_estado =
            newComision.intermediate_comisiones[lenEstados - 1][
              'intermediate_estados'
            ]['nombre'];
          newComision.nombreEstadoActual = final_estado;
          return newComision;
        });
      })
    );
  }

  getComision(id: string): Observable<any> {
    return this.http.get<Comision>(`${this.urlEndPoint}/${id}`).pipe(
      map((res) => {
        const lenEstados = res.intermediate_comisiones.length;
        const final_estado = res.intermediate_comisiones[lenEstados - 1];
        res.estadoActual = final_estado;
        return res;
      })
    ); // Cast: json a tipo comision
  }

  createComision(comision: Comision): Observable<any> {
    return this.http.post<Comision>(this.urlEndPoint, comision);
  }

  // Update
  updateComision(id: string, data: Comision): Observable<any> {
    return this.http.patch<Comision>(`${this.urlEndPoint}/${id}`, data);
  }

  delete(id:any): Observable<any> {
    return this.http.delete<Comision>(`${this.urlEndPoint}/${id}`);
  }
}
