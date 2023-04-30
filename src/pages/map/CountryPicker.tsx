import { FC, useState } from "react";
import { CountryType } from "../../utils/types";

interface CountryPickerProps {
  countries: CountryType[];
  handleCountryChange: any;
}

const CountryPicker: FC<CountryPickerProps> = ({
  countries,
  handleCountryChange,
}) => {
  const [selectedCountry, setSelectedCountry] = useState("global");
  return (
    <div className="w-80 py-5">
      <select
        className="py-3 px-2 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          handleCountryChange(e.target.value);
        }}
      >
        <option value="global">Global</option>
        {countries.map((country) => (
          <option key={country.country} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryPicker;
