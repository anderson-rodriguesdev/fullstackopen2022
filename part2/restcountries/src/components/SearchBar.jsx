import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SearchBar = () => {
  const [countries, setCountries] = useState([]);
  const [countriesFilter, setcountriesFilter] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data));
  }, []);

  function handleChange({ target }) {
    const countriesFiltered = countries.filter(
      (country) =>
        country.name.common.toLowerCase().search(target.value.toLowerCase()) !==
        -1,
    );
    setcountriesFilter(countriesFiltered);
  }

  return (
    <>
      <span>find countries</span>
      <input type="text" onChange={handleChange} />
      {countriesFilter.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        countriesFilter.map((country, index) => (
          <p key={index}>{country.name.common}</p>
        ))
      )}
    </>
  );
};

export default SearchBar;
