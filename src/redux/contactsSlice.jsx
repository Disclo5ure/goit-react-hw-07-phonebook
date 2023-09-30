import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      if (!state.find(contact => contact.name === action.payload.name))
        state.push(action.payload);
      else alert(`${action.payload.name} is already in contacts.`);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.name !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
