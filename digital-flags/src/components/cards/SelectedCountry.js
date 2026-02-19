import React from "react";
import axios from "axios";

import "./SelectedCountry.css";

const baseURL = "https://restcountries.com/v2/all";

export default function SelectedCountry() {
  const [countries, setCountry] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountry(response.data);
    });
  }, []);

  if (!countries) return null;

  return (
    <div className="selected-country" key={countries[0].name}>
      <div className="selected-flag">
        <img src={countries[0].flag} alt="" />
      </div>
      <div className="country-details">
        <h1 className="selected-country-name">{countries[0].name}</h1>
        <div className="selected-country-info">
          <div className="country-basic-info">
            <div className="specific-stat">
              <span className="country-stat">Native name: </span>
              <span>{countries[0].nativeName}</span>
            </div>
            <div className="specific-stat">
              <span className="country-stat">Population: </span>
              <span>{countries[0].population}</span>
            </div>
            <div className="specific-stat">
              <span className="country-stat">Region: </span>
              <span>{countries[0].region}</span>
            </div>
            <div className="specific-stat">
              <span className="country-stat">Sub region: </span>
              <span>{countries[0].subregion}</span>
            </div>
            <div className="specific-stat">
              <span className="country-stat">Capital: </span>
              <span>{countries[0].capital}</span>
            </div>
          </div>
          <div className="additional-info">
            <div className="specific-stat">
              <span className="country-stat">Top level domain: </span>
              <span>{countries[0].topLevelDomain}</span>
            </div>
            <div className="specific-stat">
              <span className="country-stat">Currencies: </span>
              <span>
                {countries[0].currencies
                  .map((currency) => {
                    return currency.name;
                  })
                  .join(", ")}
              </span>
            </div>
            <div className="specific-stat">
              <span className="country-stat">Languages: </span>
              <span>
                {countries[0].languages
                  .map((language) => {
                    return language.name;
                  })
                  .join(", ")}
              </span>
            </div>
          </div>
        </div>
        <div className="borders">
          <span className="country-stat">Border countries: </span>
          <span>
            {
              countries.map((country) => {
                if (country.borders) {
                  return (
                    <div className="bordering-country">
                      {country.borders
                        .join(" ")
                        .replace(`${country.borders}`, `${country.name}`)}
                    </div>
                  );
                } else {
                  return <div className="specific-stat">No borders</div>;
                }
              })[0]
            }
          </span>
        </div>
      </div>
    </div>
  );
}
