import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Homepage } from './Pages';

function App(): JSX.Element {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Homepage />
    </MuiPickersUtilsProvider>
  );
}

export default App;
