import React from 'react';
import { DirectionsBoat, DirectionsBus, DirectionsCar, DirectionsSubway, Flight } from '@material-ui/icons';

type Props = {
  category: TravelCategory;
  classes?: string;
  colorIcon?: string;
};

const logoByCaterogy: Record<any, any> = {
  Bus: DirectionsBus,
  Car: DirectionsCar,
  Carpooling: DirectionsCar,
  Coach: DirectionsBus,
  Ferry: DirectionsBoat,
  Plane: Flight,
  Train: DirectionsSubway,
  Metro: DirectionsSubway,
};

const TravelIcon = ({ category, classes, colorIcon }: Props): JSX.Element | null => {
  const Icon = logoByCaterogy[category];

  return Icon ? <Icon className={classes} style={{ color: colorIcon }} /> : null;
};

export default TravelIcon;
