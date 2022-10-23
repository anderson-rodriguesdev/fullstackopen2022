import React from 'react';

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
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      setNewNumber('');
      return;
    }

    // concat to preserver imutability of component
    setPersons(persons.concat(personObject));
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
