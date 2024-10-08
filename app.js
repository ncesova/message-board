const express = require("express");
const favicon = require("serve-favicon");
const path = require("node:path");
const indexRouter = require("./src/routes/indexRouter");
const main = require("./src/db/populatedb");

const app = express();
const PORT = 3000;
const assetsPath = path.join(__dirname, "/public");

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({extended: true}));
app.use(favicon(path.join(__dirname, "favicon.ico")));

app.use("/", indexRouter);

main().then((res) => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
