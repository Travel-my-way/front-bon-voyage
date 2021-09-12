import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Slide } from 'pure-react-carousel';
import classnames from 'classnames';

import TravelIcon from '../TravelIcon';
import { formatCo2 } from '../../utils';

const useStyles = makeStyles(({ palette }) => ({
  cardContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 112,
    justifyContent: 'center',
  },
  commonTravelMiniature: {
    borderRadius: 0,
    boxShadow: 'none',
    margin: 4,
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
    fontSize: 18,
    fontWeight: 700,
  },
  text: {
    fontFamily: 'Libre Franklin',
    textAlign: 'center',
  },
  travelMiniature: {
    backgroundColor: palette.paper,
    border: `1px solid ${palette.black}`,
    boxSizing: 'border-box',
    color: palette.black,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  selectedCo2Emission: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 'bold',
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
  const isTravelSelected = selectedTravel.id === travel.id;
  const customClasses = isTravelSelected ? styles.selectedTravelMiniature : styles.travelMiniature;
  const formattedCo2 = formatCo2(travel.total_gCO2);

  return (
    <Slide index={index}>
      <Card
        className={classnames(customClasses, styles.commonTravelMiniature, styles.text)}
        onClick={() => handleClick(travel, index)}
        key={travel.id}
      >
        <div className={styles.cardContent}>
          <div>
            {travel.category.map((category: TravelCategory) => (
              <TravelIcon category={category} classes={styles.logo} key={category} />
            ))}
          </div>
          <div>
            <div>{travel?.category?.join(' + ')}</div>
            <div className={classnames({ [styles.selectedCo2Emission]: isTravelSelected })}>{formattedCo2}</div>
          </div>
        </div>
      </Card>
    </Slide>
  );
};

export default TravelMiniature;
