import React from 'react'

import { Formik, Field } from 'formik'

import { makeStyles } from '@material-ui/core/styles'
import { TextField as FormikTextField } from 'formik-material-ui'

const useStyles = makeStyles(() => ({
  container: {
  },
}))

const NewTournament = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{
          name: '',
          totalTeams: 0,
          description: '',
          raffleTimestamp: 0,
        }}
      >
        {(formikProps) => (
          <>
          <Field
            name='name'
            label='Nombre del torneo'
            component={FormikTextField}
            className={classes.field}
          />
          <div className={classes.lineBreak} />
          <Field
            name='totalTeams'
            label='Cantidad de equipos (multiplo de 4)'
            component={FormikTextField}
            className={classes.field}
          />
          <div className={classes.lineBreak} />
          <Field
            name='description'
            label='Descripción'
            component={FormikTextField}
            className={classes.field}
          />
          </>
        )}
      </Formik>
    </div>
  )
}

export default NewTournament
