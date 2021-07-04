import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Slide } from 'pure-react-carousel';

import TravelIcon from '../TravelIcon';

const useStyles = makeStyles(({ palette }) => ({
  cardContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  commonTravelMiniature: {
    borderRadius: 0,
    boxShadow: 'none',
    margin: 4,
    marginbottom: 18,
  },
  logo: {
    height: 32,
    marginLeft: 4,
    marginRight: 4,
    width: 32,
  },
  selectedTravelMiniature: {
    backgroundColor: palette.green,
    boxShadow: `3px 3px 1px ${palette.black}`,
    color: palette.paper,
    fontFamily: 'Libre Franklin',
    fontSize: 18,
    fontWeight: 'bold',
  },
  travelCategories: {
    fontFamily: 'Libre Franklin',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  travelMiniature: {
    backgroundColor: palette.paper,
    border: `1px solid ${palette.black}`,
    boxSizing: 'border-box',
    color: palette.black,
  },
}));

type Props = {
  travel: Travel;
  index: number;
  selectedTravel: Travel;
  handleClick: (travel: Travel, index: number) => void;
};

const TravelMiniature = ({ travel, index, selectedTravel, handleClick }: Props): JSX.Element => {
  const styles = useStyles();
  const customClasses = selectedTravel.id === travel.id ? styles.selectedTravelMiniature : styles.travelMiniature;
  const formattedCo2 = `${String(travel.total_gCO2 / 1000)
    .replace('.', ',')
    .slice(0, 4)} Kg co2e`;

  return (
    <Slide index={index}>
      <Card
        className={`${customClasses} ${styles.commonTravelMiniature}`}
        onClick={() => handleClick(travel, index)}
        key={travel.id}
      >
        <CardContent className={styles.cardContent}>
          <div>
            {travel.category.map((category: TravelCategory) => (
              <TravelIcon category={category} classes={styles.logo} key={category} />
            ))}
          </div>
          <div>
            <Typography className={styles.travelCategories}>{travel?.category?.join(' + ')}</Typography>
            <Typography className={styles.travelCategories}>{formattedCo2}</Typography>
          </div>
        </CardContent>
      </Card>
    </Slide>
  );
};

export default TravelMiniature;
