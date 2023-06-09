const app = require("./app");
const connectDatabase = require("./config/database");


// Config
require("dotenv").config();


//Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
})