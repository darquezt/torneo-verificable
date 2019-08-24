import React from 'react'

import { Formik, Field } from 'formik'

import { makeStyles } from '@material-ui/core/styles'
import { TextField as FormikTextField } from 'formik-material-ui'

const useStyles = makeStyles(() => ({
  container: {
  },
}))

const VerifyRandomness = (props) => {
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
		    readOnly:true
		    }}
          />
          </>
        )}
      </Formik>
    </div>
  )
}

export default VerifyRandomness
