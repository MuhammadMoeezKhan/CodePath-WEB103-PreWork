import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle, AiOutlineEdit } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import "./Card.css";

const Card = ({ name, url, description, imageURL, creatorId }) => {
  return (
    <div
      className="creator-card"
      style={{
        backgroundImage: `url(${imageURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm81P7TSBIArdAfY2iNZysOqa5FDoCqxG-IQ&usqp=CAU"})`,
        backgroundSize: "cover",
      }}
    >
      <div className="card-overlay">
        <div className="card-icons">
          <Link to={`/creator/${creatorId}`} className="icon-link">
            <AiOutlineInfoCircle className="icon" />
          </Link>
          <a href={url} className="icon-link" target="_blank" rel="noopener noreferrer">
            <FaGlobe className="icon" />
          </a>
          <Link to={`/edit/${creatorId}`} className="icon-link">
            <AiOutlineEdit className="icon" />
          </Link>
        </div>
        <div className="creator-details">
          <h2>{name}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

