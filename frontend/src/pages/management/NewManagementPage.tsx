import ApplicationStage from '@/components/management/formManagement/ApplicationStage'
import { Searchconvocatoria } from '@/components/management/formManagement/SearchConvocatoria'
import { SearchProjects } from '@/components/management/formManagement/SearchProjects'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'
import { postGestion } from '@/services/gestion'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosResponse } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const applicationStage = z.object({
  proyecto: z.string().optional(),
  responsable: z.string(),
  convocatoria: z.string().optional(),
  financiador: z.string()
})

type AccountFormValues = z.infer<typeof applicationStage>;

export function NewManagement () {
  const [selectedProject, setSelectedProject] = useState<string>()
  const [selectedConvocatoria, setSelectedConvocatoria] = useState<string>()
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(applicationStage)
  })

  async function onSubmit (data: AccountFormValues) {
    try {
      if (!selectedProject) {
        console.error('No project selected.')
      }
      if (!selectedConvocatoria) {
        console.error('No convocatoria selected')
      }
      console.log('Selected Project:', selectedProject)
      data.proyecto = selectedProject || ''
      data.convocatoria = selectedConvocatoria || ''
      console.log('Data:', data)
      const response: AxiosResponse = await postGestion(data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  toast({
    title: '¡Genial!',
    description: 'Acaba de realizar una gestion de convocatoria.'
  })

  return (
    <div className='flex flex-wrap'>
      <ApplicationStage />
    </div>

  )
}
