import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { GestionConvocatoriaService } from './gestion-convocatoria.service';
import { CreateGestionConvocatoriaDto } from './dto/create-gestion-convocatoria.dto';
import { UpdateGestionConvocatoriaDto } from './dto/update-gestion-convocatoria.dto';
import { Public } from '../auth/decorators/public.decorator';
import { ObjectId } from 'mongoose';
import { ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';

const fs = require('fs');

@ApiTags('gestion-convocatorias')
@Controller('gestion')
export class GestionConvocatoriaController {
 
  constructor(private readonly gestionConvocatoriaService: GestionConvocatoriaService) {}

  @Public()
  @UseInterceptors(FileInterceptor('reciboOficial'))
  @Post()
  async uploadFileAndPassValidation(
    @Body() createGestion:CreateGestionConvocatoriaDto,
    @UploadedFile()reciboOficial: Express.Multer.File,
    
  )  {
    try {
       if(reciboOficial){
        const reciboBuffer = reciboOficial.buffer
        const reciboFileName = reciboOficial.originalname
        const reciboPath = `./uploads/${reciboFileName}`;
       fs.writeFileSync(reciboPath,reciboBuffer)
       createGestion.reciboOficial = `http://localhost:3000/${reciboFileName}`;
       }else{
       console.log('Recuerde insertar un archivo luego')
       }
       const result = await this.gestionConvocatoriaService.create(createGestion)
       return result
    }catch(error){
      console.log(error)
    }
  }
@Public()
  @Get()
  findAll() {
    return this.gestionConvocatoriaService.findAll();
  }
@Public()
  @Get(':id')
  findOne(@Param('id') id:ObjectId ) {
    return this.gestionConvocatoriaService.findOne(id);
  }
  @Public()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGestionConvocatoriaDto: UpdateGestionConvocatoriaDto) {
    return this.gestionConvocatoriaService.update(id, updateGestionConvocatoriaDto);
  }
  
@Public()
  @Delete()
  remove(@Body('id') id:ObjectId) {
    return this.gestionConvocatoriaService.remove(id);
  }
  @Public()
  @Get("project/:proyectoNombre")
  async findConvocatoriasByProyecto(@Param("proyectoNombre") proyectoNombre: string) {
    try {
      const convocatoriasAsociadas = await this.gestionConvocatoriaService.findConvocatoriasByProyecto(
        proyectoNombre
      );
      return {
        message: "Este proyecto esta ascociado a estas convocatorias",
        status: 200,
        convocatorias: convocatoriasAsociadas,
      };
    } catch (error) {
      return {
        message: "Actualmente este proyecto no esta inscrito a ninguna convocatoria",
        status: 404,
        error: error.message,
      };
    }
  }


}