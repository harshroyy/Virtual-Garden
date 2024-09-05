import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import HerbCard from '../components/BookCard/BookCard'; // Updated to match "HerbCard"

const AllHerbs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/get-all-herbs");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className='herb-page bg-green-50 min-h-screen px-12 py-8'>
      {/* Herb Collection Section */}
      <section className="my-12">
        <h4 className="herb-heading font-light text-3xl text-green-800 mb-8">Explore Our Herb Collection</h4>
        {!data.length && <div className="flex items-center justify-center min-h-screen"><Loader/></div>}
        <div className="herb-grid my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item, i) => (
            <div key={i} className="herb-card hover:shadow-lg transition duration-300">
              <HerbCard data={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllHerbs;
