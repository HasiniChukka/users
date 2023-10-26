const express = require("express");
const Router = require("./routes/routes");
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("", Router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
