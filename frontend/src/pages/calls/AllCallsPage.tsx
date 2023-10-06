import { useEffect, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { DataTableCalls } from '../../components/call/date-table-calls'
import { formatDate } from '../../lib/utils'
import GoBack from '../../components/GoBack'
import { Link } from 'react-router-dom'
import { getAllConvocatoria } from '@/services/registroConvocatoria'
import gestionRegistroPost from '@/interfaces/gestionRegistroPost'
import { ConvocatoriaRegistro } from '@/interfaces/convocatoriaRegistro'
import gestionConvocatoria from '../../interfaces/gestionConvocatoria'
import { Button } from '@/components/ui/button'

type gestionTable = z.infer<typeof gestionRegistroPost>

type estadoTable = z.infer<typeof gestionConvocatoria>

type estadoColumns = Pick<estadoTable, 'estado'>

type gestionColumns = Pick<gestionTable, 'fechaApertura'|'fechaCierre'|'entidadConvocante'|'titulo'|'_id'>

const columns: ColumnDef<gestionColumns, estadoColumns>[] = [
  {
    accessorKey: 'titulo',
    header: () => <div className=' font-bold '>Titulo de la Convocatoria</div>,
    cell: ({ row }) => {
      const idRow = row.original
      return (
        <Link className='hover:text-orange-600 hover:underline ' to={`/announcement/${idRow._id as string}`}>
          {row.getValue('titulo')}
        </Link>
      )
    }
  },
  {
    accessorKey: 'entidadConvocante',
    header: () => <div className=' font-bold '>Financiador</div>
  },
  {
    accessorKey: 'fechaApertura',
    header: () => <div className=' font-bold '>Fecha Inicio</div>,
    cell: ({ row }) => formatDate(row.getValue('fechaApertura'))
  },
  {
    accessorKey: 'fechaCierre',
    header: () => <div className=' font-bold '>Fecha Cierre</div>,
    cell: ({ row }) => formatDate(row.getValue('fechaCierre'))
  }
]

interface ApiResponse {
  convocatoria: ConvocatoriaRegistro[];
  message: string;
  status: number;
}

function AllCallsPage () {
  const [data, setData] = useState<ApiResponse | null>(null)
  console.log(data)

  useEffect(() => {
    getAllConvocatoria()
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error obteniendo los datos:', error)
      })
  }, [])
  if (!data) return null
  console.log(data)

  return (
    <>
      <div>
        <Link to='http://localhost:5173/'>
          <GoBack />
        </Link>
      </div>

      <div className='container mx-auto'>
        <h1 className='text-4xl font-semibold'>Convocatorias</h1>
        <div>
          <Link to='http://localhost:5173/management'>
            <Button type='submit' className='w-32 hover:bg-FF4700-dark text-white font-bold py-3 rounded'>nueva gestión</Button> 
          </Link>
        </div>
        <DataTableCalls columns={columns} data={data.convocatoria} />
      </div>
      <p>{}</p>
    </>
  )
}

export default AllCallsPage
