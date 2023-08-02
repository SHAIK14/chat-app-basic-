const express = require("express");
const app = express();
const loginroutes = require("./routes/login");
const dataroutes = require("./routes/data");
app.use(express.urlencoded({ extended: true }));
app.use(loginroutes);
app.use(dataroutes);
app.listen(3300);
