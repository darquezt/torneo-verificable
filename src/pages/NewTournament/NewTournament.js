import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
  },
}))

const NewTournament = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <p>New NewTournament</p>
    </div>
  )
}

export default NewTournament
