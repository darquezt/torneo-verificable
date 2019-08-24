import React from 'react'

import { Formik, Field } from 'formik'

import { makeStyles } from '@material-ui/core/styles'
import { TextField as FormikTextField } from 'formik-material-ui'

const useStyles = makeStyles(() => ({
  container: {
  },
}))

const SignOnTeam = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{
          initial_state: 'Aqui deberia hacer un get',
          id_pulso: 0,
          counter: 1
        }}
      >
        {(formikProps) => (
          <>
          <Field
            name='nombre_equipo'
            label='Nombre del Equipo'
            component={FormikTextField}
            className={classes.field}
          />
          <div className={classes.lineBreak} />
          <button type="submit">Enviar Inscripcion</button>
          </>
        )}
      </Formik>
    </div>
  )
}

export default SignOnTeam
