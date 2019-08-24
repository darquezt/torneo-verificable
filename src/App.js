import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NewTournament from './pages/NewTournament';

const App = () => {
  return (
    <>
      <div>Hola!</div>
      <Switch>
        <Route path='/' exact component={NewTournament} />
      </Switch>
    </>
  );
}

export default App;
