import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Homepage, Results } from './Pages';
import { SideMenus } from './Components';

function App(): JSX.Element {
  return (
    <Router>
      <SideMenus />
      <Switch>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
