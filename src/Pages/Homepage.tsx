import React, { Fragment } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';

import { BlueBoxes, Co2Comparison, Footer, Questions, SearchBar, ShapeBackground } from '../Components';
import { handleSearchBarValidation } from '../api';
import WhySection from '../Components/WhySection/WhySection';
import Flag from '../Assets/Logos/flag_bon_voyage.svg';
import TravelLine from '../Assets/Logos/travel_line.svg';

const useStyles = makeStyles(({ palette, breakpoints }: Theme) => ({
  basCarboneButton: {
    borderRadius: 0,
    fontFamily: 'Libre Franklin',
    marginBottom: 172,
    marginTop: 88,
    textTransform: 'none',
  },
  basCarboneButton: {
    borderRadius: 0,
    fontFamily: 'Libre Franklin',
    marginBottom: 172,
    marginTop: 88,
    textTransform: 'none',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
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
    margin: '0 auto',
    maxWidth: 1400,
  },
  flag: {
    height: 80,
    marginBottom: 120,
    marginTop: 40,
    width: 240,
  },
  title1: {
    color: palette.blue,
    fontFamily: 'Monument Extended',
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
  travelLine: {
    backgroundImage: `url(${TravelLine})`,
    backgroundPosition: '0px 160px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
}));

function Homepage(): JSX.Element {
  const styles = useStyles();

  return (
    <ShapeBackground>
      <Fragment>
        <div className={styles.travelLine}>
          <div className={styles.container}>
            <img src={Flag} className={styles.flag} />
            <h1 className={styles.title1}>En route pour des voyages</h1>
            <h2 className={styles.title2}>bas carbone</h2>
            <SearchBar handleSearchBarValidation={handleSearchBarValidation} />
            <div className={styles.buttonContainer}>
              <Link>
                <Button color="primary" variant="contained" className={styles.basCarboneButton}>
                  C’est quoi, voyager bas carbone ?
                </Button>
              </Link>
            </div>
            <BlueBoxes />
            <Co2Comparison />
            <WhySection />
            <Questions />
          </div>
        </div>
        <Footer />
      </Fragment>
    </ShapeBackground>
  );
}

export default Homepage;
