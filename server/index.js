// index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const personRoutes = require("./routes/useRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Route
app.use("/api", personRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
