import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  container: {
    display: 'relative',
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
    left: 32,
    marginTop: 12,
  },
}));

type Props = {
  placeholder: string;
  handleChanges: Function;
  logo: string;
  customClasses: string;
};

type Suggestion = {
  suggestion: {
    value: string;
    latlng: {
      lat: number;
      lng: number;
    };
  };
};

const AutoCompleteAddress = ({ handleChanges, placeholder, customClasses, logo }: Props): JSX.Element => {
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
          appId: 'plIMLBK6SAIV',
          apiKey: '3eafdf4bffe092bb1a6141c4eda52f9f',
          language: 'fr',
          // Other options from https://community.algolia.com/places/documentation.html#options
        }}
      />
    </div>
  );
};

export { AutoCompleteAddress };
