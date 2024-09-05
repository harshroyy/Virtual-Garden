import React from "react";
import { Link } from "react-router-dom";
import './HerbCard.css'; // Linking the CSS file

const HerbCard = ({ data }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <Link to={`/get-herb-by-id/${data._id}`}>
      <div className="herb-card-container">
        <div className="herb-card-image-container">
          <img
            src={data.image}
            alt={data.botanicalName}
            className="herb-card-image"
          />
        </div>
        <div className="herb-card-content">
          <h2 className="herb-card-title">{data.botanicalName}</h2>
          <p className="herb-card-habitat">
            {truncateText(data.habitat, 80)} {/* Limiting habitat to ~80 characters */}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HerbCard;
