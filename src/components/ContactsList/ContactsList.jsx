import Filter from 'components/Filter/Filter'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/slice';

const ContactsList = () => {
    const [filtered, setFiltered] = useState([]);
    const { contacts, filter } = useSelector(store => store.contacts);
    const dispatch = useDispatch();
  
    const deleteItem = id => {
      dispatch(deleteContacts(id));
    };
  
    useEffect(() => {
        if (filter && contacts) {
            setFiltered(
          contacts.filter(el =>
            el.name.toLowerCase().includes(filter.toLowerCase())
          )
        )
        }else {
            setFiltered(contacts)
        }
        
      }, [contacts, filter]);

  return (
    <div>
        <h2>Contacts</h2>
        <Filter />
        <div>
      <ul>
        {filtered &&
          filtered.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button onClick={() => deleteItem(contact.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>

    </div>
  )
}

export default ContactsList