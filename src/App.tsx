import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Homepage, Results } from './Pages';
import { SideMenus } from './Components';

function App(): JSX.Element {
  const [travels, setTravels] = useState();
  return (
    <Router>
      <Switch>
        <Route path="/resultats">
          <SideMenus />
          <Results travels={travels} setTravels={setTravels} />
        </Route>
        <Route path="/">
          <SideMenus />
          <Homepage setTravels={setTravels} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
