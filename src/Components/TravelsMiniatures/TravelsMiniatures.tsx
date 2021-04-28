import React, { useState } from 'react';
import className from 'classnames';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

import TravelMiniature from './TravelMiniature';

import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles(() => ({
  hidden: {
    display: 'none',
  },
  nextButton: {
    position: 'absolute',
    right: -75,
    top: 35,
    width: 50,
    height: 50,
  },
  previousButton: {
    left: -75,
    position: 'absolute',
    top: 35,
    width: 50,
    height: 50,
  },
  travelsWrapper: {
    margin: 'auto',
    maxWidth: 1040,
    position: 'relative',
  },
}));

type Props = {
  sortedTravels: Travel[];
  setSelectedTravel: (travel: Travel) => null;
  selectedTravel: Travel;
};

const TravelsMiniatures = ({ sortedTravels, selectedTravel, setSelectedTravel }: Props): JSX.Element => {
  const styles = useStyles();
  const [preSelectedTravelIndex, setPreSelectedTravelIndex] = useState(0);

  const handleCardClick = (travel: Travel, index: number) => {
    setSelectedTravel(travel);
    setPreSelectedTravelIndex(Math.min(sortedTravels.length - 4, index));
  };

  const handleNextButtonClick = () => {
    const nextSlideIndex = preSelectedTravelIndex + 1;

    if (nextSlideIndex > sortedTravels.length - 1) {
      setPreSelectedTravelIndex(0);
    } else {
      setPreSelectedTravelIndex(Math.min(sortedTravels.length - 4, nextSlideIndex));
    }
  };

  const handlePreviousButtonClick = () => {
    const previousSlideIndex = preSelectedTravelIndex - 1;

    if (previousSlideIndex >= 0) {
      setPreSelectedTravelIndex(previousSlideIndex);
    }
  };

  const nextButtonCustomClasses = className({
    [styles.hidden]: sortedTravels.length < 5,
    [styles.nextButton]: true,
  });

  const previousButtonCustomClasses = className({
    [styles.hidden]: sortedTravels.length < 5,
    [styles.previousButton]: true,
  });

  return (
    <CarouselProvider
      className={styles.travelsWrapper}
      currentSlide={preSelectedTravelIndex}
      naturalSlideHeight={150}
      naturalSlideWidth={200}
      totalSlides={sortedTravels.length}
      visibleSlides={5}
    >
      <IconButton className={previousButtonCustomClasses} onClick={handlePreviousButtonClick}>
        {'<'}
      </IconButton>
      <Slider>
        {sortedTravels?.map((travel: Travel, index: number) => (
          <TravelMiniature
            index={index}
            selectedTravel={selectedTravel}
            handleClick={handleCardClick}
            travel={travel}
            key={travel.id}
          />
        ))}
      </Slider>
      <IconButton className={nextButtonCustomClasses} onClick={handleNextButtonClick}>
        {'>'}
      </IconButton>
    </CarouselProvider>
  );
};

export default TravelsMiniatures;
