const express = require('express');
const path = require('path');
const cors = require('cors')

const controller = require("./controller")
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors())
app.use(express.json());
app.use("/", controller)

app.listen(port, () => {
  console.log(`server listening at ${port}`)
});