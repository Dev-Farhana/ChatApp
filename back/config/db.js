const mongoose = require("mongoose");

const connectDB = async() => {
    try {
      const connect =  await mongoose.connect(process.env.MONGO_URL);
      console.log(`MONGO_DB Connected!! ${connect.connection.host}`);
    } catch (error) {
        console.log(`Err ==> ${error}`);
        process.exit();
    }
}

module.exports = connectDB;

