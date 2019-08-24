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
  submitContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
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
  const [ raffle, setRaffle ] = useState(null)
  useEffect(() => {
    tournamentsApi.getTournament({ tournamentId })
      .then(response => {
        setTournament(response.data)
      })
  }, [])

  const onSort = async () => {
    const response = await tournamentsApi.sortTournament({ tournamentId })
    setRaffle(response.data)
  }

  return (
    <div className={classes.container}>
      <Typography align='center' variant='h6'>
        {tournament === null
          ? 'Cargando...'
          : (
            tournament.nombre
          )
        }
      </Typography>
      {raffle === null
        ? (
          <div className={classes.submitContainer}>
            <Button onClick={onSort} variant='contained'>
              Sortear equipos
            </Button>
          </div>
        )
        : (
          <div>
            <Typography>
              Resultados de la súper aleatoriedad verificable
            </Typography>
            <Typography>
              {JSON.stringify(raffle, null, 2)}
            </Typography>
          </div>
        )
      }
    </div>
  )
}

export default SortTournament
