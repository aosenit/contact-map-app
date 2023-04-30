import { useQuery } from "react-query";
import axios from "axios";
import { MainDataType } from "../../utils/types";
import { baseUrl, worldWideDataUrl } from "../api/urls";

export const useFetchData = (country: string) => {
  const key = country === "global" ? "globalData" : `countryData_${country}`;

  const fetchData = async (): Promise<MainDataType> => {
    let url =
      country === "global"
        ? `${worldWideDataUrl}`
        : `${baseUrl}/countries/${country}`;
    const response = await axios.get<MainDataType>(url);
    return response.data;
  };

  const { data, isLoading, isError, error } = useQuery(key, fetchData);

  return { data, isLoading, isError, error };
};
