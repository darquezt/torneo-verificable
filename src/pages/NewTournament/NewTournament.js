import React, { useState } from 'react'

import moment from 'moment'
import * as Yup from 'yup'
import tournamentsApi from '../../api/tournaments'
import { Formik, Field, Form } from 'formik'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { TextField as FormikTextField } from 'formik-material-ui'
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { Typography } from '@material-ui/core';

const tournamentSchema = Yup.object().shape({
  name: Yup.string()
    .required(),
  totalTeams: Yup.number()
    .required(),
  description: Yup.string(),
  raffleDate: Yup.date(),
})

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

const NewTournament = () => {
  const classes = useStyles()

  const [ status, setStatus ] = useState('waiting')
  const [ tournamentId, setTournamentId ] = useState(null)

  const onSubmit = async (params) => {
    try {
      const {
        raffleDate,
        raffleTime,
      } = params

      const raffleTimestamp = moment(raffleDate)
        .hours(raffleTime.hours())
        .minutes(raffleTime.minutes())
        .format('x')
      const response = await tournamentsApi.createTournament({
        ...params,
        raffleTimestamp,
      })
      setStatus('ready')
      setTournamentId(response.data)
    } catch (errors) {
      setStatus('waiting')
    }
  }

  return (
    <div className={classes.container}>
      {status === 'waiting' && (
        <>
        <Typography align='center' variant='h5' className={classes.title}>
          Crear torneo
        </Typography>
        <Formik
          initialValues={{
            name: '',
            totalTeams: 4,
            description: '',
            raffleDate: moment(),
            raffleTime: moment(),
          }}
          validationSchema={tournamentSchema}
          onSubmit={onSubmit}
        >
          {(formikProps) => (
            <Form className={classes.form}>
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
            <Field
              name='raffleDate'
              render={({ field, form }) => (
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label='Fecha del sorteo'
                  format="dd/MM/yyyy"
                  {...field}
                  onChange={(date) => form.setFieldValue(field.name, date)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              )}
            />
            <div className={classes.lineBreak} />
            <Field
            name='raffleTime'
            render={({ field, form }) => (
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Hora del sorteo"
                {...field}
                onChange={(date) => form.setFieldValue(field.name, date)}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            )}
            />
            <div className={classes.lineBreak} />
            <Button variant="contained" className={classes.button} type="submit">
              Crear
            </Button>
            </Form>
          )}
        </Formik>
        </>
      )}
      {status === 'ready' && (
        <>
        <Typography variant='h5'>
          ¡Felicitaciones!
        </Typography>
        <Typography variant='h6'>
          Hemos creado tu torneo
        </Typography>
        <Typography>
          Los equipos pueden inscribirse en el siguiente enlace:
        </Typography>
        <Link
          to={`/inscripcion/${tournamentId}`}
        >
          http://localhost:3000/inscripcion/{tournamentId}
        </Link>
        </>
      )}
    </div>
  )
}

export default NewTournament
