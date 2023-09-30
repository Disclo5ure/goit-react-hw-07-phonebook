import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = props => {
  const dispatch = useDispatch();

  const handleDeleteContact = name => dispatch(deleteContact(name));

  return (
    <li>
      {props.name}: {props.number}
      <button
        className="delete-button"
        onClick={() => handleDeleteContact(props.name)}
      >
        Delete
      </button>
    </li>
  );
};
