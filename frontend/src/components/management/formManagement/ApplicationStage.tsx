import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import DatePicker from '@/components/ui/DatePicker'
import { Button } from '@/components/ui/button'
import { AxiosResponse } from 'axios'
import { postGestion } from '@/services/gestion'
import { SearchProjects } from '@/components/management/formManagement/SearchProjects'
import { toast } from '@/components/ui/use-toast'

const applicationStage = z.object({
  proyecto: z.string().optional(),
  responsable: z.string(),
  convocatoria: z.string(),
  financiador: z.string(),
  fechaPropuesta: z.date().optional(),
  numeroTramite: z.string().optional(),
  numeroExpediente: z.string().optional(),
  reciboOficial: z.instanceof(File).optional()
})

type AccountFormValues = z.infer<typeof applicationStage>;

function ApplicationStage () {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(applicationStage)
  })
  const [selectedProject, setSelectedProject] = useState<string>()

  async function onSubmit (data: AccountFormValues) {
    try {
      if (!selectedProject) {
        console.error('No project selected.')
      }
      console.log('Selected Project:', selectedProject)
      data.proyecto = selectedProject || ''
      console.log('Data:', data)
      const response: AxiosResponse = await postGestion(data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    toast({
      title: '¡Genial!',
      description: 'Acaba de realizar una gestion de convocatoria.'
    })
  }

  return (
    <div className='flex flex-wrap'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <CardContent className='flex flex-wrap'>

            <FormField
              control={form.control}
              name='proyecto'
              render={() => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Proyecto Factoria F5</FormLabel>
                    <FormControl>
                      <SearchProjects onSelectProject={setSelectedProject} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='convocatoria'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Convocatoria</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='convocatoria'
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
              name='financiador'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Financiador</FormLabel>
                    <FormControl>
                      <Input placeholder='financiador' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Separator className='my-5' />

            <FormField
              control={form.control}
              name='responsable'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Técnico responsable</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='Técnico'
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
              name='fechaPropuesta'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha Propuesta</FormLabel>
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
              name='numeroTramite'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Número de trámite</FormLabel>
                    <FormControl>
                      <Input placeholder='Número de trámite' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='numeroExpediente'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Código de subvención</FormLabel>
                    <FormControl>
                      <Input placeholder='Numero de expediente' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='reciboOficial'
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Recibo Oficial</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={value?.fileName}
                        onChange={(event) => {
                          onChange(event.target.files[0])
                        }}
                        type='file'
                        id='reciboOficial'
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className='flex justify-center space-x-6'>
            <Button
              className='w-32 hover:bg-FF4700-dark text-white font-bold py-3 rounded'
              type='submit'
            >
              Crear
            </Button>
          </CardFooter>
        </form>
      </Form>
    </div>
  )
}

export default ApplicationStage