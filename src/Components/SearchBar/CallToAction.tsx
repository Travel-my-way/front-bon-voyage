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
    bottom: 0,
    minHeight: '100%',
    position: 'absolute',
    right: 0,
    width: 110,
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
  white: {
    color: 'white',
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
      onClick={handleClick}
      classes={{
        root: styles.root,
        disabled: styles.disabled,
      }}
    >
      {isLoading ? (
        <CircularProgress color="secondary" size={20} className={styles.white} />
      ) : (
        <img src={Arrow} className={styles.logo} />
      )}
    </Button>
  );
};

export { CallToAction };
