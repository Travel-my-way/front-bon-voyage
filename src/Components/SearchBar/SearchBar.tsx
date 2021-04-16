import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden, isWidthUp, withWidth, Select, MenuItem, WithWidth } from '@material-ui/core';

import YellowFlag from '../../Assets/Icons/yellowFlag.svg';
import GreenFlag from '../../Assets/Icons/greenFlag.svg';
import RedWatch from '../../Assets/Icons/redWatch.svg';
import MSN from '../../Assets/Icons/MSN.svg';
import OuiAuTrain from '../../Assets/Logos/oui_au_train.svg';

import { CallToAction } from './CallToAction';
import { AutoCompleteAddress } from './AutoCompleteAddress';
import { DateTimePicker } from './DateTimePicker';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    [breakpoints.up('md')]: {
      marginLeft: 88,
      marginRight: 88,
    },
    [breakpoints.up('sm')]: {
      marginLeft: 60,
      marginRight: 60,
    },
    [breakpoints.only('xs')]: {
      marginLeft: 20,
      marginRight: 20,
    },
    background: palette.paper,
    border: `solid 3px ${palette.blue}`,
    marginBottom: 232,
    marginTop: 110,
    position: 'relative',
  },
  firstRow: {
    height: 54,
    marginTop: 12,
    backgroundImage: `repeating-linear-gradient(to right, ${palette.blue} 0 3px, transparent 3px 12px)`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 1px',
  },
  logo: {
    height: 160,
    position: 'absolute',
    right: -100,
    top: -100,
    width: 160,
    zIndex: 1,
  },
  margin: {
    marginLeft: '30px',
    marginRight: '30px',
  },
  secondRow: {
    height: 48,
    marginTop: 8,
    backgroundImage: `repeating-linear-gradient(to right, ${palette.blue} 0 3px, transparent 3px 12px)`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'calc(100% - 100px) 1px',
    backgroundPositionX: 'left',
    [breakpoints.down('sm')]: {
      backgroundSize: 'calc(100% - 70px) 1px',
    },
  },
  textField: {
    color: palette.blue,
    fontFamily: 'Libre Franklin',
    fontWeight: 400,
    marginRight: 12,
    '&:before': {
      borderBottom: 'none',
    },
  },
  textFieldContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  textFieldLeftBottom: {
    backgroundImage: `repeating-linear-gradient(to bottom, ${palette.blue} 0 3px, transparent 3px 12px)`,
    backgroundPosition: '0 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1px 100%',
  },
  textFieldLogo: {
    marginRight: 12,
  },
  thirdRow: {
    [breakpoints.down('sm')]: {
      width: 80,
    },
    height: 51,
    paddingLeft: 16,
    width: 200,
  },
  thirdRowContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  travellerCTAContainer: {
    display: 'flex',
  },
}));

type SelectedDestination = {
  latlng: { lat: number; lng: number };
  name: string;
};

type Props = WithWidth;

const SearchBar = ({ width }: Props) => {
  const styles = useStyles();

  const placeholder = {
    arrival: 'Porto-Vecchio, Corse, France',
    date: 'Maintenant',
    departure: 'Cours Vitton, Lyon, France',
    travellers: isWidthUp('md', width) ? '2 voyageurs' : '2',
  };

  const [numberOfVoyagers, setNumberOfVoyager] = useState(1);
  const [arrivalLatlng, setArrivalLatlng] = useState<SelectedDestination | undefined>();
  const [departureLatlng, setDepartureLatlng] = useState<SelectedDestination | undefined>();
  const [selectedDate, handleDateChange] = useState(new Date());

  const isButtonDisable = [numberOfVoyagers, arrivalLatlng, departureLatlng, selectedDate.valueOf()].some(
    (value) => !value
  );

  const handleSubmit = () => {
    console.log({
      numberOfVoyagers,
      arrivalLatlng,
      departureLatlng,
      selectedDate: selectedDate.valueOf(),
    });
  };

  const getSelectItems = (numberOfItem = 10) => {
    const renderLabel = (number: number) => {
      if (number === 1) {
        return isWidthUp('md', width) ? '1 voyageur' : 1;
      }

      return isWidthUp('md', width) ? `${number} voyageurs` : number;
    };

    const result = [
      <MenuItem className={styles.textField} key={1} value={1} onClick={() => setNumberOfVoyager(1)}>
        {renderLabel(1)}
      </MenuItem>,
    ];

    for (let i = 2; i <= numberOfItem; i++) {
      result.push(
        <MenuItem className={styles.textField} onClick={() => setNumberOfVoyager(i)} value={i} key={i}>
          {renderLabel(i)}
        </MenuItem>
      );
    }

    return result;
  };

  return (
    <div className={styles.container}>
      <Hidden smDown>
        <img src={OuiAuTrain} className={styles.logo} />
      </Hidden>
      <AutoCompleteAddress
        customClasses={`${styles.firstRow} ${styles.margin} ${styles.textField}`}
        logo={YellowFlag}
        placeholder={placeholder.departure}
        handleChanges={setDepartureLatlng}
      />
      <AutoCompleteAddress
        customClasses={`${styles.secondRow} ${styles.margin} ${styles.textField}`}
        logo={GreenFlag}
        placeholder={placeholder.arrival}
        handleChanges={setArrivalLatlng}
      />
      <div className={styles.thirdRowContainer}>
        <DateTimePicker logo={RedWatch} selectedDate={selectedDate} handleChange={handleDateChange} />
        <div className={styles.travellerCTAContainer}>
          <div className={`${styles.textFieldContainer} ${styles.textFieldLeftBottom} ${styles.thirdRow}`}>
            <img className={styles.textFieldLogo} src={MSN} />
            <Select value={numberOfVoyagers} className={styles.textField} defaultValue={1} fullWidth>
              {getSelectItems(9)}
            </Select>
          </div>
          <CallToAction isDisable={isButtonDisable} handleClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default withWidth()(SearchBar);
