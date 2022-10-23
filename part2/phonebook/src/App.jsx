import React, { useState } from 'react';
import Person from './components/Person';
import PersonsForm from './components/PersonsForm';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  return (
    <>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        searchName={searchName}
        setSearchName={setSearchName}
      />
      <h3>Add a new</h3>
      <PersonsForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
        persons={persons}
      />
      <h3>Numbers</h3>
      <Person persons={persons} />
    </>
  );
};

export default App;
