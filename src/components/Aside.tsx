import React, { Dispatch, SetStateAction, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth < 768);
    setOpenNav(!isMobile);
  });

  const handleNav = () => {
    setOpenNav(false);
  };

  return (
    <>
      {isMobile ? (
        <div className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-white p-4 lg:hidden">
          <ul className="flex flex-col gap-4 my-20">
            {navListData.map((list: INavData, ind: number) => (
              <NavLink
                key={`${list.title}${ind}`}
                to={list.href}
                className={({ isActive }: any) =>
                  isActive
                    ? "text-xl text-blue-700"
                    : "text-xl text-blue-500 hover:text-blue-400"
                }
                onClick={handleNav}
              >
                {list.title}
              </NavLink>
            ))}
          </ul>
          <span
            className="absolute top-4 right-4 text-red-500 text-3xl cursor-pointer"
            onClick={handleNav}
          >
            <AiFillCloseCircle />
          </span>
        </div>
      ) : (
        <ul className="relative lg:grid place-content-center h-full gap-3 lg:p-5">
          {navListData.map((list: INavData, ind: number) => (
            <NavLink
              end
              to={list.href}
              className={({ isActive }: any) =>
                isActive
                  ? "text-xl text-blue-700"
                  : "text-xl text-blue-500 hover:text-blue-400"
              }
              key={`${list.title}${ind}`}
            >
              {list.title}
            </NavLink>
          ))}
        </ul>
      )}
    </>
  );
};

export default Aside;
