const express = require('express');
const envelopesRouter = express.Router();
module.exports = envelopesRouter;
const morgan = require('morgan');

const {
    addToDatabase, envelopes_db,getFromDatabaseById
  } = require('./envelopes_db');


//Get all envelopes
envelopesRouter.get('/', (req,res,next)=>{
    res.send(envelopes_db)
});
//Get envelope by id
envelopesRouter.get('/:id', async(req,res,next)=>{
  const id = req.params.id
  try{
    if (isNaN(id)){
      res.status(400).json({error:'Invalid id. It must be a number'});
      return;
    };
    const result = await getFromDatabaseById(id);
    res.send(result);
  } catch (error) {
    console.error('Error',error);
    res.status(500).json({error:'Internal server error'});
  } 
});


//Create new envelope
  envelopesRouter.post('/', async (req,res,next)=>{
    try{
      const title = req.query.title;
      const budget = req.query.budget;
      if(!title || !budget){
        res.status(400).json({error:"Both title and budget are required."});
      }
      const result = await addToDatabase(title,budget);
      res.status(201).send(result);
      return;
    } catch (error){
      console.error('Error', error);
      res.status(500).json({error:'Internal server error.'})
    };
    
});