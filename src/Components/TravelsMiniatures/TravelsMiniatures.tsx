import React, { useState, useEffect } from 'react';
import className from 'classnames';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

import TravelMiniature from './TravelMiniature';

import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles(() => ({
  container: {
    height: 150,
    margin: 'auto',
    maxWidth: 1040,
    paddingLeft: 10,
    position: 'relative',
  },
  hidden: {
    display: 'none',
  },
  nextButton: {
    height: 50,
    position: 'absolute',
    right: -75,
    top: 35,
    width: 50,
  },
  previousButton: {
    height: 50,
    left: -75,
    position: 'absolute',
    top: 35,
    width: 50,
  },
  slider: {
    height: 125,
    marginLeft: -10,
  },
}));

type Props = {
  sortedTravels: Travel[];
  selectTravel: (travel: Travel) => void;
  selectedTravel: Travel;
};

const getNumberOfSlide = (carouselWidth: number) => Math.floor(carouselWidth / 225);

const TravelsMiniatures = ({ sortedTravels, selectedTravel, selectTravel }: Props): JSX.Element => {
  const styles = useStyles();
  const [preSelectedTravelIndex, setPreSelectedTravelIndex] = useState(0);
  const [numberOfSlides, setNumberOfSlides] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const DOMNode = document.getElementById('carousel-container');
      const currentCarouselWidth = DOMNode?.offsetWidth || 0;

      setNumberOfSlides(getNumberOfSlide(currentCarouselWidth));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (travel: Travel, index: number) => {
    selectTravel(travel);
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
    [styles.hidden]: sortedTravels.length <= numberOfSlides,
    [styles.nextButton]: true,
  });

  const previousButtonCustomClasses = className({
    [styles.hidden]: sortedTravels.length <= numberOfSlides,
    [styles.previousButton]: true,
  });

  return (
    <div className={styles.container} id="carousel-container">
      <CarouselProvider
        currentSlide={preSelectedTravelIndex}
        naturalSlideHeight={120}
        naturalSlideWidth={225}
        totalSlides={sortedTravels.length}
        visibleSlides={numberOfSlides}
      >
        <IconButton className={previousButtonCustomClasses} onClick={handlePreviousButtonClick}>
          {'<'}
        </IconButton>
        <Slider className={styles.slider}>
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
    </div>
  );
};

export default TravelsMiniatures;
