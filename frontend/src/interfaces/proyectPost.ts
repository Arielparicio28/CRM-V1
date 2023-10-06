// ProyectForm

import { z } from 'zod'

const proyectPost = z.object({
  _id: z.string().optional(),
  proyectoNombre: z.string().min(2, {
    message: 'Debe completar este campo'
  }),

  centroGestor: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  responsable: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  proyectoDuracion: z.string().min(1, {
    message: 'Debe completar este campo'
  }),
  proyectoPresupuesto: z.coerce.number(),
  factoriaPresupuesto: z.coerce.number(),

  fechaInicio: z.date(),
  fechaCierre: z.date()

})

export default proyectPost
