import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./contactsOps";
import { deleteContact } from "./contactsOps";

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const handlePending = (state) => {
  state.contacts.loading = true;
};

const handleRejected = (state, action) => {
  state.contacts.loading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const contactIndex = state.contacts.items.findIndex(
          (state) => state.id === action.payload
        );
        state.contacts.items.splice(contactIndex, 1);
      })
      .addCase(deleteContact.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
