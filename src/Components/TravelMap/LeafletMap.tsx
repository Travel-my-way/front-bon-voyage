import React, { Fragment, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';
import GreenFlag from '../../Assets/Icons/greenFlag.svg';
import YellowFlag from '../../Assets/Icons/yellowFlag.svg';
import RedFlag from '../../Assets/Icons/redFlag.svg';

import { getDepartureAndArrivalCoordinateAverage } from './utils';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    height: 328,
    marginTop: 20,
    width: '100%',
    [breakpoints.up('md')]: {
      width: 405,
    },
  },
}));

interface Props {
  travel: Travel;
}

//@ts-ignore
const greenMarkerIcon = L.icon({
  iconUrl: GreenFlag,
  iconSize: [32, 32],
  iconAnchor: [6, 32],
});

//@ts-ignore
const yellowMarkerIcon = L.icon({
  iconUrl: YellowFlag,
  iconSize: [32, 32],
  iconAnchor: [6, 32],
});

//@ts-ignore
const redMarkerIcon = L.icon({
  iconUrl: RedFlag,
  iconSize: [32, 32],
  iconAnchor: [6, 32],
});

type Line = Record<string, any>;

let lines: Line[] = [];
const RenderMarkers = ({ travel }: { travel: Travel }): JSX.Element => {
  const map = useMap();
  const mapCenterCoordinates = getDepartureAndArrivalCoordinateAverage(travel.departure_point, travel.arrival_point);
  const mapZoom = travel.total_distance > 2000000 ? 4 : 5;

  map.setView(mapCenterCoordinates, mapZoom);

  useEffect(() => {
    travel.journey_steps.forEach((step: TravelStep) => {
      //@ts-ignore
      const pointA = new L.LatLng(step.departure_point[0], step.departure_point[1]);
      //@ts-ignore
      const pointB = new L.LatLng(step.arrival_point[0], step.arrival_point[1]);
      //@ts-ignore
      const line = new L.Polyline([pointA, pointB], {
        color: 'black',
        dashArray: '4, 12',
        opacity: 0.5,
        smoothFactor: 1,
        weight: 3,
      });

      line.addTo(map);
      lines.push(line);
    });

    return () => {
      lines.forEach((line: Line) => line.remove(map));
      lines = [];
    };
  });

  return (
    <Fragment>
      {travel.journey_steps.map((step: TravelStep, index: number) => {
        const isLastElem = index === travel.journey_steps.length - 1;
        if (index === 0) {
          return (
            <Fragment key={`${step.arrival_date} ${step.id} ${step.distance_m}`}>
              <Marker icon={greenMarkerIcon} position={step.departure_point}>
                <Popup>{step.departure_stop_name || 'unknown'}</Popup>
              </Marker>
              <Marker icon={isLastElem ? redMarkerIcon : yellowMarkerIcon} position={step.arrival_point}>
                <Popup>{step.arrival_stop_name || 'unknown'}</Popup>
              </Marker>
            </Fragment>
          );
        }

        return (
          <Marker
            icon={isLastElem ? redMarkerIcon : yellowMarkerIcon}
            key={`${step.arrival_date} ${step.id} ${step.distance_m}`}
            position={step.arrival_point}
          >
            <Popup>{step.arrival_stop_name || 'unknown'}</Popup>
          </Marker>
        );
      })}
    </Fragment>
  );
};

const LeafletMap = ({ travel }: Props): JSX.Element | null => {
  if (!travel) {
    return null;
  }

  const styles = useStyles();

  return (
    <MapContainer center={travel.departure_point} zoom={8} scrollWheelZoom={false} className={styles.container}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RenderMarkers travel={travel} />
    </MapContainer>
  );
};

export default LeafletMap;
