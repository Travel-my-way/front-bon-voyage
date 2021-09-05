import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { formatHoursAndMinutes } from '../../utils';
import TravelSteps from './TravelSteps';
import TravelIcon from '../TravelIcon';
import TravelMap from '../TravelMap/LeafletMap';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  categories: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '25px',
  },
  co2: {
    fontWeight: 900,
    size: 24,
  },
  container: {
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    alignItems: 'center',
    color: palette.blue,
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    marginTop: 30,
    margin: 'auto',
    width: '100%',
    maxWidth: 810,
  },
  icon: {
    color: palette.blue,
    height: 45,
    width: 45,
  },
  iconsContainer: {
    marginRight: 8,
  },
  title: {
    display: 'flex',
    marginLeft: -28,
    marginTop: 80,
  },
  travelDuration: {
    fontFamily: 'Libre Franklin',
    fontSize: 14,
  },
  travelSteps: {
    color: palette.blue,
    marginTop: 16,
  },
}));

type Props = {
  travel: Travel;
};

const TravelsStepsTimeline = ({ travel }: Props): JSX.Element | null => {
  const styles = useStyles();

  if (!travel) {
    return null;
  }

  const formattedTravelCategories = travel.category.join(' + ');
  const duration = formatHoursAndMinutes(travel.total_duration);
  const formattedCo2 = `${String(travel.total_gCO2 / 1000)
    .replace('.', ',')
    .slice(0, 4)} Kg co2e`;

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>
          <div className={styles.iconsContainer}>
            {travel.category.map((category: TravelCategory) => {
              return <TravelIcon category={category} key={category} classes={styles.icon} />;
            })}
          </div>
          <div>
            <Typography className={styles.categories}>{formattedTravelCategories.toUpperCase()}</Typography>
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
      <TravelMap travel={travel} />
    </div>
  );
};

export default TravelsStepsTimeline;
