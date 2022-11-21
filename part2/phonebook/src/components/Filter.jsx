import React from 'react';

const Filter = ({ persons, searchName, setSearchName }) => {
  function handleSearchName({ target }) {
    setSearchName(target.value);
  }

  const findPerson = persons.find(
    (item) => item.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1,
  );

  return (
    <div>
      filter shown with:
      <input value={searchName} onChange={handleSearchName} />
      {searchName !== '' && findPerson ? findPerson.name : ''}
    </div>
  );
};

export default Filter;
