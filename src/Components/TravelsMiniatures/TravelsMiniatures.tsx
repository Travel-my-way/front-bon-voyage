import React, { useState } from 'react';
import className from 'classnames';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

import Arrow from '../../Assets/Icons/ArrowInCircle.svg';
import TravelMiniature from './TravelMiniature';

import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles(() => ({
  hidden: {
    display: 'none',
  },
  nextButton: {
    position: 'absolute',
    right: -75,
    top: 25,
  },
  previousButton: {
    left: -75,
    position: 'absolute',
    top: 25,
  },
  travelsWrapper: {
    margin: 'auto',
    maxWidth: 1040,
    position: 'relative',
  },
}));

type Props = {
  travels: Travel[];
};

const TravelsMiniatures = ({ travels }: Props) => {
  const styles = useStyles();
  const [selectedTravel, setSelectedTravel] = useState(travels[0]);
  const [preSelectedTravelIndex, setPreSelectedTravelIndex] = useState(0);

  const handleCardClick = (travel: Travel, index: number) => {
    setSelectedTravel(travel);
    setPreSelectedTravelIndex(Math.min(travels.length - 4, index));
  };

  const handleNextButtonClick = () => {
    const nextSlideIndex = preSelectedTravelIndex + 1;

    if (nextSlideIndex > travels.length - 1) {
      setPreSelectedTravelIndex(0);
    } else {
      setPreSelectedTravelIndex(Math.min(travels.length - 4, nextSlideIndex));
    }
  };

  const handlePreviousButtonClick = () => {
    const previousSlideIndex = preSelectedTravelIndex - 1;

    if (previousSlideIndex > 0) {
      setPreSelectedTravelIndex(previousSlideIndex);
    }
  };

  const nextButtonCustomClasses = className({
    [styles.hidden]: travels.length < 5,
    [styles.nextButton]: true,
  });

  const previousButtonCustomClasses = className({
    [styles.hidden]: travels.length < 5,
    [styles.previousButton]: true,
  });

  return (
    <CarouselProvider
      className={styles.travelsWrapper}
      currentSlide={preSelectedTravelIndex}
      naturalSlideHeight={200}
      naturalSlideWidth={200}
      totalSlides={travels.length}
      visibleSlides={5}
    >
      <IconButton className={previousButtonCustomClasses} onClick={handlePreviousButtonClick}>
        <img src={Arrow} />
      </IconButton>
      <Slider>
        {travels.map((travel: Travel, index: number) => (
          <TravelMiniature
            index={index}
            selectedTravel={selectedTravel}
            handleCardClick={handleCardClick}
            travel={travel}
          />
        ))}
      </Slider>

      <IconButton className={nextButtonCustomClasses} onClick={handleNextButtonClick}>
        <img src={Arrow} />
      </IconButton>
    </CarouselProvider>
  );
};

export default TravelsMiniatures;
