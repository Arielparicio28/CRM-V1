import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GestionConvocatoria from '@/interfaces/gestionInterface'
import { getOneGestion } from '@/services/gestion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import NegotationStage from '@/components/management/formManagement/NegotiationStage'
import ConcessionStage from '@/components/management/formManagement/ConcessionStage'
import JustificationStage from '@/components/management/formManagement/JustificationStage'
import ClosingStage from '@/components/management/formManagement/ClosingStage'
import { CardContent } from '@/components/ui/card'
import { formatDate } from '@/lib/utils'

export default function Management () {
  const { id } = useParams()
  const [gestion, setGestion] = useState<GestionConvocatoria | undefined>()
  useEffect(() => {
    if (id) {
      getOneGestion(id).then((response) => {
        setGestion(response.data.gestion)
        console.log(response)
      })
    }
  }, [id])

  return (
    <>
      <CardContent className='p-0 flex flex-wrap '>
        <Accordion className='m-2 w-full mt-8' type='single' collapsible>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='px-3 bg-gradient-to-r  from-neutral-50  from-2% bg-white via-70% to-blue-700 to-90%'>ETAPA DE SOLICITUD</AccordionTrigger>
            <AccordionContent>
              <h2 className='font-black'>Convocatoria:</h2>
              <p>{gestion?.convocatoria}</p>
              <h2 className='font-black'>Financiador:</h2>
              <p>{gestion?.financiador}</p>
              <h2 className='font-black'>Proyecto:</h2>
              <p>{gestion?.proyecto}</p>
              <h2 className='font-black'>Codigo-Interno</h2>
              <p>{gestion?.codigoInterno}</p>
              <h2 className='font-black'>Responsable:</h2>
              <p>{gestion?.responsable}</p>
              <h2 className='font-black'>Fecha-Entrega-Propuesta</h2>
              <p>{gestion?.fechaPropuesta
                ? formatDate(gestion?.fechaPropuesta)
                : 'N/A'}
              </p>
              <h2 className='font-black'> Numero-Tramite</h2>
              <p>{gestion?.numeroTramite}</p>
              <h2 className='font-black'>Numero-Expediente</h2>
              <p>{gestion?.numeroExpediente}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className='m-2 w-full' type='single' collapsible>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='px-3  bg-gradient-to-r  from-neutral-50  from-2% bg-white via-70% to-red-500 to-90%'>ETAPA DE NEGOCIACION</AccordionTrigger>
            <AccordionContent>
              <NegotationStage id={id || ''} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className='m-2 w-full' type='single' collapsible>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='px-3 bg-gradient-to-r  from-neutral-50  from-2% bg-white via-70% to-purple-600 to-90%'>ETAPA DE OTORGAMIENTO</AccordionTrigger>
            <AccordionContent>
              <ConcessionStage id={id || ''} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className='m-2 w-full' type='single' collapsible>
          <AccordionItem value='item-2'>
            <AccordionTrigger className=' px-3 bg-otorgamiento bg-gradient-to-r  from-neutral-50  from-2% bg-white via-70% to-cyan-400 to-90%'>ETAPA DE JUSTIFICACIÓN</AccordionTrigger>
            <AccordionContent>
              <JustificationStage id={id || ''} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className='m-2 w-full' type='single' collapsible>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='px-3 bg-gradient-to-r from-neutral-50    from-2% bg-white via-70% to-green-500 to-90%'>ETAPA DE CIERRE</AccordionTrigger>
            <AccordionContent>
              <ClosingStage id={id || ''} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </>
  )
}
