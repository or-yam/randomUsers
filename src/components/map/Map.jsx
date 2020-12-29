import React from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from './MapMarker';

export default function Map({ userData }) {
  const { name, address } = userData;
  const lat = parseFloat(address.geo.lat);
  const lng = parseFloat(address.geo.lng);

  const defaultProps = {
    center: { lat: lat, lng: lng },
    zoom: 5,
  };

  const styles = {
    height: '100vh',
    width: '100%',
  };

  return (
    <div style={styles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAsAf8ZKSFF8-3xgRO1GOdhAsEEVxdc9a0' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker lat={lat} lng={lng} name={name} />
      </GoogleMapReact>
    </div>
  );
}
