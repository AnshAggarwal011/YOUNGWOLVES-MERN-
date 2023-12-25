const mongoose = require("mongoose");
const DB = process.env.DATABASE;
const mongoDB = async () => {
  await mongoose
    .connect(DB)
    .then(async () => {
      console.log("connected");

      // Fetch data from the "hoodies" collection
      const hoodiesData = await mongoose.connection.db
        .collection("hoodies")
        .find({})
        .toArray();
      global.hoodies = hoodiesData;

      // Fetch data from the "hoodietype" collection
      const hoodietypeData = await mongoose.connection.db
        .collection("hoodietype")
        .find({})
        .toArray();
      global.hoodietype = hoodietypeData;

      //console.log("hoodies data:", global.hoodies);
      //console.log("hoodietype data:", global.hoodietype);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = mongoDB;
