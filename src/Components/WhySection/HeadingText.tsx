import React from 'react';
import { Hidden, Typography } from '@material-ui/core';
import Separator from '../Separator';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, palette, spacing }: Theme) => ({
  rootContainer: {
    display: 'flex',
    [breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [breakpoints.up('lg')]: {
      flexDirection: 'column',
    },
  },
  primaryTitle: {
    fontSize: spacing(5),
    color: palette.blue,
    fontWeight: 900,
  },
  secondaryTitle: {
    fontSize: spacing(5),
    color: palette.paper,
    fontWeight: 900,
    textStroke: `0.1px ${palette.blue}`,
  },
  separator: {
    [breakpoints.down('md')]: {
      marginTop: spacing(3),
      marginBottom: spacing(10),
    },
    [breakpoints.up('lg')]: {
      marginTop: spacing(4),
      marginBottom: spacing(5),
    },
  },
  textBody: {
    color: palette.blue,
    fontWeight: 400,
    fontFamily: 'Libre Franklin',
    marginBottom: spacing(2),
  },
}));

const HeadingText = () => {
  const styles = useStyles();

  return (
    <div className={styles.rootContainer}>
      <Typography className={styles.primaryTitle} variant="h3">
        Pourquoi
      </Typography>
      <Typography className={styles.secondaryTitle} variant="h3">
        le bas
      </Typography>
      <Typography className={styles.secondaryTitle} variant="h3">
        carbone ?
      </Typography>
      <Separator className={styles.separator} />
      <Hidden mdDown>
        <Typography className={styles.textBody}>Voici pour s’inspirer des exemples de voyages bas carbone.</Typography>
        <Typography className={styles.textBody}>
          Qui a dit que le dépaysement était une question de kilomètre?
        </Typography>
      </Hidden>
    </div>
  );
};

export default HeadingText;
