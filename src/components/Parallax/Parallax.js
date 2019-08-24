import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Parallax as ReactParallax } from 'react-parallax'

import ParallaxImg from '../../assets/img/parallax.jpeg'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    height: 200,
    backgroundImage: `url(${ParallaxImg})`,
    backgroundPositionY: -300,
  },
  title: {
    color: 'white',
  },
}))

const Parallax = (props) => {
  const {
    title,
  } = props
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant='h4' className={classes.title}>
        {title}
      </Typography>
    </div>
  )
}

export default Parallax
