import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { makeStyles } from '@material-ui/core/styles';

import config from '../../config';

const useStyles = makeStyles(({ palette }) => ({
  container: {
    position: 'relative',
    zIndex: 2,
    paddingLeft: 20,
  },
  input: {
    background: palette.paper,
    color: palette.blue,
    paddingLeft: 0,
    border: 0,
  },
  logo: {
    position: 'absolute',
    left: 0,
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
  logo: string;
  customClasses: string;
};

const AutoCompleteAddress = ({ customClasses, handleChanges, logo, placeholder }: Props): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={`${customClasses} ${styles.container}`}>
      <img src={logo} className={styles.logo} />
      <AlgoliaPlaces
        onChange={({ suggestion }: Suggestion) => {
          handleChanges({
            name: suggestion.value,
            latlng: suggestion.latlng,
          });
        }}
        placeholder={placeholder}
        className={styles.input}
        options={{
          appId: config.appId,
          apiKey: config.apiKey,
          language: 'fr',
          // Other options from https://community.algolia.com/places/documentation.html#options
        }}
      />
    </div>
  );
};

export { AutoCompleteAddress };
