const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const { notFound, errorHandler } = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
dbConnect();
// app.use("/", (req, res) => {
//   res.send("Hello from server Side");
// });

app.use(bodyParser.json());

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server runs : ${PORT}`);
});
