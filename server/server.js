/*
 * Modules
 */

import express from 'express';
import * as config from './config/config';
import bodyParser from 'body-parser';
import cors from 'cors';

/*
 * Configure App
 */

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(`${__dirname}/../public`));



app.listen(config.port, function(){
  console.log(`Now listening on port ${config.port}`);
});
