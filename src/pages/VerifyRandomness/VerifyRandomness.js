import React from 'react'

import { Formik, Field, Form } from 'formik'

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

const VerifyRandomness = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography align='center' variant='h5' className={classes.title}>
        Verificar torneo
      </Typography>
      <Formik
        initialValues={{
          initial_state: 'Aqui deberia hacer un get',
          id_pulso: 0,
          counter: 1
        }}
      >
        {(formikProps) => (
          <Form className={classes.form}>
          <Field
            name='initial_state'
            label='Estado Inicial'
            component={FormikTextField}
            className={classes.field}
          />
          <div className={classes.lineBreak} />
          <Field
            name='id_pulso'
            label='Id del Pulso'
            component={FormikTextField}
            className={classes.field}
          />
          <div className={classes.lineBreak} />
          <Field
            name='counter'
            label='Contador'
            component={FormikTextField}
            className={classes.field}
            inputProps={{
              readOnly: true,
            }}
          />
          <div className={classes.lineBreak} />
          <Button variant='contained' className={classes.submit}>
            Verificar
          </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default VerifyRandomness
