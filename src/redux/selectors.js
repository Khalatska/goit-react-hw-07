import { createSelector } from "@reduxjs/toolkit";

export const selectContact = (state) => state.contacts.contacts.items;
export const selectLoading = (state) => state.contacts.contacts.loading;

export const selectError = (state) => state.contacts.contacts.error;
export const selectFilter = (state) => state.filter.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContact, selectFilter],
  (contact, filter) => {
    return contact.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
