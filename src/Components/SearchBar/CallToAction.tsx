import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import Arrow from '../../Assets/Icons/Arrow.svg';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    [breakpoints.down('sm')]: {
      width: 80,
    },
    backgroundColor: palette.blue,
    width: 110,
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

const CallToAction = (): JSX.Element => {
  const styles = useStyles();

  return (
    <Button
      className={styles.container}
      fullWidth
      classes={{
        root: styles.root,
      }}
    >
      <img src={Arrow} className={styles.logo} />
    </Button>
  );
};

export { CallToAction };
