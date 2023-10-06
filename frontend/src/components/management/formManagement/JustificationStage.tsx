import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { Textarea } from '@/components/ui/textarea'
import { AxiosResponse } from 'axios'
import { updateGestion } from '@/services/gestion'

const justificationSchema = z.object({
  fechaEntrega: z.date(),
  fechaLimitePrimerRequerimiento: z.date(),
  fechaRespuestaRequerimientoPrimero: z.date(),
  fechaLimiteSegundoRequerimiento: z.date(),
  fechaRespuestaRequerimientoSegundo: z.date(),
  notas: z.string().optional()
})
type JustificationValues = z.infer<typeof justificationSchema>;

function JustificationStage ({ id }: { id: string }) {
  const form = useForm<JustificationValues>({
    resolver: zodResolver(justificationSchema)
  })

  async function onSubmit (data: JustificationValues) {
    try {
      const justificationData = {
        etapaJustificacion: {
          fechaEntrega: data.fechaEntrega,
          fechaLimitePrimerRequerimiento: data.fechaLimitePrimerRequerimiento,
          fechaRespuestaRequerimientoPrimero: data.fechaRespuestaRequerimientoPrimero,
          fechaLimiteSegundoRequerimiento: data.fechaLimiteSegundoRequerimiento,
          fechaRespuestaRequerimientoSegundo: data.fechaRespuestaRequerimientoSegundo,
          notas: data.notas
        }
      }
      const response: AxiosResponse = await updateGestion(id, justificationData)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    toast({
      title: '¡Genial!',
      description: 'Acaba de actualizar su formulario en Etapa de justificación'
    })
  }
  return (
    <div className='flex flex-wrap'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name='fechaEntrega'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha de entrega de informe justificativo</FormLabel>
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
            <Separator className='my-5' />
            <FormField
              control={form.control}
              name='fechaLimitePrimerRequerimiento'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha límite para responder primer requerimiento </FormLabel>
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
              name='fechaRespuestaRequerimientoPrimero'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha en que se respondió primer requerimiento </FormLabel>
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
            <Separator className='my-5' />
            <FormField
              control={form.control}
              name='fechaLimiteSegundoRequerimiento'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha límite para responder segundo requerimiento </FormLabel>
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
              name='fechaRespuestaRequerimientoSegundo'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha en que se respondió segundo requerimiento</FormLabel>
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
            <Separator className='my-5' />
            <FormField
              control={form.control}
              name='notas'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Nota de seguimiento</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Escriba aquí...'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Separator className='my-5' />

            <div className=' w-full md:w-full mt-5 flex justify-center'>
              <Button
                className='w-20 rounded ml-2 '
                variant='outline'
              >
                Actualizar
              </Button>
            </div>
          </CardContent>
        </form>
      </Form>
    </div>
  )
}

export default JustificationStage
