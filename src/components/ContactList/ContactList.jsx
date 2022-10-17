import { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './ContactList.module.css';
export class ContactList extends Component {
  static propTypes = {
    filteredContacts: PropTypes.array.isRequired,
  };

  render() {
    const { filteredContacts, deleteContact } = this.props;
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
  }
}
