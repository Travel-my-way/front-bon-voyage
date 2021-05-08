import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import { formatHoursAndMinutes } from '../../utils';
import TravelIcon from '../TravelIcon';
import GreenCircle from '../../Assets/Shapes/greenCircle.svg';

const useStyles = makeStyles(({ palette }) => ({
  container: {
    marginTop: 24,
    borderLeft: `dotted 2px ${palette.green}`,
    marginLeft: -1,
  },
  greenDot: {
    width: 8,
    height: 8,
    marginRight: 4,
  },
  travelContainer: {
    position: 'relative',
    left: -2,
    paddingLeft: 8,
    borderLeft: `solid 2px ${palette.green}`,
    marginBottom: 30,
  },
  travelLogo: {
    position: 'absolute',
    top: 12,
    left: -28,
    color: palette.green,
  },
  travelStepDuration: {
    fontFamily: 'Libre Franklin',
    fontSize: 11,
    fontStyle: 'italic',
    fontWeight: 400,
    lineHeight: '16px',
    listStyle: 'none',
  },
  travelStepName: {
    fontFamily: 'Libre Franklin',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: '16px',
    position: 'relative',
    left: -13,
  },
  travelArrival: {
    bottom: -3,
  },
  travelDeparture: {
    top: -5,
  },
}));

type Props = {
  travelSteps: TravelStep[];
};

const TravelSteps = ({ travelSteps }: Props): JSX.Element => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      {travelSteps.map((travelStep: TravelStep) => {
        return (
          <div className={styles.travelContainer}>
            <Typography className={`${styles.travelStepName} ${styles.travelDeparture}`}>
              <img src={GreenCircle} className={styles.greenDot} />
              {travelStep.departure_stop_name || 'no_departure'}
            </Typography>

            <Typography className={styles.travelStepDuration}>
              {formatHoursAndMinutes(travelStep.duration_s)}
            </Typography>

            <Typography className={`${styles.travelStepName} ${styles.travelArrival}`}>
              <img src={GreenCircle} className={styles.greenDot} />
              {travelStep.arrival_stop_name || 'no_arrival'}
            </Typography>
            <TravelIcon category={travelStep.type} classes={styles.travelLogo} />
          </div>
        );
      })}
    </div>
  );
};

export default TravelSteps;
