import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Flag from '../Assets/Logos/flag_bon_voyage.svg';
import { Palette } from '@material-ui/icons';

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
    backgroundColor: `${palette.black2}`,
    paddingLeft: 20,
    position: 'relative',
    zIndex: 2,
  },
  flexbox: {
    [breakpoints.up('sm')]: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      flexDirection: 'row',
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
    backgroundColor: `${palette.black2}`,
  },
}));

type Props = {
  logo?: string;
};

const NewFooter = ({ logo = Flag }: Props): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.topFooter} />
      <div className={styles.content}>
        <div className={styles.flexbox}>
          <div>
            <div style={{ color: 'white', fontSize: 30 }}>
              Bon voyage !
              <Link
                href={'https://www.instagram.com/bon.voyage.eco'}
                target="_blank"
                color="inherit"
                style={{ marginRight: 24 }}
              >
                Instagram
              </Link>
            </div>
            <ul className={styles.links}>
              <Link href="#" color="inherit" style={{ marginRight: 24 }}>
                © Bon Voyage
              </Link>
              <Link
                href={'https://blog.bonvoyage-eco.net/la-tribu'}
                target="_blank"
                color="inherit"
                style={{ marginRight: 24 }}
              >
                La tribu
              </Link>
              <Link href={'https://blog.bonvoyage-eco.net'} target="_blank" color="inherit" style={{ marginRight: 24 }}>
                Le Blog
              </Link>
              <Link
                href={'https://blog.bonvoyage-eco.net/le-forum'}
                target="_blank"
                color="inherit"
                style={{ marginRight: 24 }}
              >
                Le Forum
              </Link>
            </ul>
          </div>
          <div className={styles.citationContainer}>
            <p className={styles.citation}>L’important ce n’est pas la destination c’est le voyage.</p>
            <p className={styles.initialling}>Robert Louis Stevenson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
