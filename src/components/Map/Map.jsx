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

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker lat={lat} lng={lng} name={name} />
      </GoogleMapReact>
    </div>
  );
}
