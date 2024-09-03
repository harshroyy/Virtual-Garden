import React from "react";
import { Link } from "react-router-dom";

const HerbCard = ({ data }) => {
  return (
    <Link to={`/get-herb-by-id/${data._id}`}>
      <div className="bg-white rounded-lg p-4 flex flex-col transform transition-transform duration-300 ease-out hover:scale-105 shadow-lg border border-green-300 h-[600px] overflow-hidden hover:bg-green-50">
        <div className="relative bg-white rounded-t-lg overflow-hidden">
          <img
            src={data.image}
            alt={data.botanicalName}
            className="w-full h-[300px] object-cover rounded-t-lg transition-transform duration-300 ease-out hover:scale-105"
          />
        </div>
        <div className="mt-4 flex flex-col flex-grow p-4">
          <h2 className="text-2xl font-bold text-green-800 truncate">{data.botanicalName}</h2>
          <p className="mt-2 text-green-700 font-medium text-sm truncate">
            {data.commonNames ? Object.values(data.commonNames).join(', ') : 'No common names'}
          </p>
          <p className="mt-2 text-green-900 font-light text-lg truncate">{data.habitat}</p>
        </div>
      </div>
    </Link>
  );
};

export default HerbCard;
