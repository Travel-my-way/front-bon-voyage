import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import NoPlaneSticker from '../Assets/Logos/no_plain_no_pain.svg'
import KeepCoolSticker from '../Assets/Logos/keep_cool.svg'

const useStyles = createStyles(
  makeStyles(({ palette }: Theme) => ({
    boxContent: {
      backgroundColor: palette.paper,
      height: 'fit-content',
      padding: 65,
      position: 'relative',
      zIndex: 1,
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
    boxBackground: {
      backgroundColor: palette.blue,
      border: `solid 8px ${palette.blue}`,
      height: 'fit-content',
      position: 'relative',
    },
    bonVoyageTM: {
      fontWeight: 600,
      fontStyle: 'italic',
    },
    container: {
      display: 'flex',
      width: '110%',
      position: 'relative',
      left: '-5%',
    },
    text: {
      fontFamily: 'Libre Franklin',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '27px',
    },
    title: {
      color: palette.black,
      fontSize: '45px',
      fontStyle: 'normal',
      fontWeight: 900,
      lineHeight: '100%',
      marginBottom: '5px',
      marginTop: '5px',
      textAlign: 'left',
      '&::after': {
        content: "''",
        display: 'block',
        width: '50px',
        borderBottom: `solid 8px ${palette.yellow}`,
        marginTop: '35px',
        marginBottom: '50px',
      },
    },
    secondaryTitle: {
      fontFamily: 'Monument Extended',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '20px',
      lineHeight: '25px',
      textTransform: 'uppercase',
      color: palette.black,
    },
    sectionDash: {
      width: '25px',
      height: '4px',
      display: 'inline-block',
      backgroundColor: palette.yellow,
      marginRight: '15px',
    },
    noPlaneSticker: {
      position: 'absolute',
      bottom: -(145 / 2),
      left: -(145 / 2),
      width: 145,
      height: 145,
    },
    keepCoolSticker: {
      justifyContent: 'center',
      display: 'flex',
      marginTop: '77px',
    },
  }))
)

const BlueBoxes = () => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <div className={`${styles.boxBackground1} ${styles.boxBackground}`}>
        <div className={styles.boxContent}>
          <h3 className={styles.title}>Pourquoi Bon voyage ?</h3>
          <p className={styles.text}>
            Allons-en au fait. Le jus de tomates à 10 000 mètres d’altitude, ce n’est plus possible. Si l’on veut sauver
            la planète, il va falloir renoncer à l’avion.
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
          <h4 className={styles.secondaryTitle}>
            <span className={styles.sectionDash} />
            Détourner l’A320
          </h4>
          <p className={styles.text}>
            Les Suédois ont inventé le Flygskam : la honte de prendre l’avion. Nous on pencherait plutôt pour No plane
            no pain.
          </p>
          <p className={styles.text}>
            Notre objectif ? Vous donner les raisons et les alternatives pour ne plus prendre l’avion à tort et à
            travers et vous en trouver mieux.
          </p>
          <h4 className={styles.secondaryTitle}>
            <span className={styles.sectionDash} />
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
  )
}

export default BlueBoxes
