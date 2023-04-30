import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  openForm: boolean;
  enableEdit: boolean;
  editValue: {
    firstName: string;
    lastName: string;
    status: string;
    id?: number | null | string;
  };
}

const initialState: FormState = {
  openForm: false,
  enableEdit: false,
  editValue: {
    firstName: "",
    lastName: "",
    status: "",
    id: null,
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setOpenForm: (state, action: PayloadAction<boolean>) => {
      state.openForm = action.payload;
    },
    setEnableEdit: (state, action: PayloadAction<boolean>) => {
      state.enableEdit = action.payload;
    },
    setEditValue: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        status: string;
        id: number | null;
      }>
    ) => {
      state.editValue = action.payload;
    },
  },
});

export const { setOpenForm, setEnableEdit, setEditValue } = formSlice.actions;

export default formSlice.reducer;
