import React from 'react';
import { DirectionsBoat, DirectionsBus, DirectionsCar, DirectionsSubway, Flight } from '@material-ui/icons';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';

type Props = {
  category: TravelCategory;
  classes: string;
};

type LogoByCaterogy = {
  Train: OverridableComponent<SvgIconTypeMap<string, 'svg'>>;
  Carpooling: OverridableComponent<SvgIconTypeMap<string, 'svg'>>;
  Car: OverridableComponent<SvgIconTypeMap<string, 'svg'>>;
  Plane: OverridableComponent<SvgIconTypeMap<string, 'svg'>>;
  Ferry: OverridableComponent<SvgIconTypeMap<string, 'svg'>>;
};

const logoByCaterogy: LogoByCaterogy = {
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
