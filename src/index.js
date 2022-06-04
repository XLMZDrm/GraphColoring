// import express from "express";
// import configViewEngine from "./configs/viewEngine";
// import initWebRoute from "./route/web";
// const herokuAwake = require("heroku-awake");
// const app = express();
// const url = "https://graphcoloring-js.herokuapp.com/";
// const PORT = process.env.PORT || 3000;
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// configViewEngine(app);
// initWebRoute(app);
// app.use((req, res) => {
//   return res.redirect("/");
// });
// app.listen(PORT, () => {
//   herokuAwake(url);
//   const time = 10;
//   herokuAwake(url, time);
// });
import { Graph } from "./model/Graph";
import { Greedy } from "./model/Greedy";
var req = {
  body: {
    soDinh: 6,
    0: "4;5;6",
    1: "4;5;6",
    2: "4;5;6",
    3: "1;2;3",
    4: "1;2;3",
    5: "1;2;3",
  },
};
var newGr = new Graph(req);
console.log(newGr);
var gr = new Greedy(newGr);
console.log(gr.toMau());
