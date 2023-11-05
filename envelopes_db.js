const envelopes_db = [
    {total_budget: "0"}

];


//Create new envelope
let envelopeIdCounter = 1;

const addToDatabase = (title,budget) => {
    const newEnvelope = {
     id: `${envelopeIdCounter++}`,
     title: title,
     budget: budget
    };
    return envelopes_db.push(newEnvelope) 
};

module.exports = {
    envelopes_db,
    addToDatabase
  };

