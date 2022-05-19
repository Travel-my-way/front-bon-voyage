import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Results, NewHomepage } from './Pages';
import { SideMenus } from './Components';

function App(): JSX.Element {
  const [travels, setTravels] = useState<Travel[]>([]);
  return (
    <Router>
      <Switch>
        <Route path="/resultats">
          <SideMenus />
          <Results travels={travels} setTravels={setTravels} />
        </Route>
        <Route path="/">
          <SideMenus />
          <NewHomepage setTravels={setTravels} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
