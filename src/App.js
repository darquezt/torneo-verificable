import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NewTournament from './pages/NewTournament';
import VerifyRandomness from './pages/VerifyRandomness';

const App = () => {
  return (
    <>
      <div>Hosdassdla!</div>
      <Switch>
        <Route path='/' exact component={NewTournament} />
        <Route path='/verificar' exact component={VerifyRandomness} />
      </Switch>
    </>
  );
}

export default App;
