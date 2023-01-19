// external imports
require('dotenv').config();
const mongoose = require("mongoose");

const DB_URI = `mongodb+srv://bombsoldier:w$t@e@z82hufSWh@cluster0.ld5n3bl.mongodb.net/Fullstack-test?retryWrites=true&w=majority`


async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(DB_URI,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;