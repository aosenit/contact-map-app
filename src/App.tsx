import React, { useEffect, useState } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";

function App({ children }: any) {
  const [openNav, setOpenNav] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // check initial screen width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setOpenNav(isLargeScreen);
  }, [isLargeScreen]);

  return (
    <div className="min-h-screen w-full">
      <header className="sticky top-0 left-0 w-full h-[10vh] bg-blue-600 text-white flex justify-center items-center z-10">
        <Header setOpenNav={setOpenNav} />
      </header>
      <div className="flex h-full">
        {openNav && (
          <aside className="bg-white absolute left-0 top-0 z-20 h-full w-full lg:top-[10vh] lg:sticky lg:w-[20%] lg:z-0">
            <Aside setOpenNav={setOpenNav} isLargeScreen={isLargeScreen} />
          </aside>
        )}
        <main className="w-full lg:w-[80%] bg-gray-300 min-h-[90vh]">
          {children}
        </main>
      </div>
    </div>
  );
}

export default App;
