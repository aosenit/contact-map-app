import React, { useState } from "react";

import "leaflet/dist/leaflet.css";
import Cards from "./ViewCard";
import CountryPicker from "./CountryPicker";
import MapAndChartTabs from "./MapAndChartTabs";
import { CountryType, MainDataType } from "../../utils/types";
import { fetchCountries, fetchData } from "../../utils/api/Requests";
import { useQuery } from "react-query";

const View = () => {
  const [data, setData] = useState<MainDataType>({
    cases: 0,
    recovered: 0,
    deaths: 0,
    updated: 0,
  }); // data of worldwide or country info
  const [country, setCountry] = useState("global"); //country name
  const [countries, setCountries] = useState<Array<CountryType>>([]); //array of full countries data
  const [mapCenter, setMapCenter] = useState<[number, number]>([30, 15]);
  const [mapZoom, setMapZoom] = useState(2);

  const { status } = useQuery({
    queryKey: ["allCases", country],
    queryFn: async () => {
      const { data } = await fetchData(country);
      const { cases, recovered, deaths, updated } = data;
      setData({ cases, recovered, deaths, updated });
      return data;
    },
  });

  const { data: allCountries, status: countriesStatus } = useQuery({
    queryKey: ["allCountries"],
    queryFn: async () => {
      const { data } = await fetchCountries();
      setCountries(data);
      return data;
    },
  });

  if (status === "error" || countriesStatus === "error")
    console.log("An Error as occured. Please try again");

  const handleChangedCoutry = (selectedCountry: string) => {
    setCountry(selectedCountry);

    if (selectedCountry === "global") {
      setMapCenter([30, 15]);
      setMapZoom(2);
    } else {
      const foundCountry = allCountries?.find(
        (country) => country.country === selectedCountry
      );
      foundCountry &&
        setMapCenter([
          foundCountry.countryInfo.lat,
          foundCountry.countryInfo.long,
        ]);
      setMapZoom(4);
    }
  };

  return (
    <div className={"p-10"}>
      <p className={"text-2xl text-blue-600"}>Simple Covid-19 Dashboard</p>
      <Cards data={data} />
      <div className="mb-5">
        <CountryPicker
          countries={countries}
          handleChangedCoutry={handleChangedCoutry}
        />
      </div>
      <MapAndChartTabs
        data={data}
        country={country}
        countries={countries}
        mapCenter={mapCenter}
        mapZoom={mapZoom}
      />
    </div>
  );
};

export default View;
