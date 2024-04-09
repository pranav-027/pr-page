// Fetch JSON data from the URL
fetch('https://live.worldcubeassociation.org/api/competitions/4212/wcif')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch JSON data');
        }
        return response.json();
    })
    .then(async compData => {
        
        function getResults(rounds) {
            const results = rounds.map(element => element.results);
            return results;
        }

        async function getPRs(wcaId) {
            try {
                const response = await fetch(`https://www.worldcubeassociation.org/api/v0/persons/${wcaId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch personal records data');
                }
                const wcaIdData = await response.json();
                return wcaIdData.personal_records;
            } catch (error) {
                console.error(`Error fetching personal records for ${wcaId}:`, error);
                return null; // Return null or handle the error appropriately
            }
        }

        function countPRs(value,key,prCount) {
            value.forEach(roundArr => {
                
            });
        }


        const events = compData.events;
        const eventRoundMap = new Map();
        
        events.forEach(element => {
            const key = element.id;
            const value = getResults(element.rounds);
            eventRoundMap.set(key, value);
        });
        
        console.log(eventRoundMap);

        const personPrMap = new Map();
        const persons = compData.persons;
        for (const person of persons) {
            if (person.wcaId != null && person.registrantId != null && person.registration.status == 'accepted') {
                const prData = await getPRs(person.wcaId);
                personPrMap.set(person.registrantId, prData);
            }
        }


        const prCount = new Map();
        for (const person of persons) {
            if (person.wcaId != null && person.registrantId != null && person.registration.status == 'accepted') {
                prCount.set(person.registrantId, 0);
            }
        }


        eventRoundMap.forEach((value, key) => {
            countPRs(key,value,prCount);
        });

    
    })
    .catch(error => {
        console.error('Error fetching or parsing JSON data:', error);
    });
