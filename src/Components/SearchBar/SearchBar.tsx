import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden, isWidthUp, withWidth, Select, MenuItem, WithWidth } from '@material-ui/core';
import classNames from 'classnames';

import YellowFlag from '../../Assets/Icons/yellowFlag.svg';
import GreenFlag from '../../Assets/Icons/greenFlag.svg';
import RedWatch from '../../Assets/Icons/redWatch.svg';
import MSN from '../../Assets/Icons/MSN.svg';
import OuiAuTrain from '../../Assets/Logos/oui_au_train.svg';
import config from '../../config';

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
    border: `solid 3px ${palette.blue}`,
  },
  firstRow: {
    backgroundSize: '100% 1px',
    height: 54,
    marginTop: 12,
    zIndex: 3,
  },
  fullContainer: {
    background: palette.paper,
    margin: 'auto',
    marginTop: '110px !important',
    maxWidth: 860,
    position: 'relative',
  },
  inlineBorderPosition: {
    backgroundPosition: '0 16px',
  },
  inlineContainer: {
    alignItems: 'center',
    borderWidth: 1,
    display: 'flex',
    flexGrow: 2,
    height: 64,
    justifyContent: 'space-between',
    margin: 'auto',
    marginBottom: 44,
    maxWidth: 1040,
    paddingLeft: 20,
  },
  inlineleftBorder: {
    backgroundPosition: '0 16px !important',
  },
  leftBorder: {
    backgroundImage: `repeating-linear-gradient(to bottom, ${palette.blue} 0 4px, transparent 4px 12px)`,
    backgroundPosition: '0 11px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1px 29px',
    height: '100%',
    paddingLeft: 16,
  },
  logo: {
    height: 160,
    position: 'absolute',
    right: -100,
    top: -100,
    width: 160,
    zIndex: 4,
  },
  margin: {
    marginLeft: 30,
    marginRight: 30,
  },
  row: {
    backgroundImage: `repeating-linear-gradient(to right, ${palette.blue} 0 3px, transparent 3px 12px)`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
  },
  secondRow: {
    [breakpoints.down('sm')]: {
      backgroundSize: 'calc(100% - 70px) 1px',
    },
    backgroundPositionX: 'left',
    backgroundSize: 'calc(100% - 100px) 1px',
    height: 48,
    marginTop: 8,
  },
  textField: {
    '&:before': {
      borderBottom: 'none',
    },
    color: palette.blue,
    fontFamily: 'Libre Franklin',
    fontWeight: 400,
    marginRight: 12,
    position: 'relative',
  },
  textFieldContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  textFieldLogo: {
    marginRight: 12,
  },
  thirdRow: {
    [breakpoints.down('sm')]: {
      width: 80,
    },
    height: 51,
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
  latlng: {
    lat: number;
    lng: number;
  };
  name: string;
};

type Props = {
  customStylesWrapper?: string;
  withoutLogo?: boolean;
  inlineDisplay?: boolean;
} & WithWidth;

const SearchBar = ({ handleSearchBarValidation, customStylesWrapper, inlineDisplay, width, withoutLogo }: Props) => {
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
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());

  const isButtonDisable = [numberOfVoyagers, arrivalLatlng, departureLatlng, selectedDate?.valueOf()].some(
    (value) => !value
  );

  const handleSubmit = () => {
    handleSearchBarValidation({
      from: departureLatlng,
      to: arrivalLatlng,
      selectedDate: selectedDate,
    });
  };

  const renderDropdownLabel = (number: number) => {
    if (number === 1) {
      return isWidthUp('md', width) ? '1 voyageur' : 1;
    }

    return isWidthUp('md', width) ? `${number} voyageurs` : number;
  };

  const getSelectItems = (numberOfItem = 10) => {
    const result = [];

    for (let i = 1; i <= numberOfItem; i++) {
      result.push(
        <MenuItem className={styles.textField} onClick={() => setNumberOfVoyager(i)} value={i} key={i}>
          {renderDropdownLabel(i)}
        </MenuItem>
      );
    }

    return result;
  };

  if (inlineDisplay && !['xs', 'md'].includes(width)) {
    return (
      <div className={classNames(styles.inlineContainer, styles.container)}>
        <AutoCompleteAddress handleChanges={setDepartureLatlng} logo={GreenFlag} placeholder={placeholder.departure} />
        <AutoCompleteAddress
          customClasses={classNames(styles.leftBorder, styles.inlineleftBorder, styles.inlineBorderPosition)}
          handleChanges={setArrivalLatlng}
          placeholder={placeholder.arrival}
        />
        <DateTimePicker
          customClasses={classNames(styles.leftBorder, styles.inlineleftBorder, styles.inlineBorderPosition)}
          handleChange={handleDateChange}
          selectedDate={selectedDate}
        />
        <div
          className={classNames(
            styles.inlineBorderPosition,
            styles.leftBorder,
            styles.inlineleftBorder,
            styles.textFieldContainer
          )}
        >
          <Select value={numberOfVoyagers} className={styles.textField} defaultValue={1} fullWidth>
            {getSelectItems(config.maxTravelers)}
          </Select>
        </div>
        <CallToAction isDisable={isButtonDisable} handleClick={handleSubmit} />
      </div>
    );
  }

  return (
    <div
      className={
        customStylesWrapper ||
        classNames({
          [styles.fullContainer]: true,
          [styles.container]: true,
        })
      }
    >
      <Hidden smDown>{!withoutLogo && <img src={OuiAuTrain} className={styles.logo} />}</Hidden>
      <AutoCompleteAddress
        customClasses={classNames(styles.firstRow, styles.margin, styles.textField, styles.row)}
        handleChanges={setDepartureLatlng}
        logo={YellowFlag}
        placeholder={placeholder.departure}
      />
      <AutoCompleteAddress
        customClasses={classNames(styles.secondRow, styles.margin, styles.textField, styles.row)}
        handleChanges={setArrivalLatlng}
        logo={GreenFlag}
        placeholder={placeholder.arrival}
      />
      <div className={styles.thirdRowContainer}>
        <DateTimePicker handleChange={handleDateChange} logo={RedWatch} selectedDate={selectedDate} />
        <div className={styles.travellerCTAContainer}>
          <div className={classNames(styles.textFieldContainer, styles.leftBorder, styles.thirdRow)}>
            <img className={styles.textFieldLogo} src={MSN} />
            <Select value={numberOfVoyagers} className={styles.textField} defaultValue={1} fullWidth>
              {getSelectItems(config.maxTravelers)}
            </Select>
          </div>
          <CallToAction isDisable={isButtonDisable} handleClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default withWidth()(SearchBar);
