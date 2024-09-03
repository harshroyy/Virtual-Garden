import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import HerbCard from "../BookCard/BookCard"; // Renamed BookCard to HerbCard

const RecentlyAdded = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/get-recent-herbs");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching recent herbs:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="text-green-100 mt-8 px-4 bg-green-100">
      <h4 className="font-thin text-2xl text-green-900">New Featured Herbs</h4>
      {!data.length && <div className="flex items-center justify-center my-8"><Loader /></div>}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.map((herb, i) => (
          <HerbCard key={i} data={herb} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
