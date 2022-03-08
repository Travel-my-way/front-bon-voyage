import React from 'react';

import { withWidth } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Thermometer from '../../Assets/Icons/thermometer.svg';

const useStyles = makeStyles(({ breakpoints, palette }: Theme) => ({
  container: {
    backgroundColor: palette.red,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -72,
    marginRight: -72,
    width: '2000px',
    transform: 'rotate(-1deg) translate(-192px)',
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

const FirstBanner = ({}) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <img src={Thermometer}></img>
      <div className={styles.text}>Attention ça chauffe</div>
      <img src={Thermometer}></img>
      <div className={styles.text}>Attention ça chauffe</div>
      <img src={Thermometer}></img>
      <div className={styles.text}>Attention ça chauffe</div>
      <img src={Thermometer}></img>
      <div className={styles.text}>Attention ça chauffe</div>
      <img src={Thermometer}></img>
      <div className={styles.text}>Attention ça chauffe</div>
    </div>
  );
};

export default withWidth()(FirstBanner);
