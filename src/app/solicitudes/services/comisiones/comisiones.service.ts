import { Comision } from '../../interfaces/comisiones/comisiones';

import { Injectable } from '@angular/core';
import { Observable, of, map } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ComisionesService {
  private urlEndPoint:string = 'http://localhost:3000/api/comisiones';


  constructor( private http: HttpClient) { }

  getComisiones(): Observable <Comision[]> {

    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Comision[])
    ) }


}




