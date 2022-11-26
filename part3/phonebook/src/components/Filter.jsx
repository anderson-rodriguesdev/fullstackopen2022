import React from 'react';
import { useState } from 'react';

const Filter = ({ persons }) => {
  const [filter, setFilter] = useState('');

  const handleSearchName = ({ target }) => {
    setFilter(target.value);
  };

  const findPerson = persons.find(
    (item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
  );

  return (
    <div>
      filter shown with:
      <input onChange={handleSearchName} />
      {filter !== '' && findPerson ? findPerson.name : ''}
    </div>
  );
};

export default Filter;
