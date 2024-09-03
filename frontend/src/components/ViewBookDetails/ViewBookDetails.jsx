import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";

const ViewDataDetails = () => {
  const { id } = useParams();
  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1000/api/v1/get-herb-by-id/${id}`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetch();
  }, [id]);

  return (
    <>
      {Data ? (
        <div className="px-4 md:px-12 py-8 bg-green-50 text-white flex gap-8 flex-col md:flex-row relative">
          <div className="bg-green-200 rounded p-4 h-[60vh] lg:h-[88vh] w-full lg:w-3/6 flex items-center justify-center relative">
            <div
              className="absolute inset-0 rounded-xl z-0"
              style={{
                backgroundImage: `url(${Data.image})`,
                filter: "blur(50px)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.7,
              }}
            ></div>
            <img
              src={Data.image}
              alt="Herb"
              className="h-[50vh] lg:h-[70vh] rounded-xl relative z-10"
            />
          </div>
          <div className="p-4 w-full lg:w-3/6">
            <h1 className="text-4xl text-green-700 font-semibold">
              {Data.botanicalName}
            </h1>
            <p className="text-green-600 mt-1">
              {Data.commonNames && Object.values(Data.commonNames).join(', ')}
            </p>
            <p className="text-green-600 mt-4 text-xl font-thin">
              {Data.description}
            </p>
            <p className="mt-4 text-green-600 font-semibold">Habitat:</p>
            <p className="text-green-400 mt-1">{Data.habitat}</p>
            <p className="mt-4 text-green-600 font-semibold">Medicinal Uses:</p>
            <ul className="list-disc list-inside text-green-400 mt-1">
              {Data.medicinalUses && Data.medicinalUses.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
            <p className="mt-4 text-green-600 font-semibold">Cultivation:</p>
            <div className="text-green-400 mt-1">
              <p><strong>Soil:</strong> {Data.cultivation.soil}</p>
              <p><strong>Climate:</strong> {Data.cultivation.climate}</p>
              <p><strong>Propagation:</strong> {Data.cultivation.propagation}</p>
              <p><strong>Watering:</strong> {Data.cultivation.watering}</p>
              <p><strong>Maintenance:</strong> {Data.cultivation.maintenance}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen bg-green-900 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default ViewDataDetails;
