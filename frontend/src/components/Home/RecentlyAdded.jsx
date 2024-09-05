import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import HerbCard from "../BookCard/BookCard"; // Ensure HerbCard component matches the new Herb design

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
    <div className="recently-added bg-green-50 py-12 px-6 lg:px-16">
      <h4 className="text-3xl font-semibold text-green-900 text-center mb-6">
        Popular Herbs
      </h4>
      {!data.length && (
        <div className="flex items-center justify-center my-8">
          <Loader />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((herb, i) => (
          <HerbCard key={i} data={herb} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
