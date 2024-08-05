const express = require("express");

const friendsController = require("./friends.controller");
const friendsRouter = express.Router();

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:id", friendsController.getFriend);
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.patch("/:id", friendsController.updateFriend);
friendsRouter.delete("/:id", friendsController.deleteFriend);

module.exports = friendsRouter;
