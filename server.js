const express = require("express");
const userRoutes = require("./routes/user");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Listening on 5000");
});
