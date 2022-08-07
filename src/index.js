import express from "express";
import initWebRoute from "./route/web.js";
const app = express();
const url = "https://graphcoloring-js.herokuapp.com/";
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
initWebRoute(app);
app.listen(PORT, () => {
  console.log(`OK: ${PORT}`);
});
