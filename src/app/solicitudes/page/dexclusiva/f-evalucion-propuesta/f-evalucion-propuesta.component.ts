import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-f-evalucion-propuesta',
  templateUrl: './f-evalucion-propuesta.component.html',
  styleUrls: ['./f-evalucion-propuesta.component.css']
})
export class FEvalucionPropuestaComponent implements OnInit {

  constructor(
    // private : UserSvc Falta entregar información del usuario
    private fb : FormBuilder,

  ) { }
  
  public unidades = [
    'Instituto de Química, Facultad de Ciencias Exactas y Naturales',
  ]

  public campos = [
    'Docencia',
    'Extensión',
    'Investigación',
    'Administración'
  ]

  private isEmailValid = /^[a-zA-Z0-9._%+-]+@udea.edu.co$/;

  fBasicInfo = this.fb.group({
    unidadAcademica : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    nombres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    apellidos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    dId: [Number, [Validators.required, Validators.min(1000), Validators.max(999999999999)]],
    nExtOffice: [''],
    tCel: [Number, [Validators.min(1000000000), Validators.max(9999999999)]],
    email: ['',[Validators.required, Validators.pattern(this.isEmailValid)]],
    titulo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    tiempoSol: [Number, [Validators.required, Validators.min(1), Validators.max(12)]],
    campo: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  onSubmit(){

  }

  isInvalidForm(controlName: string): boolean {
    return this.fBasicInfo.controls[controlName].invalid && this.fBasicInfo.controls[controlName].touched;}
  

}
