import React from 'react'

import { Formik, Field, Form } from 'formik'

import tournamentsApi from '../../api/tournaments'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
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
          totalTeams: 4,
          description: '',
          raffleTimestamp: 0,
        }}
        onSubmit={async (values, actions) => {
          alert( await tournamentsApi.createTournament(values));
      }}
      >
        {(formikProps) => (
          <Form>
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
          <div className={classes.lineBreak} />
          <Button variant="contained" className={classes.button} type="submit">
            Crear
          </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewTournament
