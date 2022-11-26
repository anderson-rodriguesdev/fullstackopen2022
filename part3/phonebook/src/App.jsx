import React, { useEffect, useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import phonebook from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    phonebook
      .getAll()
      .then((phonebookContacts) => setPersons(phonebookContacts));
  }, []);

  return (
    <>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} setPersons={setPersons} />
    </>
  );
};

export default App;
