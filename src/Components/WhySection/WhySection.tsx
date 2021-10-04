import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import HeadingText from './HeadingText';
import YellowBox from './YellowBox';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) => ({
  rootContainer: {
    display: 'flex',
    [breakpoints.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    [breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    marginTop: spacing(20),
    marginBottom: spacing(20),
  },
  boxContainer: {
    [breakpoints.up('lg')]: {
      alignItems: 'flex-end',
    },
    [breakpoints.down('md')]: {
      alignItems: 'center',
    },
    display: 'flex',
    flexDirection: 'column',
  },
}));

const WhySection = (): JSX.Element => {
  const styles = useStyles();
  const boxLabels = [
    'Ceux qui m’aiment prendront le train, moyen de transport le plus climato-compatible après le vélo et la marche à pied.',
    'Je marche seul.e (si je veux) mais je roule avec un maximum de passagers. Vive le co-voiturage !',
    'Je ralentis la cadence et me donne le temps de voyager. Moins loin c’est tout aussi bien.',
    'Je partage mes bons plans pour faire grandir la communauté des voyageur.ses du vrai monde d’après.',
  ];

  return (
    <div className={styles.rootContainer}>
      <HeadingText />
      <div className={styles.boxContainer}>
        {boxLabels.map((boxLabel, index) => {
          return <YellowBox label={boxLabel} index={index + 1} key={boxLabel} />;
        })}
      </div>
    </div>
  );
};

export default WhySection;
