import { IntermediateEstados } from './comisionesxestados';

export interface Comision {
  id:                      number;
  fecha_inicio:            Date;
  fecha_fin:               Date;
  fecha_resolucion:        Date;
  resolucion:              string;
  justificacion:           string;
  idioma:                  string;
  lugar:                   string;
  updatedAt:               Date;
  createdAt:               Date;
  tipos_comision_id:       number;
  usuarios_id:             number;
  tipos_comision:          TiposComision;
  documentos:              any[];
  cumplidos:               any[];
  usuarios:                Usuarios;
  intermediate_estados: IntermediateEstados;

  };



export interface IntermediateComisiones {
  createdAt:            Date;
  observacion:          string;

  };




export interface TiposComision {
  nombre: string;
}

export interface Usuarios {
  id:             number;
  nombre:         string;
  apellido:       string;
  identificacion: number;
  email:          string;
  estado:         number;
  departamentos:  Departamentos;
}

export interface Departamentos {
  nombre:     string;
  facultades: TiposComision;
}

