import React from 'react';
import phonebook from '../services/phonebook';

const Person = ({ persons, setPersons }) => {
  function deleteContact(id) {
    const person = persons.find((person) => id === person.id);
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebook
        .delContact(id)
        .then((response) =>
          setPersons(persons.filter((item) => item !== response)),
        );
    }
  }

  return (
    <>
      {persons.map(({ id, name, number }) => (
        <p key={id}>
          {name} {number}
          <button
            onClick={() => deleteContact(id)}
            style={{ marginLeft: '4px' }}
          >
            delete
          </button>
        </p>
      ))}
    </>
  );
};

export default Person;
