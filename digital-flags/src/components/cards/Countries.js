import React from "react";

import "./Countries.css";

export default function Countries(props) {
  const { search, filtered, countries, onCountrySelected } = props;

  var filteredCountries = countries;

  if (filtered) {
    filteredCountries = countries.filter((country) => {
      return country.region.includes(filtered);
    });
  }

  if (search) {
    filteredCountries = filteredCountries.filter((country) => {
      return country.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  const countrySelector = (countryName) => {
    onCountrySelected(countryName);
  };

  return (
    <div className="countries-grid">
      {filteredCountries.map((country) => (
        <div
          onClick={(e) => {
            countrySelector(country.name);
          }}
          className="country"
          key={country.name}
        >
          <div className="flag">
            <img src={country.flag} alt="" />
          </div>
          <div className="country-title-and-info">
            <h1 className="country-name">{country.name}</h1>
            <div className="country-info">
              <div>
                <span className="country-stat">Population:</span>{" "}
                <span>{country.population}</span>
              </div>
              <div>
                <span className="country-stat">Region:</span>{" "}
                <span>{country.region}</span>
              </div>
              <div>
                <span className="country-stat">Capital:</span>{" "}
                <span>{country.capital}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
