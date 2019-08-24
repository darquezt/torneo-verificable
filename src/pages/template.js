import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
  },
}))

const SomeComponent = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
    </div>
  )
}

export default SomeComponent
