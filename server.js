const express = require("express");
const path = require("path");
const router = require("./routes/posts");

const app = express();
const port = process.env.PORT || 9000;

// to parse json data
app.use(express.json());

// to parse form data
app.use(express.urlencoded({ extended: false }));

// set a static folder
// app.use(express.static("./public"));

app.use("/api/v1/posts", router);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.listen(port, () => console.log(`The server is running on port ${port}`));
