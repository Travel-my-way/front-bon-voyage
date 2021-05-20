import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Footer,
  QuickTravelDetails,
  SearchBar,
  TravelsComparison,
  TravelsMiniatures,
  TravelStepDetails,
} from '../Components';
import Flag from '../Assets/Logos/flag_bon_voyage.svg';
import MockedResponse from './MockedResponse.json';

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

const sortCrescendo = (int1: number, int2: number): number => {
  return int1 - int2;
};

const Results = (): JSX.Element => {
  const travels = MockedResponse.results;
  const styles = useStyles();
  const [travelsSortedByCo2, setTravelsSortedByCo2] = useState<Travel[]>([]);
  const [selectedTravel, setSelectedTravel] = useState(travelsSortedByCo2[0]);

  useEffect(() => {
    const sortedTravels: Travel[] = [...travels]
      .sort((travel1: Travel, travel2: Travel) => {
        return sortCrescendo(travel1.total_gCO2 as number, travel2.total_gCO2 as number);
      })
      .map((travel) => ({ ...travel, category: [...new Set(travel.category)] }));

    setTravelsSortedByCo2(sortedTravels);
    setSelectedTravel(sortedTravels[0]);
  }, [travels]);

  return (
    <Fragment>
      <div className={styles.container}>
        <img src={Flag} className={styles.flag} />
        <SearchBar customStylesWrapper={styles.customSearchBarWrapper} withoutLogo />
        <TravelsMiniatures
          selectedTravel={selectedTravel}
          setSelectedTravel={setSelectedTravel}
          sortedTravels={travelsSortedByCo2}
        />
        <TravelsComparison sortedTravels={travelsSortedByCo2} selectedTravel={selectedTravel} />
        <QuickTravelDetails travel={selectedTravel} />
        <TravelStepDetails selectedTravel={selectedTravel} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Results;
