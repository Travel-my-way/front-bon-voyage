import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Zoom } from '@material-ui/core';

import sticker from '../../Assets/Logos/le_moins_polluant.svg';
import TravelIcon from '../TravelIcons';

const HEIGHT_BAR = 12;

const useStyles = makeStyles(({ palette }) => ({
  bar: {
    backgroundColor: palette.green,
  },
  container: {
    border: ` 1px solid ${palette.green}`,
    margin: 'auto',
    maxWidth: 920,
    padding: 30,
  },
  graphContainer: {
    marginTop: 32,
  },
  graphIcons: {
    position: 'relative',
    top: -HEIGHT_BAR - 4,
  },
  graphLine: {
    backgroundColor: palette.black,
    borderRadius: 0,
    height: HEIGHT_BAR,
    position: 'relative',
    top: HEIGHT_BAR,
    width: '100%',
    zIndex: 2,
  },
  graphOverlay: {
    display: 'flex',
    position: 'relative',
    zIndex: 3,
    height: HEIGHT_BAR,
    width: '100%',
  },
  graphOccurence: {
    backgroundColor: 'white',
    position: 'absolute',
    width: 2,
    height: HEIGHT_BAR,
  },
  icons: {
    position: 'relative',
    display: 'flex',
    top: -40,
  },
  icon: {
    color: palette.black,
    width: 32,
    height: 32,
  },
}));

type Props = {
  sortedTravels: Travel[];
  selectedTravel: Travel;
};

const convertToPercent = (numerator: number, denominateur: number) => {
  return Math.round((numerator * 100) / denominateur);
};

const TravelsComparison = ({ sortedTravels, selectedTravel }: Props): JSX.Element | null => {
  const styles = useStyles();
  const [biggestPolluter, setBiggestPolluter] = useState<Travel>();

  useEffect(() => {
    setBiggestPolluter(sortedTravels[sortedTravels.length - 1]);
  }, [sortedTravels]);

  if (!selectedTravel || !biggestPolluter) {
    return null;
  }

  const renderSegments = () => {
    const enhancedTravels = sortedTravels.map((travel: Travel) => {
      return {
        ...travel,
        graphPositionInPercent: convertToPercent(travel.total_gCO2, biggestPolluter.total_gCO2),
      };
    });

    return (
      <div>
        {enhancedTravels.map((travel) => {
          const rightPosition = -(14 + (travel.category.length - 1) * 16);

          const Icons = travel.category.map((category) => {
            return <TravelIcon classes={styles.icon} key={travel.id} category={category} />;
          });

          return (
            <div
              key={travel.id}
              className={styles.graphOccurence}
              style={{ left: `${travel.graphPositionInPercent}%` }}
            >
              <Zoom in={travel.id === selectedTravel.id}>
                <span className={styles.icons} style={{ left: rightPosition }}>
                  {Icons}
                </span>
              </Zoom>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <img src={sticker} />
      <LinearProgress
        classes={{ bar: styles.bar }}
        className={styles.graphLine}
        variant="determinate"
        value={convertToPercent(selectedTravel.total_gCO2, biggestPolluter.total_gCO2)}
      />
      <div className={styles.graphOverlay}>{renderSegments()}</div>
    </div>
  );
};

export default TravelsComparison;