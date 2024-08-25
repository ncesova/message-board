const {Router} = require("express");
const {v4: uuidv4} = require("uuid");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.getIndex);
indexRouter.get("/new", indexController.getNew);
indexRouter.post("/new", indexController.postNew);
indexRouter.get("/message/:id", indexController.getMessageById);

module.exports = indexRouter;
