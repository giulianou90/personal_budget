const express = require('express');
const envelopesRouter = express.Router();
module.exports = envelopesRouter;
const morgan = require('morgan');

const {
    addToDatabase, envelopes_db
  } = require('./envelopes_db');

//Get all envelopes
envelopesRouter.get('/', (req,res,next)=>{
    res.send(envelopes_db)
});

//Create new envelope
  envelopesRouter.post('/', (req,res,next)=>{
    const title = req.query.title;
    const budget = req.query.budget;
        addToDatabase(title, budget);
        res.status(201).send();
});