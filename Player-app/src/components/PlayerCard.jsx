import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '5px', borderRadius: '5px' }}>
      <h3>{player.name}</h3>
      <p>ID: {player.id}</p>
      <p>Role: {player.role}</p>
    </div>
  );
};

export default PlayerCard;
