import { useState } from 'react';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ data }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
  };

  const addContact = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    data(newContact);
    setName('');
    setNumber('');
  };

  const nameId = nanoid();
  const numberId = nanoid();
  return (
    <>
      <form action="" onSubmit={addContact} className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          onChange={onChangeInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={numberId}>Number</label>
        <input
          id={numberId}
          type="tel"
          name="number"
          onChange={onChangeInput}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button>Add contact</button>
      </form>
    </>
  );
};
ContactForm.propTypes = {
  data: PropTypes.func.isRequired,
};
