import React, { Fragment } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';

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

const RenderMarkers = ({ travel }: { travel: Travel }): JSX.Element => {
  const map = useMap();
  const mapCenterCoordinates = getDepartureAndArrivalCoordinateAverage(travel.departure_point, travel.arrival_point);
  const mapZoom = travel.total_distance > 2000000 ? 4 : 5;

  map.setView(mapCenterCoordinates, mapZoom);

  return (
    <Fragment>
      {travel.journey_steps.map((travelStep: TravelStep, index: number) => {
        if (index === 0) {
          return (
            <Fragment>
              <Marker key={travelStep.departure_date} position={travelStep.departure_point}>
                <Popup>{travelStep.departure_stop_name || 'unknown'}</Popup>
              </Marker>
              <Marker key={travelStep.arrival_date} position={travelStep.arrival_point}>
                <Popup>{travelStep.arrival_stop_name || 'unknown'}</Popup>
              </Marker>
            </Fragment>
          );
        }

        return (
          <Marker key={travelStep.arrival_date} position={travelStep.arrival_point}>
            <Popup>{travelStep.arrival_stop_name || 'unknown'}</Popup>
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
