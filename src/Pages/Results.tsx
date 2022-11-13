import React, { Fragment, useState, useEffect } from 'react';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import {
  Footer,
  TravelsStepsTimeline,
  SearchBar,
  TravelsComparison,
  TravelsMiniatures,
  TravelStepDetails,
} from '../Components';
import { getTravels } from '../api';
import Flag from '../Assets/Logos/flag_bon_voyage.svg';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
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
    margin: '0 auto',
    maxWidth: 1440,
  },
  customSearchBarWrapper: {
    background: palette.paper,
    border: `solid 3px ${palette.blue}`,
    margin: 'auto',
    marginBottom: 44,
    maxWidth: 1040,
  },
  flag: {
    height: 45,
    marginBottom: 32,
    marginTop: 30,
    width: 135,
  },
}));

const sortCrescendo = (int1: number, int2: number): number => int1 - int2;

type Props = {
  travels: Travel[] | undefined;
  setTravels: (travels: Travel[]) => void;
};

const Results = ({ travels, setTravels }: Props): JSX.Element => {
  if (!travels) return <div>design me ! there is no travel this times.</div>;
  const styles = useStyles();
  const [travelsSortedByCo2, setTravelsSortedByCo2] = useState<Travel[]>([]);
  const [selectedTravel, setSelectedTravel] = useState<Travel>(travelsSortedByCo2[0]);
  const [loading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleValidation = (
    { latlng: fromLatlng }: AlgoliaResponse,
    { latlng: toLatlng }: AlgoliaResponse,
    at: Date,
    numberOfPassenger: number
  ) => {
    setIsLoading(true);

    const from = `${fromLatlng.lng},${fromLatlng.lat}`;
    const to = `${toLatlng.lng},${toLatlng.lat}`;

    getTravels(from, to, at, numberOfPassenger)
      .then(setTravels)
      .then(() => history.push('/resultats'))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const sortedTravels: Travel[] = travels
      .sort((travel1: Travel, travel2: Travel): number => sortCrescendo(travel1.total_gCO2, travel2.total_gCO2))
      .map((travel: Travel): Travel => ({ ...travel, category: [...new Set(travel.category)] }));

    setTravelsSortedByCo2(sortedTravels);
    setSelectedTravel(sortedTravels[0]);
  }, [travels]);

  return (
    <Fragment>
      <div className={styles.container}>
        <Link href="/">
          <img src={Flag} className={styles.flag} />
        </Link>
        <SearchBar
          handleSearchBarValidation={handleValidation}
          inlineDisplay
          customStylesWrapper={styles.customSearchBarWrapper}
          withoutLogo
          loading={loading}
        />
        <TravelsMiniatures
          selectedTravel={selectedTravel}
          selectTravel={setSelectedTravel}
          sortedTravels={travelsSortedByCo2}
        />
        <TravelsComparison sortedTravels={travelsSortedByCo2} selectedTravel={selectedTravel} />
        <TravelsStepsTimeline travel={selectedTravel} />
        <TravelStepDetails selectedTravel={selectedTravel} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Results;
