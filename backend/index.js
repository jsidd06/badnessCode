const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
