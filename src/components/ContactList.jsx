import { useDispatch, useSelector } from 'react-redux';
import { Contact } from './Contact';
import { selectVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts
          ? contacts.map(contact => (
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            ))
          : null}
      </ul>
    </>
  );
};
