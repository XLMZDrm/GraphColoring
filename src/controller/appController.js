import Graph from "../models/Graph.js";
import Greedy from "../models/Greedy.js";
import WelchPowell from "../models/WelchPowell.js";
import ToMauTheoBac from "../models/ToMauTheoBac.js";
var colors_list = [
  "blank",
  "red",
  "green",
  "blue",
  "brown",
  "purple",
  "darkblue",
  "orange",
  "navy",
  "gold",
  "grey",
  "black",
  "pink",
  "silver",
  "dark grey",
  "magenta",
  "yellow",
];
let coloringGraph = async (req, res) => {
  try {
    var graph = new Graph(req.body);
    var color;
    if (req.body.algorithm == "greedy") {
      color = new Greedy(graph).toMau();
    } else if (req.body.algorithm == "welch") {
      color = new WelchPowell(graph).toMau();
    } else if (req.body.algorithm == "byLevel") {
      color = new ToMauTheoBac(graph).toMau();
    }
    for (var prop in color) {
      color[prop] = colors_list[color[prop]];
    }
    var coloredGrap = { graph: graph, color: color };
    return res.json(coloredGrap);
  } catch (error) {
    console.log(error);
    return res.status(404).end();
  }
};
export { coloringGraph };
