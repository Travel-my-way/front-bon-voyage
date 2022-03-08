import React, { Fragment, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

import { NewFooter, NewSearchBar, NewQuestions, FirstBanner, SecondBanner } from '../Components';
import { getTravels } from '../api';
import Flag from '../Assets/Logos/flag_bon_voyage.svg';
import TravelLine from '../Assets/Logos/travel_line.svg';
import CountriesComparator from '../Assets/Images/countries-comparator.png';
import MeansComparator from '../Assets/Images/means-comparator.png';
import Car2 from '../Assets/Icons/car-2.svg';
import Bubbles from '../Assets/Icons/bubbles.svg';
import Feet from '../Assets/Icons/feet.svg';
import Train from '../Assets/Icons/train.svg';
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
  subcontainer: {
    display: 'flex',
  },
  flag: {
    height: 80,
    marginBottom: 120,
    marginTop: 40,
    width: 240,
  },
  title1: {
    color: palette.black2,
    fontFamily: 'Monument Extended',
    fontSize: 50,
    fontStyle: 'normal',
    fontWeight: 400,
    marginBottom: 0,
    marginTop: 0,
    flexBasis: '45%',
    paddingRight: '124px',
    lineHeight: '78px',
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

function NewHomepage({ setTravels }: Props): JSX.Element {
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

  return (
    <Fragment>
      <div className={styles.travelLine}>
        <div className={styles.container}>
          <Link href="/">
            <img src={Flag} className={styles.flag} />
          </Link>
          <div className={styles.subcontainer}>
            <h1 className={styles.title1}>En route pour des voyages bas carbone</h1>
            <NewSearchBar handleSearchBarValidation={handleValidation} loading={loading} />
          </div>
          <FirstBanner />
          <div className={styles.subcontainer}>
            <h1 className={styles.title1}>
              <span style={{ fontSize: '24px' }}>HONTE DE L'AVION ?</span>
              <br />
              Si le transport aérien était un pays, il occuperait la place de 7ème pollueur au monde.
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img src={CountriesComparator} />
              <span style={{ fontSize: 18, marginTop: 12 }}>Source : Carbon Brief</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 128 }}>
            <h1 className={styles.title1} style={{ paddingRight: 0 }}>
              Billets pour le climat
            </h1>
            <div style={{ fontSize: 18, padding: '36px 72px', textAlign: 'center', maxWidth: 762, lineHeight: '27px' }}>
              Notre comparateur permet de se rendre compte des émissions de chaque moyen de transport. Prenons l’exemple
              d’un Paris - Barcelone et comparons leurs émissions de CO2.
            </div>
            <img src={MeansComparator} style={{ width: 720 }} />
          </div>
          <SecondBanner />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 128 }}>
            <h1 className={styles.title1} style={{ paddingRight: 0 }}>
              Les principes du bon voyage
            </h1>
            <div style={{ fontSize: 18, padding: '36px 72px', textAlign: 'center', maxWidth: 762, lineHeight: '27px' }}>
              Voici 4 idées à retenir pour inventer 1000 voyages. On essaye ?
            </div>
            <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'row', marginBottom: 172 }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flexStart',
                  padding: '30px 20px 20px',
                  background: 'white',
                  border: '3px solid #2D3134',
                  boxShadow: '-4px 5px 0px #0AAA93',
                  flexBasis: '25%',
                  marginRight: 24,
                }}
              >
                <img src={Train} style={{ marginBottom: 24 }} width={24} />
                Ceux qui m’aiment prendront le train. Le moyen de transport le plus climato-compatible (après le vélo et
                la marche à pied).
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flexStart',
                  padding: '30px 20px 20px',
                  background: 'white',
                  border: '3px solid #2D3134',
                  boxShadow: '-4px 5px 0px #0AAA93',
                  flexBasis: '25%',
                  marginRight: 24,
                }}
              >
                <img src={Car2} style={{ marginBottom: 24 }} width={24} />
                Je marche seul.e mais je roule avec un maximum de passagers. Vive le co-voiturage !
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flexStart',
                  padding: '30px 20px 20px',
                  background: 'white',
                  border: '3px solid #2D3134',
                  boxShadow: '-4px 5px 0px #0AAA93',
                  flexBasis: '25%',
                  marginRight: 24,
                }}
              >
                <img src={Bubbles} style={{ marginBottom: 24 }} width={24} />
                Je partage mes bons plans pour faire grandir la communauté des voyageur.ses du vrai monde d’après.
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flexStart',
                  padding: '30px 20px 20px',
                  background: 'white',
                  border: '3px solid #2D3134',
                  boxShadow: '-4px 5px 0px #0AAA93',
                  flexBasis: '25%',
                  marginRight: 24,
                }}
              >
                <img src={Feet} style={{ marginBottom: 24 }} width={24} />
                Je ralentis la cadence et me donne le temps de voyager. Moins loin c’est tout aussi bien.
              </div>
            </div>
          </div>
          <NewQuestions />
        </div>
      </div>
      <NewFooter />
    </Fragment>
  );
}

export default NewHomepage;
