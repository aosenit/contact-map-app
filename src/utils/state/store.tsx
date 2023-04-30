import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./features/contacts/contactSlice";
import formReducer from "./features/form/formSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    form: formReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { contact: ContactState, form: FormState }
export type AppDispatch = typeof store.dispatch;
