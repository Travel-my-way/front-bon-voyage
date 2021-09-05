import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import classnames from 'classnames';

import { formatHoursAndMinutes } from '../../utils';
import TravelIcon from '../TravelIcon';
import GreenCircle from '../../Assets/Shapes/GreenCircle.svg';

const useStyles = makeStyles(({ palette }) => ({
  container: {
    borderLeft: `dotted 2px ${palette.green}`,
    marginLeft: -1,
    marginTop: 24,
  },
  greenDot: {
    height: 8,
    marginRight: 4,
    width: 8,
  },
  title: {
    color: palette.blue,
  },
  travelArrival: {
    bottom: -3,
  },
  travelContainer: {
    borderLeft: `solid 2px ${palette.green}`,
    left: -2,
    paddingLeft: 8,
    position: 'relative',
    marginBottom: 30,
  },
  travelDeparture: {
    top: -5,
  },
  travelLogo: {
    color: palette.green,
    left: -28,
    position: 'absolute',
    top: 12,
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
    left: -13,
    lineHeight: '16px',
    position: 'relative',
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
          <div className={styles.travelContainer} key={travelStep.id}>
            <Typography className={classnames(styles.travelStepName, styles.travelDeparture)}>
              <img src={GreenCircle} className={styles.greenDot} />
              {travelStep.departure_stop_name || 'no_departure'}
            </Typography>

            <Typography className={styles.travelStepDuration}>
              {formatHoursAndMinutes(travelStep.duration_s)}
            </Typography>

            <Typography className={classnames(styles.travelStepName, styles.travelArrival)}>
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
