import React, { useState } from "react";
import { CountryType, MainDataType } from "../../utils/types";
import MapComponent from "./MapComponent";
import Chart from "./Chart";

interface MapAndChartTabsProps {
  data: MainDataType;
  country: string;
  countries: CountryType[];
  mapCenter: [number, number];
  mapZoom: number;
}

const MapAndChartTabs = ({
  data,
  country,
  countries,
  mapCenter,
  mapZoom,
}: MapAndChartTabsProps) => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <div className="flex flex-col h-full">
      <div className="flex  space-x-4 mb-8 items-center ">
        <button
          className={`${
            tabValue === 0 ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          } font-medium rounded-md py-1 px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
          onClick={() => setTabValue(0)}
        >
          Chart
        </button>
        <button
          className={`${
            tabValue === 1 ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          } font-medium rounded-md py-1 px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
          onClick={() => setTabValue(1)}
        >
          Map
        </button>
      </div>
      {tabValue === 0 && <Chart data={data} country={country} />}
      {tabValue === 1 && (
        <MapComponent countries={countries} center={mapCenter} zoom={mapZoom} />
      )}
    </div>
  );
};

export default MapAndChartTabs;
