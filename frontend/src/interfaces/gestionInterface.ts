interface EtapaResolucion {
    fechaResolucion: Date;
    fechaLimiteEntrega: Date;
    fechaRealEntrega: Date;
    fechaLimiteResponder: Date;
    fechaRealRespuesta: Date;
    notas: string;
    adjuntarResolucion?: string | null;
  }

  interface EtapaOtorgamiento {
    fechaResolucionFinal: Date;
    estadoSolicitud?:string;
    montoConcedido: string;
    fechaPrimerDesembolso: Date;
    fechaRecepcionDesembolso: Date;
    montoPrimerDesembolso: string;
    porcientoPrimerDesembolso: string;
    fechaInicioGastos: Date;
    fechaFinalizacionGastos: Date;
    fechaPrimerSeguimiento: Date;
    fechaLimiteInformeFinalTecnico: Date;
    fechaLimiteInformeFinalEconomico: Date;
    seguimientoInformes: string;
    adjuntarResolucionOtorgamiento: string;
  }

  interface EtapaJustificacion {
    fechaEntrega: Date;
    fechaLimitePrimerRequerimiento: Date;
    fechaRespuestaRequerimientoPrimero: Date;
    fechaLimiteSegundoRequerimiento: Date;
    fechaRespuestaRequerimientoSegundo: Date;
    notas: string;
  }

  interface EtapaCierre {
    fechaAprobacionOficial: Date;
    estadoResolucion?: string;
    fechaRecepcionPagoFinal: Date;
    montoTotalRecibido: number;
    ultimoPagoPorcentaje:number;
    documentoCierre?: string;
  }

  interface GestionConvocatoria {
  _id?:string ;
  convocatoria: string;
  financiador: string;
  proyecto: string;
  codigoInterno?:string;
  responsable: string;
  fechaPropuesta: Date;
  numeroTramite: string;
  numeroExpediente: string;
  reciboOficial?: string;
  etapaResolucion: EtapaResolucion[];
  etapaOtorgamiento: EtapaOtorgamiento[];
  etapaJustificacion: EtapaJustificacion[];
  etapaCierre: EtapaCierre[]
  }

export default GestionConvocatoria
