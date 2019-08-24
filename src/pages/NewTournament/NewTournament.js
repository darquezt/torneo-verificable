import React from 'react'
import moment from 'moment'
import * as Yup from 'yup'
import { Formik, Field } from 'formik'

import { makeStyles } from '@material-ui/core/styles'
import { TextField as FormikTextField } from 'formik-material-ui'
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'

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
  },
}))

const NewTournament = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{
          name: '',
          totalTeams: 0,
          description: '',
          raffleDate: moment(),
          raffleTime: moment(),
        }}
        validationSchema={tournamentSchema}
      >
        {() => (
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
          </>
        )}
      </Formik>
    </div>
  )
}

export default NewTournament
