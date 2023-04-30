import axios from "axios";
import { CountryType, DailyDataType, MainDataType } from "../types";
import {
  baseUrl,
  countriesDataUrl,
  historicalDataUrl,
  worldWideDataUrl,
} from "./urls";

export const fetchData = (country: string) => {
  let url;

  if (country !== "global") {
    url = `${baseUrl}/countries/${country}`;
  } else {
    url = `${worldWideDataUrl}`;
  }

  return axios.get<MainDataType>(url);
};

export const fetchDailyData = async () => {
  return axios.get<DailyDataType>(`${historicalDataUrl}`);
};

export const fetchCountries = () => {
  return axios.get<Array<CountryType>>(`${countriesDataUrl}`);
};
