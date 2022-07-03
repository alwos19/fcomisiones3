export interface Dexclusiva {
    extension_oficina?: string;
    celular?: string;
    titulo: string;
    tiempo_solicitado: Number;
    campo_modalidad : string;
    descripcion_comprobante?: string;
    tema_estrategico: string[];
    objetivo_estrategico_desarrollo: string[];
    metas: string[];
    acciones_estrategicas: string[];
    objetivo_estrategico_institucional: string[];
    indicador:  string[];
    productos: string[];
}

export interface DexclusivaResponse {
    data: Dexclusiva;
    message: string;
    status: string;
}

export interface DexclusivaReceive extends Dexclusiva{
    id: string;
    fecha_diligenciamiento: string;
    unidad_academica: string;
    nombre: string;
    apellido: string;
    identificacion: string;
}