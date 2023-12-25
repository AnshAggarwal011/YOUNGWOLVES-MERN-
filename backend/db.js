const mongoose = require("mongoose");
const mongoDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://anshaggarwal1007:young%401234@cluster0.d2mvc1w.mongodb.net/youngwolves_db"
    )
    .then(async () => {
      console.log("connected");
      
      // Fetch data from the "hoodies" collection
      const hoodiesData = await mongoose.connection.db.collection("hoodies").find({}).toArray();
      global.hoodies = hoodiesData;
      
      // Fetch data from the "hoodietype" collection
      const hoodietypeData = await mongoose.connection.db.collection("hoodietype").find({}).toArray();
      global.hoodietype = hoodietypeData;

      //console.log("hoodies data:", global.hoodies);
      //console.log("hoodietype data:", global.hoodietype);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = mongoDB;
