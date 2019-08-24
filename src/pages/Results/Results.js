import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

import tournamentsApi from '../../api/tournaments'

const useStyles = makeStyles(() => ({
  container: {
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
        setGroups(response.data)
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
            <List>
              {group.map(team => (
                <ListItem button key={team[0]}>
                  <ListItemText primary={`${team[0]} ${team[1]}`} />
                </ListItem>
              ))}
            </List>
          ))}
          </>
        )
      }
    </div>
  )
}

export default Results
