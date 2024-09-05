import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import "./ViewDataDetails.css"; // Linking the CSS file

const ViewDataDetails = () => {
  const { id } = useParams();
  const [Data, setData] = useState();
  const [activeTab, setActiveTab] = useState("description");

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
        <div className="herb-details-container">
          {/* Herb Image Section */}
          <div className="herb-image-section">
            <div className="blur-background"></div>
            <img src={Data.image} alt="Herb" className="herb-main-image" />
          </div>

          {/* Herb Details Section */}
          <div className="herb-info-section">
            <h1 className="herb-title flex justify-center items-center">{Data.botanicalName}</h1>
            <p className="herb-common-names">
              {Data.commonNames && Object.values(Data.commonNames).join(", ")}
            </p>

            {/* Tab Navigation */}
            <div className="tab-navigation">
              <button
                className={`tab-button ${
                  activeTab === "description" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`tab-button ${
                  activeTab === "uses" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("uses")}
              >
                Medicinal Uses
              </button>
              <button
                className={`tab-button ${
                  activeTab === "cultivation" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("cultivation")}
              >
                Cultivation
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === "description" && (
                <p className="herb-description">{Data.description}</p>
              )}

              {activeTab === "uses" && (
                <>
                  <p className="section-title">Medicinal Uses:</p>
                  <ul className="herb-uses-list">
                    {Data.medicinalUses &&
                      Data.medicinalUses.map((use, index) => (
                        <li key={index}>{use}</li>
                      ))}
                  </ul>
                </>
              )}

              {activeTab === "cultivation" && (
                <div className="herb-cultivation">
                  <p><strong>Soil:</strong> {Data.cultivation.soil}</p>
                  <p><strong>Climate:</strong> {Data.cultivation.climate}</p>
                  <p><strong>Propagation:</strong> {Data.cultivation.propagation}</p>
                  <p><strong>Watering:</strong> {Data.cultivation.watering}</p>
                  <p><strong>Maintenance:</strong> {Data.cultivation.maintenance}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="loading-screen">
          <Loader />
        </div>
      )}
    </>
  );
};

export default ViewDataDetails;
