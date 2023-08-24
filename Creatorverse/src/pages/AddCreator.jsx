import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import supabase from '../client';
import './AddCreator.css'; 

function AddCreator() {
  const [name, setName] = useState('');
  const navigate = useNavigate(); // Use useNavigate here
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('creators').insert([
        { name, url, description, imageURL },
      ]);
      if (error) {
        console.error('Error adding creator:', error);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Error adding creator:', error);
    }
  };

  const handleGoBack = () => {
    navigate('/');
  }

  return (
    <div>
      <h2>Add Content Creator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={imageURL} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <div className="form">
          <button className="add-creator-button" type="submit"> Add Creator </button>
          </div>
      </form>
      <div className="form">
      <button className="add-creator-button" onClick={handleGoBack}> Go Back </button>
      </div>
    </div>
  );
}

export default AddCreator;
