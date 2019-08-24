import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core';

import tournamentsApi from '../../api/tournaments'

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

const SortTournament = (props) => {
  const {
    match: {
      params: {
        tournamentId,
      }
    }
  } = props
  const classes = useStyles()
  const [ tournament, setTournament ] = useState(null)
  useEffect(() => {
    tournamentsApi.getTournament({ tournamentId })
      .then(response => {
        setTournament(response.data)
      })
  })

  const onSort = async () => {

  }

  return (
    <div className={classes.container}>
      <Typography>
        {tournament === null
          ? 'Cargando...'
          : (
            tournament.name
          )
        }
      </Typography>
      <Button variant='contained'>
        Sortear equipos
      </Button>
    </div>
  )
}

export default SortTournament
