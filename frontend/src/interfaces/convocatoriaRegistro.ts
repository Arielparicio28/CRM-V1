export interface ConvocatoriaRegistro {
_id?:string
entidadConvocante: string;
departamentoConvocante: string;
titulo: string;
publicacionOficial?: string;
convocatoriaEnlace?: string;
tematica: string;
trabajoLineas: string;
dirigidoEntidades: string;
fechaApertura: Date;
fechaCierre:Date;
fechaResolucion: Date;
periodoEjecucion: number;
fechaJustificacion: Date;
auditoria?: boolean;
presupuesto: number;
otraInformacion: string;
memoriaTecnica?: string| void;
modeloPresupuesto?: string| void;
formularioSolicitud?: string| void;
otraDocumentacion?:string | void;
}
