

// Fetch JSON data from the URL
fetch('https://live.worldcubeassociation.org/api/competitions/4212/wcif')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch JSON data');
        }
        return response.json();
    })
    .then(compData => {
        // Extract events and create a Set of event IDs
        const eventSet = new Set(compData.events.map(event => event.id));
        console.log(eventSet);

        // Define an array to store instances of personRes

        // Constructor function for personRes objects

        const personData = new Map();
        
        // Iterate over persons data and create personRes instances
        const persons = compData.persons;
        for (let index = 0; index < persons.length; index++) {
            const p = persons[index];
           if (p.registrantId !==null && p.registration.status === "accepted" ) {
            const key = p.registrantId;
            const value =  p.wcaId;
            personData.set(key,value);
           }
        }
           // console.log(persons);
        // Log the array containing instances of personRes
    
        
        console.log(personData);
        
    
    })
    .catch(error => {
        console.error('Error fetching or parsing JSON data:', error);
    });