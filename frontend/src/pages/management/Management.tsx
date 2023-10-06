import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GestionConvocatoria from '@/interfaces/gestionInterface'
import { getOneGestion } from '@/services/gestion'

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
    <><p>{gestion?.responsable}</p>
      <p>{gestion?.convocatoria}</p>
    </>
  )
}
