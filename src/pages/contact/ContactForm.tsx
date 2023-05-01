import React, { ChangeEvent, useEffect, useState } from "react";
import { IContact } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  editContact,
} from "../../utils/state/features/contacts/contactSlice";

import { makeid } from "../../utils/functions/functions";
import {
  setEnableEdit,
  setOpenForm,
} from "../../utils/state/features/form/formSlice";
import { RootState } from "../../utils/state/store";

const ContactForm = () => {
  const dispatch = useDispatch();
  const editValue = useSelector((state: RootState) => state.form.editValue);
  const edit = useSelector((state: RootState) => state.form.enableEdit);
  const [data, setData] = useState<IContact>({
    id: makeid(20),
    firstName: "",
    lastName: "",
    status: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (edit) {
      dispatch(setOpenForm(false));
      dispatch(setEnableEdit(false));
      dispatch(editContact(data));
      alert("Contact Edited Successfully");
      return;
    } else dispatch(setOpenForm(false));
    dispatch(addContact(data));
    alert("Contact Created Successfully");
  };

  useEffect(() => {
    if (edit && editValue) {
      setData(editValue);
    }
  }, []);

  return (
    <form
      className="flex flex-col h-full gap-5 items-center justify-center"
      onSubmit={submit}
    >
      <h3 className="text-center text-xl text-blue-500">
        {edit ? "Edit Contact Screen" : "Create Contact Screen"}
      </h3>

      <div className="bg-white h-[50%] w-full lg:w-[50%] p-5 lg:px-10 flex flex-col gap-5 justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
          <label htmlFor="firstName" className="w-fit whitespace-nowrap">
            First Name
          </label>
          <input
            type="text"
            placeholder="e.g Jon"
            name="firstName"
            id="firstName"
            className="border-[1px] border-black p-2 w-full "
            value={data.firstName}
            onChange={onChange}
            required
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
          <label htmlFor="lastName" className="w-fit whitespace-nowrap">
            Last Name
          </label>
          <input
            type="text"
            placeholder="e.g Doe"
            name="lastName"
            id="lastName"
            className="border-[1px] border-black p-2 w-full "
            value={data.lastName}
            onChange={onChange}
            required
          />
        </div>

        <div className="flex lg:flex-row lg:items-center gap-12">
          <label htmlFor="status" className="w-fit whitespace-nowrap">
            Status
          </label>

          <div className="flex flex-col ">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="status"
                id="active"
                value="active"
                checked={data.status === "active"}
                onChange={onChange}
                className="text-black"
                required
              />

              <label htmlFor="status">Active</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="status"
                id="inactive"
                value="inactive"
                checked={data.status === "inactive"}
                onChange={onChange}
                className="text-black"
                required
              />

              <label htmlFor="status">Inactive</label>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="border-[1px] bg-gray-400 border-black hover:bg-gray-300 w-fit px-10 py-2"
      >
        {edit ? "Save Edit Button" : "Save Button"}
      </button>
    </form>
  );
};

export default ContactForm;
