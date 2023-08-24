import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import supabase from '../client';
import Card from '../components/Card/Card';
import './ViewCreator.css'

function ViewCreator() {
  const { creatorId } = useParams();
  const [ creator, setCreator ] = useState(null);
  const navigate = useNavigate();

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
        }
      } catch (error) {
        console.error('Error fetching creator:', error);
      }
    };

    fetchCreator();
  }, [creatorId]);

  const handleSubmit = async (e) => {
    navigate('/'); 
  };

  if (!creator) {
    return <p>Loading...</p>;
  }

  return (
    <div className="creator-details">
      <Card
        name={creator.name}
        url={creator.url}
        description={creator.description}
        imageURL={creator.imageURL}
        creatorId={creator.creatorId}
      >
      </Card>
      <button onClick={handleSubmit} className="back-button">Back to Home</button>
    </div>
  );
}

export default ViewCreator;
