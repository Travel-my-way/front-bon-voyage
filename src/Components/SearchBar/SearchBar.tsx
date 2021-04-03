import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden, isWidthUp, withWidth } from '@material-ui/core';

import YellowFlag from '../../Assets/Icons/yellowFlag.svg';
import GreenFlag from '../../Assets/Icons/greenFlag.svg';
import RedWatch from '../../Assets/Icons/redWatch.svg';
import MSN from '../../Assets/Icons/MSN.svg';
import OuiAuTrain from '../../Assets/Logos/oui_au_train.svg';

import { TextField } from './TextInput';
import { CallToAction } from './CallToAction';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    border: `solid 3px ${palette.blue}`,
    marginBottom: 232,
    marginLeft: 88,
    marginRight: 88,
    marginTop: 110,
    position: 'relative',
  },
  firstRow: {
    height: 64,
  },
  logo: {
    height: 160,
    position: 'absolute',
    right: -100,
    top: -100,
    width: 160,
  },
  secondRow: {
    height: 55,
  },
  thirdRow: {
    width: 200,
    [breakpoints.down('sm')]: {
      width: 80,
    },
    height: 51,
  },
  thirdRowContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  travellerCTAContainer: {
    display: 'flex',
  },
}));

const SearchBar = ({ width }) => {
  const styles = useStyles();

  const placeholder = {
    arrival: 'Porto-Vecchio, Corse, France',
    date: 'Maintenant',
    departure: 'Cours Vitton, Lyon, France',
    travellers: isWidthUp('md', width) ? '2 voyageurs' : '2',
  };

  return (
    <div className={styles.container}>
      <Hidden smDown>
        <img src={OuiAuTrain} className={styles.logo} />
      </Hidden>
      <TextField
        customClasses={styles.firstRow}
        fullWidth
        logo={YellowFlag}
        margin
        placeholder={placeholder.departure}
        withBottomBorder
      />
      <TextField
        customClasses={styles.secondRow}
        fullWidth
        logo={GreenFlag}
        margin
        placeholder={placeholder.arrival}
        withBottomBorder
      />
      <div className={styles.thirdRowContainer}>
        <TextField logo={RedWatch} margin placeholder={placeholder.date} />
        <div className={styles.travellerCTAContainer}>
          <TextField logo={MSN} withLeftBorder placeholder={placeholder.travellers} customClasses={styles.thirdRow} />
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default withWidth()(SearchBar);
