import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

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

  public Usuario = {
    "id": 13,
    "tipo_identificacion": "CC",
    "identificacion": 1017198111,
    "nombre": "mariana",
    "apellido": "castrillon",
    "email": "mariana.castrillonr@udea.edu.co",
    "estado": 1,
    "contrasena": "$2b$10$LjqmmR2oeX3IfIbfxr9ne.PSepkeCwhs2PDk7jbGyKPner86UL1Ba",
    "dia_disponible": 3,
    "createdAt": "2022-06-28T19:36:36.000Z",
    "updatedAt": "2022-06-28T19:36:36.000Z",
    "departamentos_id": 1,
    "roles_id": 5,
    "roles": {
    "nombre": "USUARIO"
    },
    "departamentos": {
    "nombre": "VICEDECANATURAFCEN",
    "facultades": {
    "nombre": "FCEN"
    }
    },
    "comisiones": [
    {
    "id": 2,
    "fecha_inicio": "2022-02-20T00:00:00.000Z",
    "fecha_fin": "2022-02-21T00:00:00.000Z",
    "fecha_resolucion": "2022-02-20T00:00:00.000Z",
    "resolucion": "1111",
    "justificacion": "blabla",
    "idioma": "blabla",
    "lugar": "blabla",
    "tipos_comision_id": 1,
    "usuarios_id": 13
    }
    ]
    }

  private isEmailValid = /^[a-zA-Z0-9._%+-]+@udea.edu.co$/;

  fBasicInfo = this.fb.group({
    unidadAcademica : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    identificacion: [Number, [Validators.required, Validators.min(1000), Validators.max(999999999999)]],
    nExtOffice: ['', [Validators.minLength(3), Validators.maxLength(255)]],
    tCel: [Number, [Validators.min(1000000000), Validators.max(9999999999)]],
    email: ['',[Validators.required, Validators.pattern(this.isEmailValid)]],
    titulo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    tiempoSol: [Number, [Validators.required, Validators.min(1), Validators.max(11)]],
    campo: ['', [Validators.required , Validators.minLength(3), Validators.maxLength(50000)]],
    descComprobante: ['',[Validators.minLength(3), Validators.maxLength(255)]],
    temaExt: this.fb.array([this.temasgroup()],[Validators.required]),
    objEspDesarrollo: this.fb.array([this.objEstrategicasgroup()],[Validators.required]),
    metas: this.fb.array([this.metasgroup()],[Validators.required]),
    accEstrategicas: this.fb.array([this.accEstrategicasgroup()],[Validators.required]),
    objEstrInstitucional: this.fb.array([this.objEstrInstitucionalgroup()],[Validators.required]),
    indicadores: this.fb.array([this.indicadoresgroup()],[Validators.required]),
    productos: this.fb.array([this.productosgroup()],[Validators.required]),
  })

  ngOnInit(): void {
    // Se debe hacer realmente un sevice
    this.fBasicInfo.patchValue(this.Usuario);
    this.fBasicInfo.controls['nombre'].disable();
    this.fBasicInfo.controls['apellido'].disable();
    this.fBasicInfo.controls['identificacion'].disable();
    this.fBasicInfo.controls['email'].disable();
  }

  onSubmit(){
    console.log(this.fBasicInfo.value);
  }

  // Temas

  temasgroup() {
    return this.fb.group({
      tema: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    });
  }

  get temasArr() : FormArray {
    return this.fBasicInfo.get('temaExt') as FormArray;
  }
  addInputTemas() {
    this.temasArr.push(this.temasgroup());
  }


  // Objetivos Estrategicos
  objEstrategicasgroup() {
    return this.fb.group({
      objEstrategico: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    });
  }

  get objEstrategicosArr() : FormArray {
    return this.fBasicInfo.get('objEspDesarrollo') as FormArray;
  }

  addInputObjEstrategicos() {
    this.objEstrategicosArr.push(this.objEstrategicasgroup());
  }




// Metas

  metasgroup() {
    return this.fb.group({
      meta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    });
  }


  get metasArr() : FormArray {
    return this.fBasicInfo.get('metas') as FormArray;
  }
  addInputMetas() {
    this.metasArr.push(this.metasgroup());
  }

// Acciones Estrategicas
  accEstrategicasgroup() {
    return this.fb.group({
      accion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    });
  }


  get accEstrategicasArr() : FormArray {
    return this.fBasicInfo.get('accEstrategicas') as FormArray;
  }
  addInputaccEstrategicas() {
    this.accEstrategicasArr.push(this.accEstrategicasgroup());
  }


  // Objetivo Estrategico Institucional
  objEstrInstitucionalgroup() {
    return this.fb.group({
      objetivo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    });
  }

  get objEstrInstitucionalArr() : FormArray {
    return this.fBasicInfo.get('objEstrInstitucional') as FormArray;
  }

  addInputObjEstrInstitucional() {
    this.objEstrInstitucionalArr.push(this.objEstrInstitucionalgroup());
  }

  // Indicadores
  indicadoresgroup() {
    return this.fb.group({
      indicador: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    });
  }

  get indicadoresArr() : FormArray {
    return this.fBasicInfo.get('indicadores') as FormArray;
  }

  addInputIndicadores() {
    this.indicadoresArr.push(this.indicadoresgroup());
  }


// Productos

  productosgroup() {
    return this.fb.group({
      producto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    });
  }

  get productosArr() : FormArray {
    return this.fBasicInfo.get('productos') as FormArray;
  }

  addInputProductos() {
    this.productosArr.push(this.productosgroup());
  }


// Eliminar del control
  removeInput(controlName: string, index: number) {
    const control = this.fBasicInfo.controls[controlName] as FormArray;
    control.removeAt(index);
  }



  
  isInvalidForm(controlName: string): boolean {
    return this.fBasicInfo.controls[controlName].invalid && this.fBasicInfo.controls[controlName].touched;
  }
  
}
