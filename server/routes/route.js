import express from "express";

import { addUser, getUsers } from "../controllers/user-controller.js";

import {
  newConversation,
  getConversation,
} from "../controllers/conversation-controller.js";

import { newMessage, getMessages } from "../controllers/message-controller.js";

import { uploadFile } from "../controllers/image-Controller.js";

import upload from "../utils/upload.js";

import { getImage } from "../controllers/image-Controller.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post("/message/add", newMessage);
route.get("/messages/get/:id", getMessages);
route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename", getImage);

export default route;
