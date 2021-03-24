import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Flag from '../Assets/Logos/flag_bon_voyage.svg';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  citation: {
    [breakpoints.up('sm')]: {
      textAlign: 'end',
    },
    color: palette.yellow,
    fontFamily: 'Libre Franklin',
    fontSize: 35,
    fontStyle: 'italic',
    fontWeight: 900,
    lineHeight: '120%',
    margin: 0,
  },
  citationContainer: {
    [breakpoints.up('md')]: {
      paddingRight: 200,
    },
    [breakpoints.up('sm')]: {
      paddingRight: 120,
    },
    [breakpoints.only('xs')]: {
      paddingRight: 20,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    maxWidth: 400,
  },
  container: {
    marginTop: 100,
    overflow: 'hidden',
  },
  content: {
    [breakpoints.up('md')]: {
      paddingLeft: 200,
    },
    [breakpoints.up('sm')]: {
      paddingLeft: 120,
    },
    [breakpoints.only('xs')]: {
      paddingLeft: 20,
    },
    '&::after': {
      color: palette.paper,
      content: "'2020 — ©'",
      display: 'block',
      fontFamily: 'Libre Franklin',
      fontSize: 18,
      paddingBottom: 100,
      paddingTop: 15,
    },
    paddingLeft: 20,
    position: 'relative',
    zIndex: 2,
  },
  flexbox: {
    [breakpoints.up('sm')]: {
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    borderBottom: `1px dashed ${palette.paper}`,
    flexDirection: 'column',
    paddingBottom: 88,
  },
  initialling: {
    color: palette.paper,
    fontFamily: 'Clattering',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '27px',
    textAlign: 'right',
  },
  links: {
    [breakpoints.up('sm')]: {
      margin: '0px 96px 0px 96px',
    },
    color: palette.paper,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Libre Franklin',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '200%',
    margin: '96px 0px 96px 0px',
    padding: 0,
  },
  logo: {
    height: 75,
    width: 225,
  },
  topFooter: {
    height: 150,
    left: '-5%',
    position: 'relative',
    top: 50,
    transform: 'rotate(-2deg)',
    width: '110%',
    zIndex: 1,
  },
}));

type Props = {
  backgroundColor?: string;
  logo?: string;
};

const Footer = ({ backgroundColor = 'blue', logo = Flag }: Props): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.topFooter} style={{ backgroundColor }} />
      <div style={{ backgroundColor }} className={styles.content}>
        <div className={styles.flexbox}>
          <img src={logo} className={styles.logo} />
          <ul className={styles.links}>
            <Link href={'www.google.com'} color="inherit">
              À propos
            </Link>
            <Link href={'www.google.com'} color="inherit">
              Blog
            </Link>
            <Link href={'www.google.com'} color="inherit">
              Forum
            </Link>
            <Link href={'www.google.com'} color="inherit">
              Instagram
            </Link>
          </ul>
          <div className={styles.citationContainer}>
            <p className={styles.citation}>L’important ce n’est pas la destination c’est le voyage.</p>
            <p className={styles.initialling}>Robert Louis Stevenson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
