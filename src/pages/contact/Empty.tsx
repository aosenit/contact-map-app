import { AiFillCloseCircle } from "react-icons/ai";

const Empty = () => {
  return (
    <div className=" border-[1px] border-black py-2 px-5 lg:w-[500px]  mx-auto min-h-[20vh] relative flex gap-4 items-start ">
      <AiFillCloseCircle className="text-[3rem]" />
      <div className="text-[16px] flex flex-col gap-2 w-full  justify-center h-full">
        <h4> No Contact Found</h4>
        <h4> Please add Contact with</h4>
        <h4> Create Contact Button</h4>
      </div>
    </div>
  );
};

export default Empty;
