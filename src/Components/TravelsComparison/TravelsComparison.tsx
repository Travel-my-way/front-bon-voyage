import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Zoom } from '@material-ui/core';

import sticker from '../../Assets/Logos/le_moins_polluant.svg';
import TravelIcon from '../TravelIcon';
import { convertToPercent } from '../../utils';

const HEIGHT_BAR = 12;

const useStyles = makeStyles(({ palette }) => ({
  bar: {
    backgroundColor: palette.green,
  },
  container: {
    border: `1px solid ${palette.green}`,
    height: 120,
    margin: 'auto',
    maxWidth: 920,
    padding: '30px 50px',
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
  graphOccurence: {
    backgroundColor: 'white',
    height: HEIGHT_BAR,
    position: 'absolute',
    width: 2,
  },
  graphOverlay: {
    display: 'flex',
    height: HEIGHT_BAR,
    position: 'relative',
    width: '100%',
    zIndex: 3,
  },
  icon: {
    color: palette.black,
    height: 32,
    width: 32,
  },
  icons: {
    display: 'flex',
    position: 'relative',
    top: -40,
  },
  img: {
    paddingBottom: 28,
  },
}));

type Props = {
  sortedTravels: Travel[];
  selectedTravel: Travel;
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
            return <TravelIcon classes={styles.icon} key={category} category={category} />;
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
      <img src={sticker} className={styles.img} />
      <LinearProgress
        classes={{ bar: styles.bar }}
        className={styles.graphLine}
        variant="determinate"
        value={convertToPercent(selectedTravel.total_gCO2, biggestPolluter.total_gCO2)}
      />
      <div className={styles.graphOverlay}>{renderSegments()}</div>
      <div>{selectedTravel.total_gCO2}</div>
    </div>
  );
};

export default TravelsComparison;
