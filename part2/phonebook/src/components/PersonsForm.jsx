import React from 'react';

import phonebook from '../services/phonebook';

const PersonsForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setPersons,
  persons,
}) => {
  function handleSubmit(event) {
    event.preventDefault();
    // created a new object that receives its content from the component newName.
    const personObject = {
      name: newName,
      number: newNumber,
    };

    //validate if the name is already added to phonebook
    const found = persons.find(
      (item) =>
        JSON.stringify(item.name.toLowerCase()) ===
        JSON.stringify(newName.toLowerCase()),
    );
    if (found) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace de old number with a new one?`,
        )
      ) {
        const person = persons.find((person) => found.id === person.id);
        const changedNumber = { ...person, number: newNumber };

        phonebook.update(person.id, changedNumber).then((returnedContact) => {
          setPersons(
            persons.map((item) =>
              item.id !== person.id ? item : returnedContact,
            ),
          );
        });
      }
      setNewName('');
      setNewNumber('');
      return;
    }

    // concat to preserver imutability of component
    phonebook
      .create(personObject)
      .then((returnedPhonebook) =>
        setPersons(persons.concat(returnedPhonebook)),
      );
    // reset of input field.
    setNewName('');
    setNewNumber('');
  }

  function handleNameChange({ target }) {
    setNewName(target.value);
  }

  function handleNumberChange({ target }) {
    setNewNumber(target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonsForm;
