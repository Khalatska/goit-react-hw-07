import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, actions) {
      state.contacts.items.push(actions.payload);
    },
    deleteContact(state, actions) {
      const contactIndex = state.contacts.items.findIndex(
        (state) => state.id === actions.payload
      );
      state.contacts.items.splice(contactIndex, 1);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      }),
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
