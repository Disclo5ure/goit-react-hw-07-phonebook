import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const AddContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
    dispatch(addContact({ name, number }));
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input type="text" name="name" />
      <h3>Number</h3>
      <input type="tel" name="number" />
      <button type="submit" className="button">
        Add contact
      </button>
    </form>
  );
};
