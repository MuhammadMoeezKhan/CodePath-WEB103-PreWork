import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import supabase from '../client';
import './EditCreator.css';

function EditCreator() {
  const { creatorId } = useParams();
  const navigate = useNavigate(); // Use useNavigate here
  const [creator, setCreator] = useState(null);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('rowId', creatorId)
          .single();
        if (error) {
          console.error('Error fetching creator:', error);
        } else {
          setCreator(data);
          setName(data.name);
          setUrl(data.url);
          setDescription(data.description);
          setImageURL(data.imageURL || '');
        }
      } catch (error) {
        console.error('Error fetching creator:', error);
      }
    };

    fetchCreator();
  }, [creatorId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('creators')
        .update([{ name, url, description, imageURL }])
        .eq('rowId', creatorId);
      if (error) {
        console.error('Error updating creator:', error);
      } else {
        console.log('Creator updated:', data);
        navigate(`/creator/${creatorId}`); 
      }
    } catch (error) {
      console.error('Error updating creator:', error);
    }
  };

  const handleGoBack = () => {
    navigate('/');
  }

  const handleDelete = async () => {
    try {
      const { data, error } = await supabase
        .from('creators')
        .delete()
        .eq('rowId', creatorId);
      if (error) {
        console.error('Error deleting creator:', error);
      } else {
        console.log('Creator deleted:', data);
        navigate('/'); 
      }
    } catch (error) {
      console.error('Error deleting creator:', error);
    }
  };

  if (!creator) {
    return <p>Loading...</p>;
  }

  return (
    <div className="content">
      <h2>Update Content Creator</h2>
      <form onSubmit={handleSubmit}> {/* Added onSubmit here */}
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
            <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
            </label>
            <br />
            <button className="buttons" onClick={handleSubmit} type="submit">Update Creator</button>
      </form>
      <button className="buttons" onClick={handleDelete}>Delete Creator</button>
      <button className="buttons" onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default EditCreator;
