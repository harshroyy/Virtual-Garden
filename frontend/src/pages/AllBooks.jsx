import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import HerbCard from '../components/BookCard/BookCard'; // Updated import

const AllBooks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/get-all-herbs"); // Updated endpoint
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className='bg-green-50 min-h-screen px-12 py-8'>
      <h4 className="font-thin text-2xl text-green-800">Entire Herb Collection</h4>
      {!data.length && <div className="flex items-center justify-center min-h-screen"><Loader/></div>}
      <div className="my-8 text-gray-900 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.map((item, i) => (
          <div key={i}>
            <HerbCard data={item} /> {/* Updated to HerbCard */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
