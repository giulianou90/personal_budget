let envelopes_db = [
    {total_budget: 0}

];


//Create new envelope
let envelopeIdCounter = 1;

const addToDatabase = (title,budget) => {
    const newEnvelope = {
     id: `${envelopeIdCounter++}`,
     title: title,
     budget: budget
    };
     envelopes_db.push(newEnvelope);
     return newEnvelope;     
};

//get envelope by id
const getFromDatabaseById = (id) => {
    for (const element of envelopes_db) {
        if (element.id === id) {
          return element;
        }
      }
      return null;
  };


module.exports = {
    envelopes_db,
    addToDatabase,
    getFromDatabaseById
  };

