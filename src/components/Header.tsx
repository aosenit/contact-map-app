import React, { Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router";
import { toSentenceCase } from "../utils/functions/functions";
import { AiOutlineMenu } from "react-icons/ai";

interface Props {
  setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setOpenNav }: Props) => {
  const { pathname } = useLocation();

  return (
    <div className="relative flex justify-center w-full">
      <h1 className="text-xl ">
        {toSentenceCase(pathname.replace("/", ""))} {""} Page
      </h1>

      <AiOutlineMenu
        className="text-2xl text-white absolute right-5 top-0"
        onClick={() => setOpenNav(true)}
      />
    </div>
  );
};

export default Header;
