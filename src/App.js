import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import NewTournament from './pages/NewTournament';
import VerifyRandomness from './pages/VerifyRandomness';
import SignOnTeam from './pages/SignOnTeam';
import Header from './components/Header'
import Background from './assets/img/parallax.jpeg'

const useStyles = makeStyles(() => ({
  content: {
    backgroundImage: `url(${Background})`,
    height: 'calc(100vh - 130px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div className={classes.content}>
        <Switch>
          <Route path='/' exact component={NewTournament} />
          <Route path='/verificar' exact component={VerifyRandomness} />
          <Route path='/inscripcion/:idtorneo' exact component={SignOnTeam} />
        </Switch>
      </div>
    </>
  );
}

export default App;
