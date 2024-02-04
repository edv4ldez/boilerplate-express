let express = require("express");
let app = express();

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
