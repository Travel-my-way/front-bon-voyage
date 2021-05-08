import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { formatHoursAndMinutes } from '../../utils';
import TravelSteps from './TravelSteps';
import TravelIcon from '../TravelIcon';

const useStyles = makeStyles(({ palette }) => ({
  categories: {
    color: palette.blue,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '25px',
    fontStyle: 'normal',
  },
  co2: {
    color: palette.blue,
    fontWeight: 900,
    size: 24,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginTop: 80,
    marginLeft: -28,
    display: 'flex',
  },
  icon: {
    color: palette.blue,
    height: 45,
    width: 45,
  },
  iconsContainer: {
    marginRight: 8,
  },
  travelSteps: {
    color: palette.blue,
    marginTop: 16,
  },
  travelDetails: {
    width: 450,
  },
  travelDuration: {
    fontSize: 14,
    fontFamily: 'Libre Franklin',
  },
  map: {
    width: 405,
    height: 328,
    background: 'green',
    marginTop: 20,
  },
}));

type Props = {
  travel: Travel;
};

const QuickTravelDetails = ({ travel }: Props): JSX.Element | null => {
  const styles = useStyles();

  if (!travel) {
    return null;
  }

  const formattedCo2 = `${String(travel.total_gCO2 / 1000).replace('.', ',')} Kg co2e`;
  const duration = formatHoursAndMinutes(travel.total_duration);

  return (
    <div className={styles.container}>
      <div className={styles.travelDetails}>
        <div className={styles.title}>
          <div className={styles.iconsContainer}>
            {travel.category.map((category: TravelCategory) => {
              return <TravelIcon category={category} key={category} classes={styles.icon} />;
            })}
          </div>
          <div>
            <Typography className={styles.categories}>{travel.category.join(' + ').toUpperCase()}</Typography>
            <Typography className={styles.co2}>{formattedCo2}</Typography>
          </div>
        </div>
        <div className={styles.travelSteps}>
          <Typography className={styles.travelDuration}>Durée porte-à-porte : {duration}</Typography>
          <div>
            <TravelSteps travelSteps={travel.journey_steps} />
          </div>
        </div>
      </div>
      <div className={styles.map}></div>
    </div>
  );
};

export default QuickTravelDetails;
