import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../../../types";
import { toast } from "react-toastify";

interface ContactsState {
  contacts: IContact[];
}

const initialState: ContactsState = {
  contacts: JSON.parse(localStorage.getItem("contacts") || "[]"),
};

export const contactsSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<IContact>) => {
      state.contacts.push(action.payload);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    editContact: (state, action: PayloadAction<IContact>) => {
      const { id, firstName, lastName, status } = action.payload;
      const editedContact = { id, firstName, lastName, status };
      const contacts = state.contacts.map((contact) =>
        contact.id === id ? editedContact : contact
      );
      state.contacts = contacts;
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteContact: (state, action: PayloadAction<IContact>) => {
      const { firstName, lastName } = action.payload;
      state.contacts = state.contacts.filter(
        (c) => c.firstName !== firstName || c.lastName !== lastName
      );
      toast.success(
        `Contact of ${firstName} ${lastName} Deleted Successfully!`,
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
