import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comision } from '../../interfaces/comisiones/comisiones';
import { ComisionEstados } from '../../interfaces/comisiones/comisionesxestados';
import { Permiso } from '../../interfaces/permisos/permisos';
import { ComisionesService} from '../../services/comisiones/comisiones.service';
import { ComisionxestadoService} from '../../services/comisiones/comisionxestado.service';
import { PermisosService } from "../../services/permisos/permisos.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes-table',
  templateUrl: './solicitudes-table.component.html',
  styleUrls: ['./solicitudes-table.component.css']
})
export class SolicitudesTableComponent implements OnInit {

  comisiones!: Comision[];
  permisos!: Permiso[];
  comisionxestado!: ComisionEstados[];


  // comisiones$: Observable<Comision[]>;
  // total$: Observable<number>

  constructor(

    private comisionesService: ComisionesService,
    private comisionxEstdoService: ComisionxestadoService,
    private permisosService: PermisosService,
    // // public searchSolicitudesService: SearchSolicitudesService,
    // public router: Router
  ){}




  ngOnInit(): void {

    this.comisionesService.getComisiones().subscribe(
      comisiones => this.comisiones = comisiones
    );

    this.permisos = this.permisosService.getPermisos();

    this.comisionxEstdoService.getComisionxEstado().subscribe(
      comisionesxEstado => this.comisionxestado = comisionesxEstado
    )
  }

}
