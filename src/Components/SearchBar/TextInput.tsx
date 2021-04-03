import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  margin: {
    marginLeft: '30px',
    marginRight: '30px',
  },
  textField: {
    color: palette.blue,
    fontFamily: 'Libre Franklin',
    fontWeight: 400,
  },
  textFieldBorderBottom: {
    backgroundImage: `repeating-linear-gradient(to right, ${palette.blue} 0 3px, transparent 3px 12px)`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 1px',
  },
  textFieldContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  textFieldLeftBottom: {
    backgroundImage: `repeating-linear-gradient(to bottom, ${palette.blue} 0 3px, transparent 3px 12px)`,
    backgroundPosition: '0 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1px 100%',
  },
  textFieldLogo: {
    marginLeft: 8,
    marginRight: 16,
  },
}));

type Props = {
  customClasses?: string;
  fullWidth?: boolean;
  logo: string;
  margin?: boolean;
  placeholder?: string;
  withBottomBorder?: boolean;
  withLeftBorder?: boolean;
};

const TextField = ({
  customClasses = '',
  fullWidth,
  logo,
  margin,
  placeholder = '',
  withBottomBorder,
  withLeftBorder,
}: Props) => {
  const styles = useStyles();
  const propsClasses = [];

  if (withBottomBorder) {
    propsClasses.push(styles.textFieldBorderBottom);
  }

  if (withLeftBorder) {
    propsClasses.push(styles.textFieldLeftBottom);
  }

  if (margin) {
    propsClasses.push(styles.margin);
  }

  return (
    <div className={`${styles.textFieldContainer} ${propsClasses.join(' ')} ${customClasses}`}>
      <MuiTextField
        placeholder={placeholder}
        className={styles.textField}
        fullWidth={fullWidth}
        InputProps={{
          className: styles.textField,
          disableUnderline: true,
          startAdornment: <img className={styles.textFieldLogo} src={logo} />,
        }}
      />
    </div>
  );
};

export { TextField };
