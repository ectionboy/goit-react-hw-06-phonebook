import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/slice';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  const createContact = data => {
    dispatch(addContacts(data));
  };

  const formSubmit = e => {
    e.preventDefault();

    if (contacts && inNameNew(contacts, name) !== undefined) {
      return alert(`${name} is already in contacts.`);
    }

    createContact({ name, number });
    setName('');
    setNumber('');
  };

  const inNameNew = (phoneBook, newContact) => {
    return phoneBook.find(({ name }) => name === newContact);
  };

  const inputName = ({ target: { value } }) => {
    setName(value);
  };
  const inputNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <h3>Name</h3>
          <input
            type="text"
            onChange={inputName}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
          />
          <h3>Number</h3>
          <input
            type="tel"
            onChange={inputNumber}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default Form;
