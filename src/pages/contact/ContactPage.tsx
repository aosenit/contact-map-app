import React from "react";
import Empty from "./Empty";
import Contacts from "./Contacts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/state/store";
import { setOpenForm } from "../../utils/state/features/form/formSlice";

const ContactPage = () => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);

  const dispatch = useDispatch();
  return (
    <div className="grid gap-10">
      <div className="flex justify-center">
        <button
          onClick={() => dispatch(setOpenForm(true))}
          className="text-lg bg-gray-400 px-10 py-3 w-fit  border-[1px] border-black hover:bg-gray-300 cursor-pointer"
        >
          Create Contact
        </button>
      </div>
      <h3 className="text-xl text-blue-500 my-4 text-center">
        {contacts.length > 0 && "My Contacts"}
      </h3>
      <div className="">{contacts.length > 0 ? <Contacts /> : <Empty />}</div>
    </div>
  );
};

export default ContactPage;
