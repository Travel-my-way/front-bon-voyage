import React, { Fragment } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { BlueBoxes, Footer, Questions, SearchBar, ShapeBackground } from '../Components';
import WhySection from '../Components/WhySection/WhySection';
import Flag from '../Assets/Logos/flag_bon_voyage.svg';

const useStyles = makeStyles(({ palette, breakpoints }: Theme) => ({
  container: {
    [breakpoints.up('md')]: {
      paddingLeft: 200,
      paddingRight: 200,
    },
    [breakpoints.up('sm')]: {
      paddingLeft: 120,
      paddingRight: 120,
    },
    [breakpoints.only('xs')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  flag: {
    height: 100,
    marginBottom: 115,
    marginTop: 55,
    width: 315,
  },
  title1: {
    color: palette.blue,
    fontSize: 50,
    fontStyle: 'normal',
    fontWeight: 500,
    marginBottom: 0,
    marginTop: 0,
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
    <ShapeBackground>
      <Fragment>
        <div className={styles.container}>
          <img src={Flag} className={styles.flag} />
          <h1 className={styles.title1}>En route pour des voyages</h1>
          <h2 className={styles.title2}>bas carbone</h2>
          <SearchBar />
          <BlueBoxes />
          <WhySection />
          <Questions />
        </div>
        <Footer />
      </Fragment>
    </ShapeBackground>
  );
}

export default Homepage;
