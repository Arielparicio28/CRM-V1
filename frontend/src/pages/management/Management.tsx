import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GestionConvocatoria from '@/interfaces/gestionInterface'
import { getOneGestion } from '@/services/gestion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import NegotationStage from '@/components/management/formManagement/NegotiationStage'

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
      <Accordion className='m-2 w-full' type='single' collapsible>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='px-3'>ETAPA DE SOLICITUD</AccordionTrigger>
          <AccordionContent>
            <p>{gestion?.convocatoria}</p>
            <p>{gestion?.financiador}</p>
            <p>{gestion?.numeroExpediente}</p>
            <p>{gestion?.numeroTramite}</p>
            <p>{gestion?.responsable}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className='m-2 w-full' type='single' collapsible>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='px-3'>ETAPA DE NEGOCIACION</AccordionTrigger>
          <AccordionContent>
            <NegotationStage id={id} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
