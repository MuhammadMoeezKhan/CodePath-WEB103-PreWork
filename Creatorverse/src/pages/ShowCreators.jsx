import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';

const ShowCreators = ({ name, url, description, imageURL, creatorId }) => {
  return (
    <Card
      name={name}
      url={url}
      description={description}
      imageURL={imageURL}
      creatorId={creatorId}
    >
    </Card>
  );
};

export default ShowCreators;
