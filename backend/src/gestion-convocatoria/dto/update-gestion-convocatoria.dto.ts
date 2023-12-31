import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateGestionConvocatoriaDto, Estados } from "./create-gestion-convocatoria.dto";
import { EtapaSolicitudDto } from "./etapa-solicitud.dto";
import { EtapaResolucionDto } from "./etapa-resolucion.dto";
import { EtapaOtorgamientoDto } from "./etapa-otorgamiento.dto";
import { EtapaJustificacionDto } from "./etapa-justificacion.dto";
import { EtapaCierreDto } from "./etapa-cierre.dto";
import { IsArray, IsDate, IsEnum, IsNumber, IsString} from "class-validator";

export class UpdateGestionConvocatoriaDto extends PartialType(
  CreateGestionConvocatoriaDto
) {
  
  @ApiProperty({example:'solicitud'})
@IsEnum(Estados)
estado:Estados
  
@ApiProperty({example:"Jesus Rivera"})
@IsString()
responsable:string

  @ApiProperty({ example: "Etapa Resolucion" })
  @IsArray()
  etapaResolucion: EtapaResolucionDto;

  @ApiProperty({ example: "Etapa Otorgamiento" })
  @IsArray()
  etapaOtorgamiento: EtapaOtorgamientoDto;

  @ApiProperty({ example: "Etapa Justificaciòn" })
  @IsArray()
  etapaJustificacion: EtapaJustificacionDto;

  @ApiProperty({ example: "Etapa Cierre" })
  @IsArray()
  etapaCierre: EtapaCierreDto;

}
