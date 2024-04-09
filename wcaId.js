

// Fetch JSON data from the URL
fetch('https://www.worldcubeassociation.org/api/v0/persons/2017DAND01')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch JSON data');
        }
        return response.json();
    })
    .then(wcaIdData => {

        
    
        })
    .catch(error => {
        console.error('Error fetching or parsing JSON data:', error);
    });