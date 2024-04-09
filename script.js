const fs = require('fs');

try {
    // Read the JSON data from the file
    const jsonData = fs.readFileSync('./comp.json', 'utf8');
    
    // Parse the JSON data into an object
    const compData = JSON.parse(jsonData);

    // Extract events and create a Set of event IDs
    const eventSet = new Set(compData.events.map(event => event.id));
    console.log(eventSet);

    // Define an array to store instances of personRes
    const personResSet = [];

    // Constructor function for personRes objects
    function personRes(name, registrantId, personalBests) {
        this.name = name;
        this.registrantId = registrantId;
        this.personalBests = personalBests;
    }

    // Iterate over persons data and create personRes instances
    const persons = compData.persons;
    for (let index = 0; index < persons.length; index++) {
        const p = persons[index];
        const p1 = new personRes(p.name, p.registrantId, p.personalBests);
        personResSet.push(p1);
    }

    

    // Log the array containing instances of personRes
    console.log(personResSet);

} catch (error) {
    console.error('Error reading or parsing JSON file:', error);
}
