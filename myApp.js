let express = require("express");
let app = express();

app.use(express.static("public"));

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
