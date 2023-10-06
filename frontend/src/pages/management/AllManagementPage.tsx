import { z } from 'zod'
import gestionConvocatoria from '@/interfaces/gestionConvocatoria'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import GoBack from '@/components/GoBack'
import { DataTableManagement } from '@/components/management/date-table-management'
import { getAllGestion } from '@/services/gestion'
import GestionConvocatoria from '@/interfaces/gestionInterface'
import { ColumnDef } from '@tanstack/react-table'

type gestion = z.infer <typeof gestionConvocatoria >

type estadoTable = z.infer<typeof gestionConvocatoria>

type estadoColumns = Pick<estadoTable, 'estado'>

type gestionColumns = Pick<gestion, 'convocatoria'|'proyecto'|'financiador'|'responsable'|'_id'>

const columns: ColumnDef<gestionColumns, estadoColumns>[] = [
  {
    accessorKey: 'convocatoria',
    header: () => <div className=' font-bold '>Convocatoria</div>,
    cell: ({ row }) => {
      const idRow = row.original
      return (
        <Link className='hover:text-orange-600 hover:underline ' to={`/gestion/${idRow._id as string}`}>
          {row.getValue('convocatoria')}
        </Link>
      )
    }
  },
  {
    accessorKey: 'proyecto',
    header: () => <div className=' font-bold '>Proyecto</div>
  },
  {
    accessorKey: 'financiador',
    header: () => <div className=' font-bold '>Financiador</div>
  },
  {
    accessorKey: 'estado',
    header: () => <div className='font-bold'>Estado</div>
  }
]

interface ApiResponse {
  gestiones: GestionConvocatoria[];
  message: string;
  status: number;
}
export default function AllManagementPage () {
  const [data, setData] = useState<ApiResponse | null>(null)
  console.log(data)

  useEffect(() => {
    getAllGestion()
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
        <Link to='http://localhost:5173/gestion/:id'>
          <GoBack />
        </Link>
      </div>

      <div className='container mx-auto'>
        <h1 className='text-4xl font-semibold'>Gestión de convocatorias</h1>

        <DataTableManagement columns={columns} data={data.gestiones} />
      </div>
      <p>{}</p>
    </>
  )
}
