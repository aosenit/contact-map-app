import React, { Dispatch, SetStateAction } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

interface INavData {
  href: string;
  title: string;
}

const navListData: INavData[] = [
  {
    href: "/contact",
    title: "Contact",
  },

  {
    href: "/maps",
    title: "Charts and Maps",
  },
];

interface Props {
  setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const Aside = ({ setOpenNav }: Props) => {
  return (
    <ul className="relative grid place-content-center h-full gap-3 lg:p-5">
      <span className="text-red-500 absolute right-5 top-5 text-3xl hover:text-red-500 lg:hidden">
        <AiFillCloseCircle onClick={() => setOpenNav(false)} />
      </span>
      {navListData.map((list: INavData, ind: number) => (
        <NavLink
          end
          to={`${list.href}`}
          className={({ isActive }: any) =>
            isActive
              ? `text-[16px] text-blue-700  `
              : `text-[16px] text-blue-500 hover:text-blue-400 `
          }
          key={`${list.title}${ind}`}
          onClick={() => setOpenNav(false)}
        >
          {list.title}
        </NavLink>
      ))}
    </ul>
  );
};

export default Aside;
