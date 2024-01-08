import React, {useRef, useEffect, useState} from 'react';
import maplibregl, {StyleSpecification} from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

const Map = () => {
  const [style, setStyle] = useState<StyleSpecification | null>(null);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(14);

  useEffect(() => {
    (async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response = await window.electron.ipcRenderer.invoke(
          'fetch-map-styles',
        );
        // console.log('response fetch-map-styles', response);
        setStyle(response);
      } catch (error) {
        console.error('error fetching map styles Map.tsx', error);
      }
    })();
  }, []);

  useEffect(() => {
    if (map.current) {
      return;
    }
    if (style) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style,
        center: [lng, lat],
        zoom,
      });
    }
  }, [style, lng, lat, zoom]);

  if (!style) {
    return null;
  }
  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
