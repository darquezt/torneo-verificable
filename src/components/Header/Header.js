import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    padding: '40px 0',
    width: '100vw',
    height: 50,
    background: 'linear-gradient(130deg, #000058, #a82aff)',
  },
  title: {
    color: 'white',
    margin: '0 25px',
  },
  subtitle: {
    color: 'white',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant='h3' className={classes.title}>
        TOURNIFY
      </Typography>
      <Typography variant='h6' className={classes.subtitle}>
        Randomize &amp; Verify
      </Typography>
    </div>
  )
}

export default Header
