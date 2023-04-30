import React from "react";
import { MapContainer, TileLayer, useMap, Circle, Popup } from "react-leaflet";

import "./Map.css";
import { CountryType } from "../../utils/types";

interface MapProps {
  countries: CountryType[];
  center: [number, number];
  zoom: number;
}

function MapComponent({ countries, center, zoom }: MapProps) {
  const foundUSA = countries.find((item) => item.country === "USA");
  const biggestCases = foundUSA?.cases;

  const looksNormalMaxRadiusCoefficient =
    5000000000 / (biggestCases || 100000000);

  function SetCenter({
    newCenter,
    newZoom,
  }: {
    newCenter: [number, number];
    newZoom: number;
  }) {
    const map = useMap();
    map.setView(newCenter, newZoom);
    return null;
  }

  const showDataOnMap = (data: CountryType[]) => {
    return (
      data &&
      data.map(
        (country) =>
          country.countryInfo.lat && (
            <Circle
              key={country.country}
              center={[country.countryInfo.lat, country.countryInfo.long]}
              fillOpacity={0.4}
              color="#CC1034"
              fillColor="#CC1034"
              radius={
                Math.sqrt(country.cases) * looksNormalMaxRadiusCoefficient
              }
            >
              <Popup>
                <div className="flex flex-col">
                  <div
                    className="w-5 h-5 bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url(${country.countryInfo.flag})`,
                    }}
                  ></div>
                  <div className="mt-2 font-bold text-lg">
                    {country.country}
                  </div>
                  <div className="mt-1">Confirmed cases: {country.cases}</div>
                </div>
              </Popup>
            </Circle>
          )
      )
    );
  };

  return (
    <div className="w-full h-screen">
      <MapContainer
        center={[30, 15]}
        zoom={3}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <SetCenter newCenter={center} newZoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries)}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
