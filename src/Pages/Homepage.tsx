import React, { Fragment } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { BlueBoxes, Footer, Questions, SearchBar, SideMenus, ShapeBackground } from '../Components';
import WhySection from '../Components/WhySection/WhySection';
import Flag from '../Assets/Logos/flag_bon_voyage.svg';
import TravelLine from '../Assets/Logos/travel_line.svg';

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
    backgroundImage: `url(${TravelLine})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '0px 160px',
    maxWidth: 1400,
    margin: '0 auto',
  },
  flag: {
    height: 80,
    marginBottom: 120,
    marginTop: 40,
    width: 240,
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
    marginBottom: 0,
    marginTop: 0,
    textAlign: 'center',
    textShadow: `-4px 0px 0px ${palette.yellow}`,
    textStroke: `1.5px ${palette.blue}`,
  },
  test: {},
}));

function Homepage(): JSX.Element {
  const styles = useStyles();

  return (
    <ShapeBackground>
      <Fragment>
        <div className={styles.container}>
          <img src={Flag} className={styles.flag} />
          <div className={styles.test}>
            <h1 className={styles.title1}>En route pour des voyages</h1>
            <h2 className={styles.title2}>bas carbone</h2>
            <SearchBar />
          </div>
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
