

const search = () => {
    return fetch('/api/allGames', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export default search;
