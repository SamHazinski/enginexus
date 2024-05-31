

const search = () => {
    return fetch('/api/allGames', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;
