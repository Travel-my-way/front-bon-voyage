import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
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

    background: palette.paper,
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

const AutoCompleteAddress = ({ customClasses = '', handleChanges, logo, placeholder }: Props): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={classNames(customClasses, styles.container)}>
      {logo && <img src={logo} className={styles.logo} />}
      <div className={styles.inputContainer}>
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
    </div>
  );
};

export { AutoCompleteAddress };
