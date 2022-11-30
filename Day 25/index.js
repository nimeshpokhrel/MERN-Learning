const express = require("express");
const authRoutes = require("./routes/authRoutes")

const app = express();

app.use(express.json({ urlencoded: true }));

app.use(authRoutes)

app.listen(8000, () => {
  console.log("Server Started!");
});
