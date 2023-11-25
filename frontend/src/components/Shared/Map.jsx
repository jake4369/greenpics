import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamRvZ2c0MzY5IiwiYSI6ImNscGJjdWlxdTBkY3IycW82MnJhaDBsN3gifQ.L4KHq_l8UVwmgHm6GagcrA";

const Map = ({ lng, setLng, lat, setLat }) => {
  const mapContainerRef = useRef(null);

  const [zoom, setZoom] = useState(4.08);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div>
      <div className="map-sidebar">
        Longitude: {lng} | Latitude: {lat}
      </div>
      <div ref={mapContainerRef} className="map-container" />
    </div>
  );
};

export default Map;
