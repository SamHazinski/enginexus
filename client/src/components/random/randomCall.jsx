import React, { useEffect, useState } from 'react';

const RandomCall = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/randomGames');
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                    res.setHeader('Content-Type', 'application/json'); // Set Content-Type header to JSON
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    {data.map(({ gameId }) => (
                        <div key={gameId}>
                           
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RandomCall;