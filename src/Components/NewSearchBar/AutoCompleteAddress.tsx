import React, { ChangeEvent, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

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
  typeAhead: {
    position: 'absolute',
    backgroundColor: "white",
    zIndex: 100,
    margin: 0,
    padding: 5,
    listStyle: "none",
  }
}));

type Suggestion = {
  value: string;
  latlng: {
    lat: number;
    lng: number;
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
  const styles = useStyles();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<any>()
  const [suggestions, setSuggestions] = useState<any[]>([]);
  useEffect(() => {
    if (selected) return;
    if (search.length < 3) return;
    let cancelled = false;
    fetch(`https://photon.komoot.io/api/?q=${search}&limit=6&layer=city&lang=fr`)
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) {
          setSuggestions(json.features);
        }
      });
    return () => {
      cancelled = true
    };
  }, [search, selected]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelected(undefined);
    setSearch(value);
  }
  const onSuggestionClicked = (suggestion: any) => {
    const selected = {
      value: suggestion.properties.name,
      latlng: {
        lat: suggestion.geometry.coordinates[0],
        lng: suggestion.geometry.coordinates[1]
      }
    }
    setSearch(selected.value);
    setSelected(selected);
    onChange(selected);
  }
  return (
    <div>
      <input value={search} onChange={onInputChange} placeholder={placeholder}/>
      <ul hidden={selected} className={styles.typeAhead}>
        {suggestions.map((s) => (
          <li
            key={s.properties.osm_id}
            style={{ cursor: 'pointer' }}
            onClick={() => onSuggestionClicked(s)}
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
      {logo && <img src={logo} className={styles.logo}/>}
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
