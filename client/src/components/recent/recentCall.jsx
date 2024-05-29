import React, { useEffect, useState } from 'react';

const Recent = () => {
    const [data, setData] = useState(null);

 const handleFavorite = async (gameId) => {
        try {
            const response = await fetch('/api/saveGame', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ gameId })
            });
            if (response.ok) {
                alert('Game saved to favorites!');
            } else {
                throw new Error('Failed to save game');
            }
        } catch (error) {
            console.error('Error saving game:', error);
        }
    };


    useEffect(() => {
        fetch('https://api.mobygames.com/v1/games/recent')
            .then(response => response.json())
            .then(recentData => {
                setData(recentData.results);

              
                Promise.all(recentData.results.map(game =>
                    fetch(`https://api.mobygames.com/v1/games/${game.id}`)
                        .then(response => response.json())
                        .then(gameDetails => {
                            
                            setData(prevData => ({
                                ...prevData,
                                [game.id]: gameDetails.name
                            }));
                        })
                        .catch(error => console.error('Error fetching game details:', error))
                ));
            })
            .catch(error => console.error('Error fetching recent games:', error));
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    {Object.entries(data).map(([gameId, gameName]) => (
                        <div key={gameId}>
                            {gameName}
                            <button onClick={() => handleFavorite(gameId)}>Favorite</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Recent;