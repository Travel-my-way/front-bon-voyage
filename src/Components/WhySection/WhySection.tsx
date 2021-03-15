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
    'Je marche seul (si je veux) mais je roule toujours à plusieurs.',
    'Les bons plans c’est pas comme les coins à champignons. Ça se partage !',
    'No plane, no pain. Parce que des vacances réussies sans prendre l’avion, c’est possible.',
    'Ceux qui m’aiment prendront le train. Le plus écolo, c’est incontestable !',
  ];

  return (
    <div className={styles.rootContainer}>
      <HeadingText />
      <div className={styles.boxContainer}>
        {boxLabels.map((boxLabel, index) => {
          return <YellowBox label={boxLabel} index={index + 1} />;
        })}
      </div>
    </div>
  );
};

export default WhySection;
