import React, { Fragment } from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

import NoPlaneSticker from '../Assets/Logos/no_plain_no_pain.svg';
import KeepCoolSticker from '../Assets/Logos/keep_cool.svg';
import ByeByePlaneSticker from '../Assets/Logos/bye_bye_plane.svg';
import BonVoyage from '../Assets/Logos/bon_voyage.svg';

const useStyles = makeStyles(({ breakpoints, palette }: Theme) => ({
  bonVoyageSticker: {
    display: 'flex',
    justifyContent: 'center',
  },
  bonVoyageTM: {
    fontStyle: 'italic',
    fontWeight: 600,
  },
  boxBackground: {
    backgroundColor: palette.blue,
    border: `solid 8px ${palette.blue}`,
    height: 'fit-content',
    position: 'relative',
  },
  boxBackground1: {
    left: '40px',
    width: '55%',
  },
  boxBackground2: {
    marginTop: 165,
    right: '40px',
    width: '45%',
  },
  boxContent: {
    backgroundColor: palette.paper,
    height: 'fit-content',
    padding: 65,
    position: 'relative',
    zIndex: 1,
  },
  byeByePlaneSticker: {
    height: 50,
    left: -30,
    position: 'relative',
    top: -40.5,
    width: 150,
    zIndex: 1,
  },
  container: {
    display: 'flex',
    position: 'relative',
  },
  keepCoolSticker: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '77px',
  },
  noPlaneSticker: {
    [breakpoints.down('md')]: {
      height: 125,
      position: 'relative',
      width: 125,
      zIndex: 2,
    },
    [breakpoints.up('lg')]: {
      bottom: -72.5,
      height: 145,
      left: -72.5,
      position: 'absolute',
      width: 145,
    },
  },
  subtitle: {
    [breakpoints.down('md')]: {
      textAlign: 'center',
      '&::after': {
        borderBottom: `solid 4px ${palette.yellow}`,
        content: "''",
        width: '25px',
        display: 'block',
        marginBottom: '30px !important',
        marginTop: '20px !important',
        margin: 'auto',
      },
    },
    color: palette.black,
    fontFamily: 'Monument Extended',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '25px',
    textTransform: 'uppercase',
  },
  subtitleDash: {
    backgroundColor: palette.yellow,
    display: 'inline-block',
    height: '4px',
    marginRight: '15px',
    width: '25px',
  },
  SMContainer: {
    border: `solid 8px ${palette.blue}`,
  },
  SMstickers: {
    left: 'calc(50% - 132.5px)',
    position: 'absolute',
    top: -62.5,
  },
  text: {
    [breakpoints.down('md')]: {
      textAlign: 'center',
    },
    fontFamily: 'Libre Franklin',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '27px',
  },
  title: {
    [breakpoints.between('lg', 'xl')]: {
      '&::after': {
        width: '50px',
      },
    },
    [breakpoints.down('md')]: {
      '&::after': {
        margin: 'auto',
        width: '75px',
      },
      textAlign: 'center',
    },
    '&::after': {
      borderBottom: `solid 8px ${palette.yellow}`,
      content: "''",
      display: 'block',
      marginBottom: '50px !important',
      marginTop: '35px !important',
    },
    color: palette.black,
    fontSize: '45px',
    fontStyle: 'normal',
    fontWeight: 900,
    lineHeight: '100%',
    marginBottom: '5px',
    marginTop: '5px',
    textAlign: 'left',
  },
}));

