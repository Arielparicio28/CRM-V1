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
import { Textarea } from '@/components/ui/textarea'
import { AxiosResponse } from 'axios'
import { updateGestion } from '@/services/gestion'

const negotationSchema = z.object({
  _id: z.string().optional(),
  fechaResolucion: z.date(),
  fechaLimiteEntrega: z.date(),
  fechaRealEntrega: z.date(),
  fechaLimiteResponder: z.date(),
  fechaRealRespuesta: z.date(),
  notas: z.string(),
  adjuntarResolucion: z.string().optional()
})

type NegotationValues = z.infer<typeof negotationSchema>;

function NegotationStage ({ id }: { id: string }) {
  const form = useForm<NegotationValues>({
    resolver: zodResolver(negotationSchema)
  })

  async function onSubmit (data: NegotationValues) {
    try {
      const negotationData = {
        etapaResolucion: {
          fechaResolucion: data.fechaResolucion,
          fechaLimiteEntrega: data.fechaLimiteEntrega,
          fechaRealEntrega: data.fechaRealEntrega,
          fechaLimiteResponder: data.fechaLimiteResponder,
          fechaRealRespuesta: data.fechaRealRespuesta,
          notas: data.notas,
          adjuntarResolucion: data.adjuntarResolucion
        }
      }
      const response: AxiosResponse = await updateGestion(id, negotationData)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    toast({
      title: '¡Genial!',
      description: 'Acaba de actualizar su formulario en Etapa de Negociación'
    })
  }
  return (

    <div className='flex flex-wrap'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name='fechaResolucion'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha de resolución provisional</FormLabel>
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
              name='fechaLimiteEntrega'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha límite de entrega de reformulación</FormLabel>
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
              name='fechaRealEntrega'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha real de entrega de reformlación</FormLabel>
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
              name='fechaLimiteResponder'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha límite para responder requerimientos</FormLabel>
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
            /> <FormField
              control={form.control}
              name='fechaRealRespuesta'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha real para responder requerimientos</FormLabel>
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
              name='notas'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Notas</FormLabel>
                    <FormControl>
                      <Textarea placeholder='Escriba aquí...' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Separator className='my-5' />
            <FormField
              control={form.control}
              name='adjuntarResolucion'
              shouldUnregister
              render={({ field }) => (
                <FormItem className='w-1/2 px-4 mb-4'>
                  <FormLabel className='mb-2'>Resolución provisional</FormLabel>
                  <FormControl>
                    <Input type='file' {...field} data-testid='file-memory' />
                  </FormControl>
                </FormItem>
              )}
            />
            <Separator className='my-5' />
            <div className=' w-full md:w-full mt-5 flex justify-center'>
              <div>
                <Button
                  className='w-20 rounded ml-2 '
                  variant='outline'
                  type='submit'
                >
                  Actualizar
                </Button>
              </div>
            </div>
          </CardContent>
        </form>
      </Form>
    </div>
  )
}

export default NegotationStage
