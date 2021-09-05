import React from 'react';
import { DateTimePicker as MuiDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { fr } from 'date-fns/locale';
import classNames from 'classnames';

const useStyles = makeStyles(({ palette }) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    paddingRight: 16,
  },
  logo: {
    marginRight: 6,
  },
  textInput: {
    color: palette.blue,
    fontFamily: 'Libre Franklin',
    width: 240,
  },
}));

type Props = {
  logo?: string;
  customClasses?: string;
  selectedDate: Date | null;
  handleChange: (date: Date | null) => void;
};

const DateTimePicker = ({ customClasses, logo, selectedDate, handleChange }: Props): JSX.Element => {
  const styles = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fr}>
      <div className={classNames(styles.container, customClasses)}>
        {logo && <img src={logo} className={styles.logo} />}
        <MuiDatePicker
          ampm={false}
          disablePast
          disableToolbar
          format={'dd MMMM yyyy p'}
          value={selectedDate}
          onChange={(value: Date | null) => {
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
