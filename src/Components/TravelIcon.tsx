import React from 'react';
import { DirectionsBoat, DirectionsBus, DirectionsCar, DirectionsSubway, Flight } from '@material-ui/icons';

type Props = {
  category: TravelCategory;
  classes: string;
};

const logoByCaterogy: Record<any, any> = {
  Car: DirectionsBus,
  Carpooling: DirectionsCar,
  Ferry: DirectionsBoat,
  Plane: Flight,
  Train: DirectionsSubway,
};

const TravelIcon = ({ category, classes }: Props): JSX.Element | null => {
  const Icon = logoByCaterogy[category];

  return Icon ? <Icon className={classes} /> : null;
};

export default TravelIcon;
