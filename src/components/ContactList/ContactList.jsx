// import { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            📱 {contact.name}: {contact.number}
            <button onClick={e => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
};
