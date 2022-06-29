import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comision } from '../../models/comisiones/interfaces/comisiones';
import { ComisionEstados } from '../../models/comisiones/interfaces/comisionesxestados';
import { ComisionesService} from '../../models/comisiones/services/comisiones.service';
import { ComisionxestadoService} from '../../models/comisiones/services/comisionxestado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes-table',
  templateUrl: './solicitudes-table.component.html',
  styleUrls: ['./solicitudes-table.component.css']
})
export class SolicitudesTableComponent implements OnInit {

  comisiones!: Comision[];
  // permisos!: Permiso[];
  comisionxestado!: ComisionEstados[];


  // comisiones$: Observable<Comision[]>;
  // total$: Observable<number>

  constructor(

    private comisionesService: ComisionesService,
    private comisionxEstdoService: ComisionxestadoService,
    // private permisosService: PermisosService,
    // // public searchSolicitudesService: SearchSolicitudesService,
    // public router: Router
  ){}




  ngOnInit(): void {

    this.comisionesService.getComisiones().subscribe(
      comisiones => this.comisiones = comisiones
    );

    // this.permisos = this.permisosService.getPermisos();

    this.comisionxEstdoService.getComisionxEstado().subscribe(
      comisionesxEstado => this.comisionxestado = comisionesxEstado
    )
  }

}
