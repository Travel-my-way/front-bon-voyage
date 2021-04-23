import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Slide } from 'pure-react-carousel';

import SubwayIcon from '../../Assets/Icons/subway.svg';
import TrainIcon from '../../Assets/Icons/train.svg';
import CarIcon from '../../Assets/Icons/car.svg';

const useStyles = makeStyles(({ palette }) => ({
  cardContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    marginLeft: 4,
    marginRight: 4,
  },
  travelCategories: {
    fontFamily: 'Libre Franklin',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  selectedTravelMiniature: {
    backgroundColor: palette.green,
    boxShadow: `3px 3px 1px ${palette.black}`,
    color: palette.paper,
    fontFamily: 'Libre Franklin',
    fontSize: 18,
    fontWeight: 'bold',
  },
  travelMiniature: {
    backgroundColor: palette.paper,
    border: `1px solid ${palette.black}`,
    boxSizing: 'border-box',
    color: palette.black,
  },
  commonTravelMiniature: {
    borderRadius: 0,
    maxHeight: 115,
    maxWidth: 200,
    margin: 4,
    marginbottom: 18,
  },
}));

const mappedIconByType: Record<TravelCategory, string> = {
  Carpooling: CarIcon,
  Car: CarIcon,
  Train: TrainIcon,
};

type Props = any;

const TravelMiniature = ({ travel, index, selectedTravel, handleCardClick }: Props) => {
  const styles = useStyles();
  const customClasses = selectedTravel.id === travel.id ? styles.selectedTravelMiniature : styles.travelMiniature;

  return (
    <Slide index={index}>
      <Card
        className={`${customClasses} ${styles.commonTravelMiniature}`}
        onClick={() => handleCardClick(travel, index)}
        key={travel.id}
      >
        <CardContent className={styles.cardContent}>
          <div>
            {travel.category.map((category: TravelCategory) => (
              <img key={category} className={styles.logo} src={mappedIconByType[category]} />
            ))}
          </div>
          <div>
            <Typography className={styles.travelCategories}>{travel?.category?.join(' + ')}</Typography>
            <Typography className={styles.travelCategories}>{travel?.total_gCO2} Kg co2e</Typography>
          </div>
        </CardContent>
      </Card>
    </Slide>
  );
};

export default TravelMiniature;
