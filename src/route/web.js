import express from "express";
import * as appController from "../controller/appController.js";

let router = express.Router();

const initWebRoute = (app) => {
  router.post("/coloringGraph", appController.coloringGraph);
  return app.use("/", router);
};
export default initWebRoute;
