import React from "react";

import "./RegionFilter.css";

export default function RegionFilter(props) {
  const { countries } = props;

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const regions = [];

  countries.forEach((country) => {
    if (!regions.includes(country.region)) {
      regions.push(country.region);
    }
  });

  return (
    <div className="region-filter">
      <div className="region-filter__control">
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="" selected disabled hidden>
            Filter by region
          </option>
          {regions.map((region) => {
            return <option value={region}>{region}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
