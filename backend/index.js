const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // enable passing cookies, authentication headers, etc.
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!!!!!!!!");
});
app.use(express.json());
app.use("/api", require("./routes/createuser"));
app.use("/api", require("./routes/DisplayData"));
app.use("/api", require("./routes/OrderData"));
app.use("/api", require("./routes/myOrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
