import { createSlice } from '@reduxjs/toolkit';

import {
  addNewContact,
  getAllContacts,
  deleteContactById,
} from './contactOperations';

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectLoading = state => state.contacts.contacts.isLoading;

const handlePending = (state, { payload }) => {
  state.contacts.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    onFilterChange: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder

      .addCase(addNewContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items.unshift(payload);
        state.error = null;
      })

      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
        state.error = null;
      })

      .addCase(deleteContactById.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          ({ id }) => id !== payload
        );
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactReducer = contactsSlice.reducer;
export const { onFilterChange } = contactsSlice.actions;
