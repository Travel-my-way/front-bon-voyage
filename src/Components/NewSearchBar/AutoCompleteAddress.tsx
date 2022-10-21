import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import config from '../../config';

const useStyles = makeStyles(({ palette }) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    paddingLeft: 20,
    position: 'relative',
    zIndex: 2,
  },
  input: {
    position: 'relative',
    border: 0,
    color: palette.blue,
    paddingLeft: 0,
    zIndex: 5,
  },
  inputContainer: {
    width: '100%',
  },
  logo: {
    left: 0,
    position: 'absolute',
    top: 12,
  },
}));

type Suggestion = {
  suggestion: {
    value: string;
    latlng: {
      lat: number;
      lng: number;
    };
  };
};

type Props = {
  placeholder: string;
  handleChanges: ({
    name,
    latlng,
  }: {
    name: string;
    latlng: {
      lat: number;
      lng: number;
    };
  }) => void;
  logo?: string;
  customClasses?: string;
};

const PlaceInput = ({ placeholder, onChange }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    if (value.length < 3) return;
    fetch(`https://photon.komoot.io/api/?q=${value}&limit=6&layer=city&lang=fr`)
      .then((res) => res.json())
      .then((json) => {
        setSuggestions(json.features);
      });
  }, [value]);
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
      <ul>
        {suggestions.map((s) => (
          <li
            key={s.properties.osm_id}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              onChange({
                value: s.properties.name,
                latlng: { lat: s.geometry.coordinates[0], lng: s.geometry.coordinates[1] },
              })
            }
          >
            {s.properties.name} - {s.properties.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AutoCompleteAddress = ({ customClasses = '', handleChanges, logo, placeholder }: Props): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={classNames(customClasses, styles.container)}>
      {logo && <img src={logo} className={styles.logo} />}
      <div className={styles.inputContainer}>
        <PlaceInput
          onChange={(suggestion: Suggestion) => {
            handleChanges({
              name: suggestion.value,
              latlng: suggestion.latlng,
            });
          }}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export { AutoCompleteAddress };
