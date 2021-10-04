import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import TravelIcon from '../TravelIcon';
import { convertToPercent } from '../../utils';

import OuiAuTrainBlue from '../../Assets/Logos/oui_au_train_blue.svg';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    background: palette.paper,
    border: `solid 10px ${palette.yellow}`,
    margin: '0 auto',
    marginTop: 160,
    maxWidth: 1030,
    padding: '96px 80px',
    position: 'relative',
  },
  comparisonContainer: {
    marginTop: 18,
  },
  explanation: {
    fontFamily: 'Libre Franklin',
    fontSize: 18,
    lineHeight: '27px',
    maxWidth: 600,
  },
  inline: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kgco2: {
    fontStyle: 'italic',
    fontSize: 18,
    fontFamily: 'Libre Franklin',
  },
  logo: {
    [breakpoints.down('md')]: {
      display: 'none',
    },
    height: 160,
    position: 'absolute',
    right: -80,
    top: -80,
    width: 160,
  },
  modeComparisonName: {
    marginRight: 16,
  },
  modeComparison: {
    height: 16,
  },
  modeComparisonExplanation: {
    height: 24,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineText: {
    whiteSpace: 'nowrap',
  },
  title: {
    fontFamily: 'Monument Extended',
    color: palette.blue,
    fontSize: 45,
    '&::after': {
      borderBottom: `solid 8px ${palette.yellow}`,
      content: "''",
      display: 'block',
      marginBottom: 40,
      marginTop: '20px !important',
      width: '50px',
    },
  },
}));

const modeOfTransportations = [
  { type: 'Train', value: 2.3, color: '#0AAA93', displayText: 'Train' },
  { type: 'Bus', value: 36.3, color: '#002CC7', displayText: 'Autocar longue distance' },
  { type: 'Carpooling', value: 91.2, color: '#FED13F', displayText: 'Voiture en covoiturage' },
  { type: 'Plane', value: 97, color: 'rgba(252, 78, 64, 0.5)', displayText: 'Avion' },
  { type: 'Car', value: 199.9, color: '#FC4E40', displayText: 'Voiture individuelle' },
];

const MAX_VALUE = Math.max(...modeOfTransportations.map(({ value }) => value));

const Co2Comparison = (): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <img src={OuiAuTrainBlue} className={styles.logo} />
      <h3 className={styles.title}>Billets pour le climat</h3>
      <p className={styles.explanation}>
        Parce que tous les chemins ne mènent pas au paradis climatique, notre comparateur permet de se rendre compte des
        émissions de chaque moyen de transport. Tenez, prenons un Paris - Barcelone, soit un trajet de 1000 km
      </p>
      {modeOfTransportations.map((mode) => {
        const width = convertToPercent(mode.value, MAX_VALUE);

        return (
          <div key={mode.type} className={styles.comparisonContainer} style={{ width: `${width}%` }}>
            <div className={styles.modeComparisonExplanation}>
              <div className={styles.inline}>
                <TravelIcon category={mode.type as TravelCategory} colorIcon={mode.color} />
                <p className={classNames(styles.inlineText, styles.modeComparisonName)}>{mode.displayText}</p>
              </div>
              <p className={styles.inlineText}>
                {mode.value}
                <span className={styles.kgco2}> Kg co2e</span>
              </p>
            </div>
            <div style={{ background: mode.color }} className={styles.modeComparison} />
          </div>
        );
      })}
    </div>
  );
};

export default Co2Comparison;
