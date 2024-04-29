const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const con = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = dbConnect;
