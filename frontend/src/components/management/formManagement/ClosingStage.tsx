import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import DatePicker from '@/components/ui/DatePicker'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { CardContent } from '@/components/ui/card'
import { StatusClose } from '@/components/management/formManagement/StatusClose'
import { AxiosResponse } from 'axios'
import { updateGestion } from '@/services/gestion'

const closingSchema = z.object({
  fechaAprobacionOficial: z.date(),
  estadoResolucion: z.string().optional(),
  fechaRecepcionPagoFinal: z.date(),
  montoTotalRecibido: z.string().optional(),
  ultimoPagoPorcentaje: z.string().optional(),
  documentoCierre: z.string().optional()
})

type ClosingValues = z.infer<typeof closingSchema>;

function ClosingStage ({ id }: { id: string }) {
  const form = useForm<ClosingValues>({
    resolver: zodResolver(closingSchema)
  })
  const handleStatusChange = (selectedStatus:string) => {
    form.setValue('estadoResolucion', selectedStatus)
  }
  async function onSubmit (data: ClosingValues) {
    try {
      const dataCierre = {
        etapaCierre: {
          fechaAprobacionOficial: data.fechaAprobacionOficial,
          estadoResolucion: data.estadoResolucion,
          fechaRecepcionPagoFinal: data.fechaRecepcionPagoFinal,
          montoTotalRecibido: data.montoTotalRecibido,
          ultimoPagoPorcentaje: data.ultimoPagoPorcentaje,
          documentoCierre: data.documentoCierre
        }
      }
      const response: AxiosResponse = await updateGestion(id, dataCierre)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    toast({
      title: '¡Genial!',
      description: 'Acaba de actualizar su formulario.'
    })
  }
  return (
    <div className='flex flex-wrap'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name='fechaAprobacionOficial'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha de aprobación oficial de informe de justificación</FormLabel>
                    <FormControl>
                      <DatePicker
                        title=''
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='estadoResolucion'
              render={() => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Estado de resolución</FormLabel>
                    <FormControl>
                      <StatusClose onChange={handleStatusChange} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Separator className='my-5' />
            <FormField
              control={form.control}
              name='fechaRecepcionPagoFinal'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha de recepción pago final</FormLabel>
                    <FormControl>
                      <DatePicker
                        title=''
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='montoTotalRecibido'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Monto total concedido</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='€'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='ultimoPagoPorcentaje'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Porcentaje de último pago</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='%'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Separator className='my-5' />
            <FormField
              control={form.control}
              name='documentoCierre'
              shouldUnregister
              render={({ field }) => (
                <FormItem className='w-1/2 px-4 mb-4'>
                  <FormLabel className='mb-2'>Documento de cierre</FormLabel>
                  <FormControl>
                    <Input type='file' {...field} data-testid='file-memory' />
                  </FormControl>
                </FormItem>
              )}
            />
            <Separator className='my-5' />
            <Button
              className='w-20 rounded ml-2 '
              variant='outline'
            >
              Actualizar
            </Button>
          </CardContent>
        </form>
      </Form>
    </div>
  )
}

export default ClosingStage
