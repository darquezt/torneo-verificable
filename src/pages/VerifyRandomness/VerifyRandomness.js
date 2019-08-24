import React, { useState} from 'react'

import { Formik, Field, Form } from 'formik'
import tournamentsApi from '../../api/tournaments'
import { makeStyles } from '@material-ui/core/styles'
import { TextField as FormikTextField } from 'formik-material-ui'
import { Typography, Button, List, ListItem, ListItemText, Divider } from '@material-ui/core';

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
  const [ responseData, setResponseData ] = useState(null)
  const onSubmit = async (values, actions) => {
        setResponseData(await tournamentsApi.verifyTournament({idPulso: values.id_pulso, datosIni: values.initial_state}))
  }

  return (
    <div className={classes.container}>
    {responseData === null && (
      <>
      <Typography align='center' variant='h5' className={classes.title}>
        Verificar torneo
      </Typography>
      <Formik
        initialValues={{
          initial_state: '[1,2,3,4]',
          id_pulso: 522786,
          counter: 1
        }}
        onSubmit={onSubmit}
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
          <Button variant='contained' className={classes.submit} type="submit">
            Verificar
          </Button>
          </Form>
        )}
      </Formik>
      </>
    )}
    {responseData != null && (
      <div>
        {responseData.data.map(group => (
            <>
            <List dense>
              {group.map(team => (
                <ListItem button key={team[0]}>
                  <ListItemText primary={`${team[0]} ${team[1]}`} />
                </ListItem>
              ))}
            </List>
            <Divider fullWidth />
            </>
          ))}
      </div>
    )}
    </div>
  )
}

export default VerifyRandomness
