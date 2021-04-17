import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

import RedCircle from '../../Assets/Shapes/RedCircle.svg';
import RedTriangle from '../../Assets/Shapes/RedTriangle.svg';
import RedSquare from '../../Assets/Shapes/RedSquare.svg';
import RedStar from '../../Assets/Shapes/RedStar.svg';
import GreenCircle from '../../Assets/Shapes/GreenCircle.svg';
import GreenTriangle from '../../Assets/Shapes/GreenTriangle.svg';
import GreenSquare from '../../Assets/Shapes/GreenSquare.svg';
import GreenStar from '../../Assets/Shapes/GreenStar.svg';
import YellowCircle from '../../Assets/Shapes/YellowCircle.svg';
import YellowTriangle from '../../Assets/Shapes/YellowTriangle.svg';
import YellowSquare from '../../Assets/Shapes/YellowSquare.svg';
import YellowStar from '../../Assets/Shapes/YellowStar.svg';

const shapes = [
  RedCircle,
  RedTriangle,
  RedSquare,
  RedStar,
  GreenCircle,
  GreenTriangle,
  GreenSquare,
  GreenStar,
  YellowCircle,
  YellowTriangle,
  YellowSquare,
  YellowStar,
];

const NumberOfShapes = 18;
const intervalY = 400;

const useStyles = makeStyles(() => ({
  shape: {
    position: 'absolute',
    zIndex: 0,
  },
  component: {
    position: 'absolute',
    zIndex: 1,
  },
}));

type Props = {
  children: JSX.Element;
};

const getRandomIntBetweenInterval = ([minInt = 0, maxInt = 1]) => {
  return Math.round(Math.random() * (maxInt - minInt + 1) + minInt);
};

const renderFormattedShapes = (styles: Record<string, string>) => {
  const formattedShapes = [];
  const screenWidth = window.screen.width;
  const thirdScreenWidth = screenWidth / 3;

  for (let i = 0; i < NumberOfShapes; i++) {
    const isEven = i % 2 === 0;
    const shapeIndex = getRandomIntBetweenInterval([0, shapes.length]);
    const rotation = 360 * Math.random();

    const xPosition = isEven
      ? getRandomIntBetweenInterval([150, thirdScreenWidth])
      : getRandomIntBetweenInterval([screenWidth - thirdScreenWidth, screenWidth - 150]); // minus 150 so shape will not be cut by the screen border

    const yPosition = getRandomIntBetweenInterval([(intervalY * i) / 2, intervalY + intervalY * (i / 2)]);

    formattedShapes.push(
      <img
        className={styles.shape}
        src={shapes[shapeIndex]}
        style={{ top: yPosition, left: xPosition, transform: `rotate(${rotation}deg)` }}
      />
    );
  }

  return formattedShapes;
};

const ShapeBackground = ({ children }: Props): JSX.Element => {
  const styles = useStyles();

  return (
    <Fragment>
      <div className={styles.component}>{children}</div>
      <Hidden smDown>{renderFormattedShapes(styles)}</Hidden>
    </Fragment>
  );
};

export default ShapeBackground;
