import React, {useRef, useEffect, useState} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

const API_KEY = 'P0wnIOkLN3ZKpS4mU7RU';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(14);

  useEffect(() => {
    console.log(mapContainer);
  }, []);

  useEffect(() => {
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lng, lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
