import React, { useState, useEffect } from 'react'

import { Formik, Field, Form } from 'formik'
import tournamentsApi from '../../api/tournaments'
import { makeStyles } from '@material-ui/core/styles'
import { TextField as FormikTextField } from 'formik-material-ui'
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    padding: '20px 50px',
    background: 'rgb(255, 255, 255, 0.7)',
    borderRadius: 5,
    width: 400,
  },
  title: {
    marginBottom: 20,
  },
  submit: {
    margin: 20,
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  lineBreak: {
    width: '100%',
  },
}))

const SignOnTeam = (props) => {
  const classes = useStyles()
  const [ tournament, setTournament ] = useState(null)
  useEffect(async () => {
    const response = await tournamentsApi.getTournament({ tournamentId: props.match.params.idtorneo })
    setTournament(response.data)
  }, [])
  return (
    <div className={classes.container}>
      <Typography align='center' variant='h3' className={classes.title}>
        {tournament === null
        ? <div>...</div> : tournament.nombre}
      </Typography>
      <Typography align='center' variant='h5' className={classes.title}>
        Inscribe tu equipo
      </Typography>
      <Formik
        initialValues={{
          name: '',
        }}
      >
        {(formikProps) => (
          <Form className={classes.form}>
          <Field
            name='name'
            label='Nombre del Equipo'
            component={FormikTextField}
            className={classes.field}
          />
          <div className={classes.lineBreak} />
          <Button className={classes.submit} variant='contained' type="submit">
            Inscribir equipo
          </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignOnTeam
