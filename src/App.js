import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NewTournament from './pages/NewTournament';
import VerifyRandomness from './pages/VerifyRandomness';
import SignOnTeam from './pages/SignOnTeam';

const App = () => {
  return (
    <>
      <div>Hosdassdla!</div>
      <Switch>
        <Route path='/' exact component={NewTournament} />
        <Route path='/verificar' exact component={VerifyRandomness} />
        <Route path='/inscripcion' exact component={SignOnTeam} />
      </Switch>
    </>
  );
}

export default App;
