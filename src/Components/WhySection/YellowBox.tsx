import React from 'react';
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, palette, spacing }: Theme) => ({
  yellowBox: {
    [breakpoints.up('lg')]: {
      '&:nth-last-of-type(even)': {
        transform: 'rotate(-2deg)',
      },
      '&:nth-last-of-type(odd)': {
        transform: 'rotate(2deg)',
      },
      width: '70%',
    },
    [breakpoints.down('md')]: {
      width: '80%',
    },
    alignContent: 'center',
    backgroundImage: `repeating-linear-gradient(0deg, ${palette.yellow}, ${palette.yellow} 12px, transparent 12px, transparent 25px, ${palette.yellow} 25px), repeating-linear-gradient(90deg, ${palette.yellow}, ${palette.yellow} 12px, transparent 12px, transparent 25px, ${palette.yellow} 25px), repeating-linear-gradient(180deg, ${palette.yellow}, ${palette.yellow} 12px, transparent 12px, transparent 25px, ${palette.yellow} 25px), repeating-linear-gradient(270deg, ${palette.yellow}, ${palette.yellow} 12px, transparent 12px, transparent 25px, ${palette.yellow} 25px)`,
    backgroundPosition: '0 0, 0 0, 100% 0, 0 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '3px 100%, 100% 3px, 3px 100% , 100% 3px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: spacing(7),
    padding: spacing(3),
    position: 'relative',
  },
  text: {
    color: palette.blue,
    fontFamily: 'Libre Franklin',
    fontStyle: 'italic',
    fontWeight: 400,
  },
  numberCircle: {
    alignItems: 'center',
    backgroundColor: palette.blue,
    border: `4px solid ${palette.green}`,
    borderRadius: '100%',
    color: palette.yellow,
    display: 'flex',
    fontFamily: 'Libre Franklin',
    fontSize: spacing(3),
    fontWeight: 900,
    height: spacing(5),
    justifyContent: 'center',
    position: 'absolute',
    width: spacing(5),
  },
  even: {
    left: -25,
    top: -25,
  },
  odd: {
    right: -25,
    top: -25,
  },
}));

interface YellowBoxProps {
  index: number;
  label: string;
}

const YellowBox = ({ index, label }: YellowBoxProps): JSX.Element => {
  const styles = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const isIndexEvenNumber = index % 2;

  const numberCirclePlacement = matches && isIndexEvenNumber ? styles.even : styles.odd;

  return (
    <div className={styles.yellowBox}>
      <div className={`${styles.numberCircle} ${numberCirclePlacement}`}>{index}</div>
      <Typography className={styles.text}>{label}</Typography>
    </div>
  );
};

export default YellowBox;
