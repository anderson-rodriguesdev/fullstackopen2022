import React from 'react';
import { useState } from 'react';

import phonebook from '../services/phonebook';

const PersonForm = ({ persons, setPersons }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // created a new object that receives its content from the state name and number.
    const personObject = {
      name,
      number,
    };

    //validate if the name is already added to phonebook
    const found = persons.find(
      (item) =>
        JSON.stringify(item.name.toLowerCase()) ===
        JSON.stringify(name.toLowerCase()),
    );

    if (found) {
      if (
        window.confirm(
          `${name} is already added to phonebook, replace de old number with a new one?`,
        )
      ) {
        const person = persons.find((person) => found.id === person.id);
        const changedNumber = { ...person, number: number };

        phonebook.update(person.id, changedNumber).then((returnedContact) => {
          setPersons(
            persons.map((item) =>
              item.id !== person.id ? item : returnedContact,
            ),
          );
        });
      }
      setName('');
      setNumber('');
      return;
    }

    // concat to preserver imutability of component
    if (name && number !== '') {
      phonebook
        .create(personObject)
        .then((returnedPhonebook) =>
          setPersons(persons.concat(returnedPhonebook)),
        );
    }
    // reset of input field.
    setName('');
    setNumber('');
  };

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleNumberChange = ({ target }) => {
    setNumber(target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={name} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
