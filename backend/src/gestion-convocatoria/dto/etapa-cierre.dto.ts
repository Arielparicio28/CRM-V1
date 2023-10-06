import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsNumber, IsString } from "class-validator";

enum Cierre {
    CERRADO = "cerrado"
}

export class EtapaCierreDto{
@ApiProperty({example:"2/11/2023"})
@IsDate()
fechaAprobacionOficial:Date;

@ApiProperty({example:"aprobada"})
@IsString()
@IsEnum(Cierre)
estadoResolucion:string;

@ApiProperty({example:"23/11/2023"})
@IsDate()
fechaRecepcionPagoFinal:Date;

@ApiProperty({example:"18000"})
@IsNumber()
montoTotalRecibido:number;

@ApiProperty({example:"20%"})
@IsNumber()
ultimoPagoPorcentaje:number;

@ApiProperty({example:"PDF"})
@IsString()
documentoCierre?:string;


}