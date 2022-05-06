import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comision } from '../../interfaces/comisiones/comision';
import { ComisionService} from '../../services/comisiones/comision.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes-table',
  templateUrl: './solicitudes-table.component.html',
  styleUrls: ['./solicitudes-table.component.css']
})
export class SolicitudesTableComponent implements OnInit {

  // comisiones$: Observable<Comision[]>;
  // total$: Observable<number>

  constructor(

    public comisionService: ComisionService,
    // public searchSolicitudesService: SearchSolicitudesService,
    public router: Router
  ) {


  }

  ngOnInit(): void {
    // this.comisiones = this.comisionService;
  }

}
