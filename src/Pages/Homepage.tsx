import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { BlueBoxes } from '../Components';
import Flag from '../Assets/Logos/flag_bon_voyage.svg';
import WhySection from '../Components/WhySection/WhySection';

const useStyles = makeStyles(({ palette, breakpoints }: Theme) => ({
  container: {
    [breakpoints.up('md')]: {
      paddingLeft: '200px',
      paddingRight: '200px',
    },
    [breakpoints.up('sm')]: {
      paddingLeft: '120px',
      paddingRight: '120px',
    },
    [breakpoints.only('xs')]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    backgroundColor: palette.paper,
  },
  flag: {
    height: '100px',
    marginBottom: '115px',
    marginTop: '55px',
    width: '315px',
  },
  title1: {
    color: palette.blue,
    fontSize: '50px',
    fontStyle: 'normal',
    fontWeight: 500,
    marginBottom: '0',
    marginTop: '0',
    textAlign: 'center',
    textShadow: `-4px 0px 0px ${palette.blue}`,
  },
  title2: {
    boxSizing: 'border-box',
    color: palette.paper,
    fontSize: '50px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
    marginTop: '0',
    textAlign: 'center',
    textShadow: `-4px 0px 0px ${palette.yellow}`,
    textStroke: `1.5px ${palette.blue}`,
  },
}));

function Homepage(): JSX.Element {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <img alt="flag" src={Flag} className={styles.flag} />
      <h1 className={styles.title1}>En route pour des voyages</h1>
      <h2 className={styles.title2}>bas carbone</h2>
      <BlueBoxes />
      <WhySection />
    </div>
  );
}

export default Homepage;
