const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3030;
const {appRouter, logger} = require('./router');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(logger);
app.use('/biodata/', appRouter);

app.listen(port, function () {
    console.log('listening on port ' + port);
});
