import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProjectStatus } from '@/components/management/formManagement/ProjectStatus'
import { toast } from '@/components/ui/use-toast'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { CardContent } from '@/components/ui/card'
import DatePicker from '@/components/ui/DatePicker'
import { Input } from '@/components/ui/input'
import { Separator } from '@radix-ui/react-separator'
import { Button } from '@/components/ui/button'
import { updateGestion } from '@/services/gestion'
import { AxiosResponse } from 'axios'

const concessionSchema = z.object({
  _id: z.string().optional(),
  fechaResolucionFinal: z.date().optional(),
  estadoSolicitud: z.string().optional(),
  montoConcedido: z.string(),
  fechaPrimerDesembolso: z.date().optional(),
  fechaRecepcionDesembolso: z.date(),
  montoPrimerDesembolso: z.string().optional(),
  porcientoPrimerDesembolso: z.string().optional(),
  fechaInicioGastos: z.date().optional(),
  fechaFinalizacionGastos: z.date().optional(),
  fechaPrimerSeguimiento: z.date().optional(),
  fechaLimiteInformeFinalTecnico: z.date().optional(),
  fechaLimiteInformeFinalEconomico: z.date().optional(),
  seguimientoInformes: z.string().optional(),
  adjuntarResolucionOtorgamiento: z.string().optional()
})

type ConscessionValues = z.infer<typeof concessionSchema>;

function ConcessionStage ({ id }: { id: string }) {
  const form = useForm<ConscessionValues>({
    resolver: zodResolver(concessionSchema)
  })
  const handleStatusChange = (selectedStatus:string) => {
    form.setValue('estadoSolicitud', selectedStatus) // Establecer el valor en el formulario
  }
  async function onSubmit (data: ConscessionValues) {
    try {
      const otorgamientoData = {
        etapaOtorgamiento: {
          fechaResolucionFinal: data.fechaResolucionFinal,
          estadoSolicitud: data.estadoSolicitud,
          montoConcedido: data.montoConcedido,
          fechaPrimerDesembolso: data.fechaPrimerDesembolso,
          fechaRecepcionDesembolso: data.fechaRecepcionDesembolso,
          montoPrimerDesembolso: data.montoPrimerDesembolso,
          porcientoPrimerDesembolso: data.porcientoPrimerDesembolso,
          fechaInicioGastos: data.fechaInicioGastos,
          fechaFinalizacionGastos: data.fechaFinalizacionGastos,
          fechaPrimerSeguimiento: data.fechaPrimerSeguimiento,
          fechaLimiteInformeFinalTecnico: data.fechaLimiteInformeFinalTecnico,
          fechaLimiteInformeFinalEconomico: data.fechaLimiteInformeFinalEconomico,
          seguimientoInformes: data.seguimientoInformes,
          adjuntarResolucionOtorgamiento: data.adjuntarResolucionOtorgamiento
        }
      }
      const response: AxiosResponse = await updateGestion(id, otorgamientoData)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    toast({
      title: '¡Genial!',
      description: 'Acaba de actualizar su formulario en Etapa de Otorgamiento'
    })
  }
  return (
    <div className='flex flex-wrap'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name='estadoSolicitud'
              render={() => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Estado</FormLabel>
                    <FormControl>
                      <ProjectStatus
                        onChange={handleStatusChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='fechaResolucionFinal'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha de resolución final</FormLabel>
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
              name='montoConcedido'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Monto final concedido</FormLabel>
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
            <Separator className='my-5' />
            <FormField
              control={form.control}
              name='fechaPrimerDesembolso'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha prevista de primer desembolso</FormLabel>
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
              name='fechaRecepcionDesembolso'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha recepción primer desembolso</FormLabel>
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
              name='montoPrimerDesembolso'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Monto del primer desembolso</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='$'
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
              name='porcientoPrimerDesembolso'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Porciento primer desembolso</FormLabel>
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
            <FormField
              control={form.control}
              name='fechaInicioGastos'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha inicio de gastos</FormLabel>
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
              name='fechaFinalizacionGastos'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha de finalización de gastos</FormLabel>
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
              name='fechaPrimerSeguimiento'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha primer seguimiento</FormLabel>
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
              name='fechaLimiteInformeFinalTecnico'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha límite para entrega de informe final técnico</FormLabel>
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
              name='fechaLimiteInformeFinalEconomico'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha límite para entrega de informe final económico</FormLabel>
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
              name='seguimientoInformes'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Seguimiento de Informes</FormLabel>
                    <FormControl>
                      <Input placeholder='informe seguimiento' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Separator className='my-5' />
            <FormField
              control={form.control}
              name='adjuntarResolucionOtorgamiento'
              shouldUnregister
              render={({ field }) => (
                <FormItem className='w-1/2 px-4 mb-4'>
                  <FormLabel className='mb-2'>Adjuntar Resolución de Otrogamiento</FormLabel>
                  <FormControl>
                    <Input type='file' {...field} data-testid='file-memory' />
                  </FormControl>
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

export default ConcessionStage
