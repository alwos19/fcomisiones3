import { Component, OnInit } from '@angular/core';
import { Comision } from 'src/app/core/models/comisiones';
import { ComisionEstados } from 'src/app/core/models/comisionesxestados';
import { ComisionesService } from 'src/app/core/services/comisiones.service';
import { ComisionxestadoService } from 'src/app/core/services/comisionxestado.service';

@Component({
  selector: 'app-tabla-solicitudes',
  templateUrl: './tabla-solicitudes.component.html',
  styleUrls: ['./tabla-solicitudes.component.css']
})
export class TablaSolicitudesComponent implements OnInit {

  comisiones!: Comision[];
  // permisos!: Permiso[];
  comisionxestado!: ComisionEstados[];

  constructor(

    private comisionesService: ComisionesService,
    private comisionxEstdoService: ComisionxestadoService,
  ) { }

  ngOnInit(): void {

    this.comisionesService.getComisiones().subscribe(
      comisiones => this.comisiones = comisiones
    );

    // this.permisos = this.permisosService.getPermisos();

    this.comisionxEstdoService.getComisionxEstado().subscribe(
      comisionesxEstado => this.comisionxestado = comisionesxEstado
    )
    console.log(this.comisiones);
  }

}
