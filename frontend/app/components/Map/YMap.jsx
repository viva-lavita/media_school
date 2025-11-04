'use client'
import {useEffect, useRef} from "react";

export default function YMap({ className, latitude, longitude }) {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)

  useEffect(() => {
    const MAP_ID = 'map';
    // console.log(latitude, longitude)
    function initMap() {
      if (!window.ymaps) return;
      window.ymaps.ready(() => {
        if (mapInstance.current) return;
        mapInstance.current = new window.ymaps.Map(MAP_ID, {
          center: [latitude, longitude],
          zoom: 16,
        });

        const placemark = new window.ymaps.Placemark(
          [latitude, longitude],
          { hintContent: 'Томск' }
        );

        mapInstance.current.geoObjects.add(placemark);
      });
    }

    if (window.ymaps) {
      initMap();
      return;
    }

    const existing = document.getElementById('ymap-script');
    if (existing) {
      if (existing.loaded) {
        initMap();
      } else {
        existing.addEventListener('load', initMap, { once: true });
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'ymap-script';
    script.src = '/api/ymap';
    script.async = true;
    script.onload = () => {
      script.loaded = true;
      initMap();
    };
    document.body.appendChild(script);

    return () => {
      if (mapInstance.current) {
        try {
          mapInstance.current.destroy();
        } catch (e) {
        }
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div id="map" className={className} ref={mapRef}></div>
  )
}