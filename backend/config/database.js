const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      //useCreateIndexes: true,
      useUnifiedTopology: true,
      //useFindAndModify: false
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log("There is an error" , err)
    });
};


module.exports = connectDatabase;