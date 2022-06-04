import express from "express";
import appController from "../controller/appController";
import getController from "../controller/getController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getController.getHomePage);
};
export default initWebRoute;
