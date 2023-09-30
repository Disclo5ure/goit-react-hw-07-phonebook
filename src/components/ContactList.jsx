import { useSelector } from 'react-redux';
import { Contact } from './Contact';
import { getContacts, getFilter } from 'redux/selectors';
import { nanoid } from 'nanoid';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts =
    contacts.length !== 0 ? getVisibleContacts(contacts, filter) : null;

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {visibleContacts
          ? visibleContacts.map(contact => (
              <Contact
                key={nanoid()}
                name={contact.name}
                number={contact.number}
              />
            ))
          : null}
      </ul>
    </>
  );
};
