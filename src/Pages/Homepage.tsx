import React, { Fragment, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';

import { BlueBoxes, Co2Comparison, Footer, Questions, SearchBar, ShapeBackground } from '../Components';
import { getTravels } from '../api';
import WhySection from '../Components/WhySection/WhySection';
import Flag from '../Assets/Logos/flag_bon_voyage.svg';
import TravelLine from '../Assets/Logos/travel_line.svg';
import { useHistory } from 'react-router-dom';

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

type Props = {
  setTravels: (travels: Travel[]) => void;
};

function Homepage({ setTravels }: Props): JSX.Element {
  const styles = useStyles();
  const [loading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleValidation = (
    { latlng: fromLatlng }: AlgoliaResponse,
    { latlng: toLatlng }: AlgoliaResponse,
    at: Date,
    numberOfPassenger: number
  ) => {
    setIsLoading(true);

    const from = `${fromLatlng.lat},${fromLatlng.lng}`;
    const to = `${toLatlng.lat},${toLatlng.lng}`;
    getTravels(from, to, at, numberOfPassenger)
      .then(setTravels)
      .then(() => history.push('/resultats'))
      .finally(() => setIsLoading(false));
  };

  const goToNewHomepage = () => {
    history.push('/new-homepage');
  };

  return (
    <ShapeBackground>
      <Fragment>
        <Button onClick={goToNewHomepage} style={{ position: 'absolute', top: '0', left: '0', color: 'transparent' }}>
          beta
        </Button>
        <div className={styles.travelLine}>
          <div className={styles.container}>
            <Link href="/">
              <img src={Flag} className={styles.flag} />
            </Link>
            <h1 className={styles.title1}>En route pour des voyages</h1>
            <h2 className={styles.title2}>bas carbone</h2>
            <SearchBar handleSearchBarValidation={handleValidation} loading={loading} />
            <Co2Comparison />
            <WhySection />
            <Questions />
            <BlueBoxes />
          </div>
        </div>
        <Footer />
      </Fragment>
    </ShapeBackground>
  );
}

export default Homepage;
