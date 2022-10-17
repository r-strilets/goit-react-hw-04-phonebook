import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  getNewContactsArray = newContact => {
    if (
      this.state.contacts.some(contact => {
        return contact.name.toLowerCase() === newContact.name.toLowerCase();
      })
    ) {
      alert(`${newContact.name} is alredy in contacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  contactsFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  deleteContact = contactId => {
    const contactIndex = this.state.contacts.findIndex(
      contact => contact.id === contactId
    );
    this.setState(prevState => {
      prevState.contacts.splice(contactIndex, 1);
      return {
        contacts: [...prevState.contacts],
      };
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.toString().toLowerCase())
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          data={this.getNewContactsArray}
          // contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter contactsFilter={this.contactsFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
