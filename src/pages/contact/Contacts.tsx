import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/state/store";
import { deleteContact } from "../../utils/state/features/contacts/contactSlice";
import {
  setEditValue,
  setEnableEdit,
} from "../../utils/state/features/form/formSlice";

const Contacts = () => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);

  const dispatch = useDispatch();
  const items = contacts.map((item, index) => (
    <div
      className="bg-white h-fit p-3 flex flex-col gap-2"
      key={`${index}${item.lastName}`}
    >
      <h4 className="">
        First Name: <span className="text-gray-500">{item.firstName}</span>
      </h4>
      <h4 className="">
        Last Name: <span className="text-gray-500">{item.lastName}</span>
      </h4>
      <h4 className="">
        Status: <span className="text-gray-500">{item.status}</span>
      </h4>

      <div className="flex gap-1">
        <button
          onClick={() => {
            dispatch(setEnableEdit(true));
            dispatch(
              setEditValue({
                firstName: item.firstName,
                lastName: item.lastName,
                status: item.status,
                id: item.id as any,
              })
            );
          }}
          className="bg-green-400 hover:bg-green-500  text-white border-none rounded-sm px-4"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteContact(item))}
          className="bg-red-400 hover:bg-red-500 text-white border-none rounded-sm px-4"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className="py-2 px-5   mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{items}</div>
    </div>
  );
};

export default Contacts;
