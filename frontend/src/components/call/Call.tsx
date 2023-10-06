import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ConvocatoriaRegistro } from '@/interfaces/convocatoriaRegistro'
import { getOneConvocatoria } from '@/services/registroConvocatoria'
import { formatDate } from '@/lib/utils'

function Call () {
  const { id } = useParams()
  const [convocatoria, setConvocatoria] = useState<ConvocatoriaRegistro>()
  useEffect(() => {
    if (id) {
      getOneConvocatoria(id).then((response) => {
        setConvocatoria(response.data.convocatoria)
        console.log(response)
      })
    }
  }, [id])

  return (
    <>
      <div className='container mx-auto mt-5'>
        <h1 className=' text-primary text-4xl font-semibold mb-5'>
          {convocatoria?.titulo}
        </h1>
        <h1 className='font-black'>Titulo:</h1>
        <h2>{convocatoria?.titulo} </h2>
        <h1 className='font-black'>Entidad-Convocante:</h1>
        <h2>{convocatoria?.entidadConvocante}</h2>
        <h1 className='font-black'>Departamento:</h1>
        <h2>{convocatoria?.departamentoConvocante}</h2>
        <h1 className='font-black'>Publicacíon-Oficial</h1>
        <h2 className='hover:text-orange-600 hover:underline '>
          {convocatoria?.publicacionOficial}
        </h2>
        <h1 className='font-black'>Convocatoria-Enlace</h1>
        <h2 className='hover:text-orange-600 hover:underline '>
          {convocatoria?.convocatoriaEnlace}
        </h2>
        <h1 className='font-black'>Temática</h1>
        <h2>{convocatoria?.tematica}</h2>
        <h1 className='font-black'>Lineas de Trabajo:</h1>
        <h2>{convocatoria?.trabajoLineas}</h2>
        <h1 className='font-black'>
          Entidades a las que se dirige:
        </h1>
        <h2>{convocatoria?.dirigidoEntidades}</h2>
        <h1 className='font-black'>Fecha-Inicio</h1>
        <h2>
          {convocatoria?.fechaApertura
            ? formatDate(convocatoria?.fechaApertura)
            : 'N/A'}
        </h2>
        <h1 className='font-black'>Fecha-Cierre</h1>
        <h2>
          {convocatoria?.fechaCierre
            ? formatDate(convocatoria?.fechaCierre)
            : 'N/A'}
        </h2>
        <h1 className='font-black'>Fecha-Resolución</h1>
        <h2>
          {convocatoria?.fechaResolucion
            ? formatDate(convocatoria?.fechaResolucion)
            : 'N/A'}
        </h2>
        <h1 className='font-black'>Fecha-Justificación</h1>
        <h2>
          {convocatoria?.fechaJustificacion
            ? formatDate(convocatoria?.fechaJustificacion)
            : 'N/A'}
        </h2>
        <h1 className='font-black'>Período de Ejecucíon</h1>
        <h2>{convocatoria?.periodoEjecucion}</h2>
        <h1 className='font-black'>Auditoría</h1>

        {/* VER DE TRAER EL NEGATIVO O POSITIVO DE AUDITORIA */}
        <h2>{convocatoria?.auditoria}</h2>
        <h1 className='font-black'>Presupuesto</h1>
        <h2>{convocatoria?.presupuesto}</h2>

        {/* Llamar al endpoint de cargar archivos para traerlos */}
      </div>
    </>

  )
}

export default Call
