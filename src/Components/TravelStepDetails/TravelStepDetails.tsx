import React from 'react';
import { format } from 'date-fns';
import { Grid, Button, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Separator from '../Separator';
import { formatHoursAndMinutes } from '../../utils';

const useStyles = makeStyles((theme) => ({
  bookButton: {
    color: 'white',
    fontFamily: 'Libre Franklin',
    fontWeight: 700,
    size: 18,
  },
  className: {
    marginTop: 25,
  },
  container: {
    color: theme.palette.black2,
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
    backgroundImage: `repeating-linear-gradient(to right, ${theme.palette.black2} 0 3px, transparent 3px 12px)`,
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

const formatTitle = (steps: Array<TravelStep>) => {
  if (steps.length === 1) {
    return `1 etape ${steps[0].type}`;
  }

  const allStepType = Array.from(new Set(steps.map(({ type }: TravelStep) => type))).join(' + ');

  return `${steps.length} étapes ${allStepType}`;
};

const formatPrice = (prices: TravelStep['price_EUR']) => {
  if (prices.length <= 1) {
    return ' - ';
  }

  const unformatedPrices = String(
    prices.reduce((acc, price) => {
      return acc + price;
    }, 0)
  ).split('.');

  if (unformatedPrices.length > 1) {
    unformatedPrices[1] = unformatedPrices[1].slice(0, 2);
  }

  return `${unformatedPrices.join()} €`;
};

const TravelStepDetails = ({ selectedTravel }: Props): JSX.Element | null => {
  if (!selectedTravel) {
    return null;
  }

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h3>{formatTitle(selectedTravel.journey_steps)}</h3>
      <Separator className={styles.className} />
      {selectedTravel.journey_steps.map((step: TravelStep) => {
        return (
          <Grid container className={styles.row} key={step.departure_point}>
            <Grid item xs={3} className={styles.textContainer}>
              <Typography className={styles.hour}>
                {format(step.departure_date * 1000, "HH'h'mm")} - {format(step.arrival_date * 1000, "HH'h'mm")}
              </Typography>
            </Grid>
            <Grid item xs={3} className={styles.textContainer}>
              <Typography className={styles.text}>
                {formatHoursAndMinutes(step.arrival_date - step.departure_date)}
              </Typography>
            </Grid>
            <Grid item xs={2} className={styles.textContainer}>
              <Typography className={styles.text}>{formatPrice(step.price_EUR)}</Typography>
            </Grid>
            <Grid item xs={4} className={styles.textContainer}>
              {step.booking_link && (
                <Link className={styles.bookButton} href={step.booking_link} target="_blank">
                  <Button color="primary" variant="contained">
                    Voir le trajet
                  </Button>
                </Link>
              )}
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default TravelStepDetails;
