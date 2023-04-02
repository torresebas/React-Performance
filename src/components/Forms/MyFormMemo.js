import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from '../Input'

import { memo } from 'react'

const MyFormMemo = ({ onSubmit }) => {
  console.log('renderizando my form')
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values)
    resetForm()

  }

  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required('Obligatorio'),
        lastname: Yup.string().required('Obligatorio'),
      })}
    >
      <Form>
        <Input name="name" label="Nombre" />
        <Input name="lastname" label="Apellido" />
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  )
}

// Aca le pasamos memo pero no es sificiente, 
// por que le estamos pasando la propiedad { onSubmit } que
// esta constantemente.
// Entonces el formulario se sigue renderizando

//* Ver App.js 

export default memo(MyFormMemo) 
