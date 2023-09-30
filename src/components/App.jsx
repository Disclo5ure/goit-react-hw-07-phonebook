import React from 'react';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { AddContactForm } from './AddContactForm';

export const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <AddContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
