const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 9000;

const posts = [
  { id: 1, body: "Post 1" },
  { id: 2, body: "Post 2" },
  { id: 3, body: "Post 3" },
];

// set a static folder
// app.use(express.static("./public"));

app.get("/posts", (req, res) => {
  res.json(posts);
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.listen(port, () => console.log(`The server is running on port ${port}`));
