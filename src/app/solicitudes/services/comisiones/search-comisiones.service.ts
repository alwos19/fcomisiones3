import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap, map } from 'rxjs/operators';
import { DatePipe } from '@angular/common'
// import {
//   SortColumn,
//   SortDirection,
// } from '../../shared/directives/sortable-header.directive';

import { HttpHeaders } from '@angular/common/http';
import { Comision } from '../../interfaces/comisiones/comision';
import { ComisionService } from '../../services/comisiones/comision.service';

interface SearchResult {
  comisiones: Comision[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  // sortColumn: SortColumn;
  // sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

// function sort(
//   comisiones: Comision[],
//   column: SortColumn,
//   direction: string
// ): Comision[] {
//   if (direction === '' || column === '') {
//     return comisiones;
//   } else {
//     return [...comisiones].sort((a, b) => {
//       const res = compare(a[column], b[column]);
//       return direction === 'asc' ? res : -res;
//     });
//   }
// }

function matches(comisiones: Comision, term: string, pipe: PipeTransform, datepipe: DatePipe) {
  return (

    comisiones.tipos_comision.nombre
      .toLowerCase()
      .includes(term.toLowerCase()) ||
    comisiones.usuarios.nombre.toLowerCase().includes(term) ||
    comisiones.usuarios.apellido.toLowerCase().includes(term) ||
    comisiones.usuarios.departamentos.nombre.toLowerCase().includes(term) ||
    comisiones.nombreEstadoActual.toLowerCase().includes(term) ||
    pipe.transform(comisiones.id).includes(term) ||
   datepipe.transform(comisiones.fecha_actualizacion, 'dd/MM/yyyy').includes(term)

  );
}

@Injectable({
  providedIn: 'root',
})
export class SearchComisionesService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _total$ = new BehaviorSubject<number>(0);
  private _comisiones$ = new BehaviorSubject<Comision[]>([]);
  // public comisionesList = [];

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
  };

  constructor(
    private pipe: DecimalPipe,
    private comisionService: ComisionService,
    private datepipe: DatePipe
  ) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        //debounceTime(200),
        switchMap(() => this._search()),
        //delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._comisiones$.next(result.comisiones);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  // SORTING AND FILTERING
  get comisiones$() {
    return this._comisiones$.asObservable();
  }

  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  // Set and search:

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    // ALL THE CODE GOES INSIDE THE server call
    return this.comisionService.getComisiones().pipe(
      map((data) => {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } =
          this._state;

        let comisionesList: Solicitud[] = [];

        if (data) {
          comisionesList = data;

          // 2. filter

          let comisiones = comisionesList.filter((comisiones) =>
            matches(comisiones, searchTerm, this.pipe, this.datepipe)
          );

          const total = comisiones.length;
          comisiones = comisiones.slice(
            (page - 1) * pageSize,
            (page - 1) * pageSize + pageSize
          );

          console.log('comisiones', comisiones);
          // map() operator will automatically convert the returned value into an observable for me
          return {
            comisiones,
            total,
          };
        } else {
          // In case data is null
          return null;
        }
      })
    );
  }
}
