import React from "react";
import CountUp from "react-countup";
import { MainDataType } from "../../utils/types";
import { SpinnerCircular } from "spinners-react";

const Cards = ({
  data: { cases, recovered, deaths, updated },
}: {
  data: MainDataType;
}) => {
  return (
    <div className="container mx-auto px-4 md:px-0 py-8">
      {!cases ? (
        <SpinnerCircular />
      ) : (
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-6 ">
            <div className=" rounded-lg shadow-md p-6 bg-blue-500 text-white">
              <h2 className="text-gray-100 font-medium text-sm mb-2">
                Infected
              </h2>
              <h3 className="text-3xl font-bold mb-4">
                <CountUp start={0} end={cases} duration={2.5} separator="," />
              </h3>
              <p className="text-gray-100 mb-4">
                {new Date(updated).toLocaleDateString()}
              </p>
              <p className="text-gray-100">
                Number of active cases of Covid-19
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-green-500 text-white rounded-lg shadow-md p-6">
              <h2 className="text-gray-100  font-medium text-sm mb-2">
                Recovered
              </h2>
              <h3 className="text-3xl font-bold mb-4">
                <CountUp
                  start={0}
                  end={recovered}
                  duration={2.5}
                  separator=","
                />
              </h3>
              <p className="text-gray-100  mb-4">
                {new Date(updated).toLocaleDateString()}
              </p>
              <p className="text-gray-100 ">
                Number of recovered from Covid-19
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-red-500 text-white  rounded-lg shadow-md p-6">
              <h2 className="text-gray-100 font-medium text-sm mb-2">Deaths</h2>
              <h3 className="text-3xl font-bold mb-4">
                <CountUp start={0} end={deaths} duration={2.5} separator="," />
              </h3>
              <p className="text-gray-100 mb-4">
                {new Date(updated).toLocaleDateString()}
              </p>
              <p className="text-gray-100">
                Number of deaths caused by Covid-19
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
