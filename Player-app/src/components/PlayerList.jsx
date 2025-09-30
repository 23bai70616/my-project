import React, { useState } from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = () => {
  const [players] = useState([
    { id: 1, name: 'Adarsh', role: 'Batsman' },
    { id: 2, name: 'Saxam', role: 'Bowler' },
    { id: 3, name: 'Anas', role: 'Allrounder' },
    
  ]);

  const [searchRole, setSearchRole] = useState('');

  const filteredPlayers = players.filter(player =>
    player.role.toLowerCase().includes(searchRole.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Player List</h1>
      <input
        type="text"
        placeholder="Search by role..."
        value={searchRole}
        onChange={(e) => setSearchRole(e.target.value)}
        style={{ padding: '5px', marginBottom: '20px', width: '200px' }}
      />

      <div>
        {filteredPlayers.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;