import React from 'react';
import { DateTimePicker as MuiDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { fr } from 'date-fns/locale';

const useStyles = makeStyles(({ palette }) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  logo: {
    marginRight: 6,
  },
  textInput: {
    fontFamily: 'Libre Franklin',
    color: palette.blue,
  },
}));

type Props = {
  logo: string;
  selectedDate?: Date;
  handleChange: Function;
};

const DateTimePicker = ({ logo, selectedDate, handleChange }: Props) => {
  const styles = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fr}>
      <div className={styles.container}>
        <img src={logo} className={styles.logo} />
        <MuiDatePicker
          ampm={false}
          disablePast
          disableToolbar
          format={'dd MMMM yyyy p'}
          value={selectedDate}
          onChange={(value: any) => {
            handleChange(value);
          }}
          InputProps={{
            className: styles.textInput,
            disableUnderline: true,
          }}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
};

export { DateTimePicker };
