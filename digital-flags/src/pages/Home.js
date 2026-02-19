import React, { useState } from "react";
import RegionFilter from "../components/dropdown/RegionFilter";
import Countries from "../components/cards/Countries";
import axios from "axios";
import "./Home.css";

const baseURL = "https://restcountries.com/v2/all";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filteredRegion, setFilteredRegion] = useState("");
  const [countries, setCountry] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountry(response.data);
    });
  }, []);

  if (!countries) return null;

  const filterChangeHandler = (selectedRegion) => {
    console.log(selectedRegion);
    setFilteredRegion(selectedRegion);
  };

  const onCountrySelected = (selectedCountryName) => {
    console.log(selectedCountryName);
  };

  return (
    <div>
      <div className="search-and-filter">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder=" 🔍  Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
            id="searchBar"
          />
        </div>

        <RegionFilter
          selected={filteredRegion}
          onChangeFilter={filterChangeHandler}
          countries={countries}
        />
      </div>

      <Countries
        search={search}
        filtered={filteredRegion}
        countries={countries}
        onCountrySelected={onCountrySelected}
      />
    </div>
  );
}