const BlueBoxes = (): JSX.Element => {
  const styles = useStyles();

  return (
    <Fragment>
      <Hidden lgUp>
        <div className={styles.SMContainer}>
          <div className={styles.boxContent}>
            <div className={styles.SMstickers}>
              <img src={NoPlaneSticker} className={styles.noPlaneSticker} />
              <img src={ByeByePlaneSticker} className={styles.byeByePlaneSticker} />
            </div>
            <h3 className={styles.title}>Pourquoi Bon voyage ?</h3>
            <p className={styles.text}>
              Allons-en au fait. Le jus de tomates à 10 000 mètres d’altitude, ce n’est plus possible. Si l’on veut
              sauver la planète, il va falloir renoncer à l’avion.
            </p>
            <p className={styles.text}>
              Mais comment rendre une semaine rando-vélo en Mayenne aussi sexy qu’un EVJF à Djerba ? Comment vous
              convaincre de rompre avec l’A320 et de vous amouracher du TER ?
            </p>
            <p className={styles.text}>
              C’est tout l’objet de <span className={styles.bonVoyageTM}>Bon voyage</span>.
            </p>
            <div className={styles.bonVoyageSticker}>
              <img src={BonVoyage} />
            </div>
            <h4 className={styles.subtitle}>Détourner l’A320</h4>
            <p className={styles.text}>
              Les Suédois ont inventé le Flygskam : la honte de prendre l’avion. Nous on pencherait plutôt pour No plane
              no pain.
            </p>
            <p className={styles.text}>
              Notre objectif ? Vous donner les raisons et les alternatives pour ne plus prendre l’avion à tort et à
              travers et vous en trouver mieux.
            </p>
            <h4 className={styles.subtitle}>Voyager léger</h4>
            <p className={styles.text}>
              Avec Bon voyage, vous découvrez les chemins de traverse, le slow tourisme, le voyage dans le voyage et
              entrerez dans la communauté des voyageurs bas carbone.
            </p>
            <p className={styles.text}>
              Se déplacer aussi léger qu’un colibri sur un pétale de bégonia, forcément vous allez adorer !
            </p>
            <div className={styles.keepCoolSticker}>
              <img src={KeepCoolSticker} />
            </div>
          </div>
        </div>
      </Hidden>
      <Hidden mdDown>
        <div className={styles.container}>
          <div className={`${styles.boxBackground1} ${styles.boxBackground}`}>
            <div className={styles.boxContent}>
              <h3 className={styles.title}>Pourquoi Bon voyage ?</h3>
              <p className={styles.text}>
                Allons-en au fait. Le jus de tomates à 10 000 mètres d’altitude, ce n’est plus possible. Si l’on veut
                sauver la planète, il va falloir renoncer à l’avion.
              </p>
              <p className={styles.text}>
                Mais comment rendre une semaine rando-vélo en Mayenne aussi sexy qu’un EVJF à Djerba ? Comment vous
                convaincre de rompre avec l’A320 et de vous amouracher du TER ?
              </p>
              <p className={styles.text}>
                C’est tout l’objet de <span className={styles.bonVoyageTM}>Bon voyage</span>.
              </p>
              <img src={NoPlaneSticker} className={styles.noPlaneSticker} />
            </div>
          </div>
          <div className={`${styles.boxBackground2} ${styles.boxBackground}`}>
            <div className={styles.boxContent}>
              <h4 className={styles.subtitle}>
                <span className={styles.subtitleDash} />
                Détourner l’A320
              </h4>
              <p className={styles.text}>
                Les Suédois ont inventé le Flygskam : la honte de prendre l’avion. Nous on pencherait plutôt pour No
                plane no pain.
              </p>
              <p className={styles.text}>
                Notre objectif ? Vous donner les raisons et les alternatives pour ne plus prendre l’avion à tort et à
                travers et vous en trouver mieux.
              </p>
              <h4 className={styles.subtitle}>
                <span className={styles.subtitleDash} />
                Voyager léger
              </h4>
              <p className={styles.text}>
                Avec Bon voyage, vous découvrez les chemins de traverse, le slow tourisme, le voyage dans le voyage et
                entrerez dans la communauté des voyageurs bas carbone.
              </p>
              <p className={styles.text}>
                Se déplacer aussi léger qu’un colibri sur un pétale de bégonia, forcément vous allez adorer !
              </p>
              <div className={styles.keepCoolSticker}>
                <img src={KeepCoolSticker} />
              </div>
            </div>
          </div>
        </div>
      </Hidden>
    </Fragment>
  );
};

export default BlueBoxes;
