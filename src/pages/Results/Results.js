import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core'

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

const Results = (props) => {
  const {
    match: {
      params: {
        tournamentId,
      },
    },
  } = props
  const classes = useStyles()
  const [ groups, setGroups ] = useState(null)
  useEffect(() => {
    tournamentsApi.getResults({ tournamentId })
      .then(response => {
        setGroups(response.data.equipos)
      })
  }, [ tournamentId ])

  return (
    <div className={classes.container}>
      {groups === null
        ? (
          <div>Cargando...</div>
        )
        : (
          <>
          {groups.map(group => (
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
          </>
        )
      }
    </div>
  )
}

export default Results
