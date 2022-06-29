import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comision } from "../../interfaces/comisiones";
import { ComisionesService } from '../../services/comisiones.service';

@Component({
  selector: 'app-ver-comision',
  templateUrl: './ver-comision.component.html',
  styleUrls: ['./ver-comision.component.css']

  
})
export class VerComisionComponent implements OnInit {

  comision: Comision | undefined;
  comision$: Observable<Comision> | undefined;

  constructor(
    private comisionService: ComisionesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params)=> {
      const id = params['id'];
      if(id) {
        this.comisionService.getComision(id).subscribe((resComision)=>{
          this.comision=resComision;
          console.log(this.comision);
        });
      }
    });
  }

}
