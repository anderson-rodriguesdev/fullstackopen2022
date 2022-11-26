import React from 'react';
import phonebook from '../services/phonebook';

const Person = ({ persons, setPersons }) => {
  const deleteContact = (id) => {
    const person = persons.find((person) => id === person.id);
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebook.delContact(id).then(() => {
        const newPersons = persons.filter((person) => person.id !== id);
        setPersons(newPersons);
      });
    }
  };

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
