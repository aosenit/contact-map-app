import React, { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css";
import Cards from "./ViewCard";
import CountryPicker from "./CountryPicker";
import MapAndChartTabs from "./MapAndChartTabs";
import { CountryType, MainDataType } from "../../utils/types";
import { fetchCountries, fetchData } from "../../utils/api/Requests";

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
  const [isError, setIsError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async function () {
      try {
        const {
          data: { cases, recovered, deaths, updated },
        } = await fetchData("global");

        setData({ cases, recovered, deaths, updated });
      } catch (err) {
        setIsError(true);
        setErrorMessage("Can't fetch global data");
      }
    })();
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const fetchedData = await fetchCountries();

        setCountries(fetchedData.data);
      } catch (err) {
        setIsError(true);
        setErrorMessage("Can't fetch countries");
      }
    };

    fetchAPI();
  }, []);

  const handleCountryChange = async (selectedCountry: string) => {
    try {
      const {
        data: { cases, recovered, deaths, updated },
      } = await fetchData(selectedCountry);

      setData({ cases, recovered, deaths, updated });
      setCountry(selectedCountry);
    } catch (err) {
      setIsError(true);
      setErrorMessage(`Can't fetch ${selectedCountry} data`);
    }

    if (selectedCountry === "global") {
      setMapCenter([30, 15]);
      setMapZoom(2);
    } else {
      const foundCountry = countries.find(
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

  if (isError) {
    console.log("An Error as occured. Please try again");
  }
  return (
    <div className={"p-10"}>
      <p className={"text-2xl text-blue-600"}>Simple Covid-19 Dashboard</p>
      <Cards data={data} />
      <div className="mb-5">
        <CountryPicker
          countries={countries}
          handleCountryChange={handleCountryChange}
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
