import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import Arrow from '../../Assets/Icons/Arrow.svg';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  button: {
    [breakpoints.down('sm')]: {
      width: 80,
    },
    backgroundColor: palette.blue,
    width: 110,
    position: 'relative',
  },
  disabled: {
    backgroundColor: palette.grey['400'],
  },
  logo: {
    [breakpoints.down('sm')]: {
      height: 16,
      width: 16,
    },
    height: 25,
    width: 25,
  },
  root: {
    '&:hover': {
      backgroundColor: palette.blue,
    },
    borderRadius: 'unset',
  },
}));

type Props = {
  handleClick: () => void;
  isDisable?: boolean;
  isLoading?: boolean;
};

const CallToAction = ({ handleClick, isDisable, isLoading }: Props): JSX.Element => {
  const styles = useStyles();

  return (
    <Button
      className={styles.button}
      fullWidth
      disabled={!!isDisable}
      onClick={() => {
        handleClick();
      }}
      classes={{
        root: styles.root,
        disabled: styles.disabled,
      }}
    >
      {isLoading ? <CircularProgress size={20} /> : <img src={Arrow} className={styles.logo} />}
    </Button>
  );
};

export { CallToAction };
