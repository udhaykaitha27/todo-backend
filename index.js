const express = require("express");
const cors = require("cors");
const env = require("dotenv");
env.config();

const routers = require('./routes/router')
const connection = require('./dbconnection/connection');

connection();


const app = express();
app.use(cors());

app.use(express.json());
app.use('/',routers);






const port = process.env.PORT;
app.listen(port, () =>
  console.log(`listening on ${port}  ... http://localhost:${port}`)
);