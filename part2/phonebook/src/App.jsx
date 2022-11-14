import React, { useEffect, useState } from 'react';
import Person from './components/Person';
import PersonsForm from './components/PersonsForm';
import Filter from './components/Filter';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPersons(response.data));
  }, []);

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
