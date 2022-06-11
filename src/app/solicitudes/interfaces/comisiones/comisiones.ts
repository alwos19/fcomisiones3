

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
  nombreEstadoActual: string;

intermediate_comisiones: [
  {
    createdAt: Date;
    fecha_actualizacion: Date;
    intermediate_estados: {
      nombre: string;
    };
  }
]


};


export interface intermediate_comisiones {
  createdAt: Date;
  fecha_actualizacion: Date;
  intermediate_estados: {
    nombre: string;}

  }

// interface IntermediateComisiones {
//   nombre: string
// }


// intermediate_estados:    IntermediateEstados;


export interface TiposComision {
  nombre: string;
}





