import React, { useState, useEffect } from 'react';
import { Form, Input } from 'reactstrap';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <Form className={styles.formControl}>
      <div className={styles.box}>
      <Input className={styles.select} type="select" defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option  value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </Input>
      </div>
    </Form>
  );
};

export default Countries;