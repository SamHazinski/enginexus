import React, { useState, useEffect } from 'react';

const SavedGames = () => {
    const [savedGames, setSavedGames] = useState();

    useEffect(() => {
       fetch ('/api/savedGames')
            .then(response => setSavedGames(response.data))
            .catch(error => console.error('Error fetching saved games:', error));
    }, );

    return (
        <div>
            <h2>Saved Games</h2>
            <ul>
                {savedGames.map(savedGame => (
                    <li key={savedGame._id}>{savedGame.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SavedGames;