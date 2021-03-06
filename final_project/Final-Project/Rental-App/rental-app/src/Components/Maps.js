import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const infoWindowMaker = (marker, markerClose) => {

  <InfoWindow
    onCloseClick={() => markerClose(marker)}
  >
    <div>

      <p>{marker.address}</p>

    </div>
  </InfoWindow>
};

const GettingStartedGoogleMap = withGoogleMap((props) => {
  var marks = props.listings.map((listing, index) => {

    return (
      <Marker
        position={{ lat: listing.marker.position.lat, lng: listing.marker.position.lng }}
        onClick={() => { props.setSelectedMarker(listing.id) }}
      >
        <infoWindowMaker></infoWindowMaker>
      </Marker>
    )
  })

  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={10}
      defaultCenter={{ lat: 43.653226, lng: -79.383184 }}
      onClick={props.onMapClick}
    >
      {marks}
    </GoogleMap>
  )
});

export default GettingStartedGoogleMap

//find a way to pass marker to display information on each listing on onClick
//also find a way to close 
