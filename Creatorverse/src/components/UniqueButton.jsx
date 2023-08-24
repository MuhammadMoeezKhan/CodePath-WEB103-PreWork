import React from "react";
import { useNavigate } from 'react-router-dom';


const UniqueButton = ({ targetPath, label }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(targetPath);
    };
  
    return (
      <a href="#" role="button" class="contrast outline" onClick={handleClick}>{label}</a>
    );
}

export default UniqueButton ;