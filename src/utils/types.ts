export interface IContact {
  firstName: string;
  lastName: string;
  status: string;
  id?: number | null | string;
}

export interface MainDataType {
  cases: number;
  recovered: number;
  deaths: number;
  updated: number;
}

export interface CountryType {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
    flag: string; //link to flag
  };
  cases: number;
}

export interface DailyDataType {
  cases: { [date: string]: number };
  recovered: { [date: string]: number };
  deaths: { [date: string]: number };
}
