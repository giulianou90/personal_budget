const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));

const PORT = process.env.PORT || 4001;

app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)});

const { envelopes_db } = require('./envelopes_db');

app.get('/', (req, res, next) => { 
    res.send(envelopes_db.total_budget);
  });

const envelopesRouter = require ('./envelopes_routes');
app.use('/envelopes', envelopesRouter);