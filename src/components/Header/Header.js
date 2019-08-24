import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
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
  github: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  }
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
      <a className={classes.github} href="https://github.com/mbergert/HackatonRandomUchile2019/blob/master/TorneoVerificable/randomTorneo/views.py">
        Github | Script de verificacion
      </a>
    </div>
  )
}

export default Header
