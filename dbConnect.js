const mongoose = require("mongoose");

async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://krishna:vGSwIE1hW10m7BfA@cluster1.yauwo.mongodb.net/Eease?retryWrites=true&w=majority"
    );
    console.log("connected to database");
  } catch (error) {
    console.error("could not connect to database");
  }
}

module.exports = dbConnect;