const cors = require('cors');
const express = require('express');
const namesRouter = require('./routers/nameList/nameList');
const schedulesRouter = require('./routers/schedules/schedules');
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use('/names', namesRouter );
app.use('/schedules', schedulesRouter );

module.exports = app;