import React from 'react';

import { withWidth } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Smiley from '../../Assets/Icons/smiley.svg';

const useStyles = makeStyles(({ breakpoints, palette }: Theme) => ({
  container: {
    backgroundColor: palette.green,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -72,
    marginRight: -72,
    width: '2000px',
    transform: 'rotate(1deg) translate(-192px)',
    marginTop: 172,
    marginBottom: 172,
  },
  text: {
    marginLeft: 48,
    marginRight: 48,
    marginTop: 24,
    marginBottom: 24,
  },
}));

const SecondBanner = ({}) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <img src={Smiley}></img>
      <div className={styles.text}>On fait quoi maintenant ?</div>
      <img src={Smiley}></img>
      <div className={styles.text}>On fait quoi maintenant ?</div>
      <img src={Smiley}></img>
      <div className={styles.text}>On fait quoi maintenant ?</div>
      <img src={Smiley}></img>
      <div className={styles.text}>On fait quoi maintenant ?</div>
    </div>
  );
};

export default withWidth()(SecondBanner);
