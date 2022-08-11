import express from "express";
import * as appController from "../controller/appController.js";

let router = express.Router();

router.post("/coloringGraph", appController.coloringGraph);

export default router;
