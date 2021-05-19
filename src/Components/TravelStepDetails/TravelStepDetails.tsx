import React from 'react';
import { format } from 'date-fns';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { formatHoursAndMinutes } from '../../utils';

const useStyles = makeStyles((theme) => ({
  bookButton: {
    background: `${theme.palette.blue} !important`,
    color: 'white',
    fontFamily: 'Libre Franklin',
    fontWeight: 700,
    size: 18,
    width: 170,
  },
  container: {
    color: theme.palette.blue,
    margin: 'auto',
    maxWidth: 865,
    marginTop: 30,
  },
  hour: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  text: {
    fontFamily: 'Libre Franklin',
    fontSize: '16px',
    fontStyle: 'normal',
    letterSpacing: '0em',
    lineHeight: '19px',
    margin: 'auto',
  },
  textContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  row: {
    backgroundImage: `repeating-linear-gradient(to right, ${theme.palette.blue} 0 3px, transparent 3px 12px)`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 1px',
    paddingBottom: 32,
    paddingTop: 32,
    '&:last-child': {
      backgroundSize: '0px',
    },
  },
}));

type Props = {
  selectedTravel: Travel;
};

const TravelStepDetails = ({ selectedTravel }: Props) => {
  if (!selectedTravel) return null;

  const styles = useStyles();

  return (
    <div className={styles.container}>
      {selectedTravel.journey_steps.map((step: TravelStep) => {
        return (
          <Grid container className={styles.row}>
            <Grid item xs={3} className={styles.textContainer}>
              <Typography className={`${styles.hour}`}>
                {format(step.departure_date, "HH'h'mm")} - {format(step.arrival_date, "HH'h'mm")}
              </Typography>
            </Grid>
            <Grid item xs={3} className={styles.textContainer}>
              <Typography className={styles.text}>
                {formatHoursAndMinutes(step.arrival_date - step.departure_date)}
              </Typography>
            </Grid>
            <Grid item xs={2} className={styles.textContainer}>
              <Typography className={styles.text}>{step.price_EUR} €</Typography>
            </Grid>
            <Grid item xs={4} className={styles.textContainer}>
              <Button color="primary" variant="contained">
                Voir le trajet
              </Button>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default TravelStepDetails;
