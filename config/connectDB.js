const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = () => {

  
  mongoose.connect(
    "mongodb+srv://nad:Cilwazoldik1881993@cluster0.dtjp6.mongodb.net/mongooseChP?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
       (err) => {
      if (err) {
        console.log(err);
      } else console.log("database connected");
    }
  );
};
module.exports = connectDB;

