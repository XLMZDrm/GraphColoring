import Graph from "../models/Graph";
import Greedy from "../models/Greedy";
import WelchPowell from "../models/WelchPowell";
import ToMauTheoBac from "../models/ToMauTheoBac";
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
    // console.log(graph);
    var color;
    if (req.body.way == "greedy") {
      color = new Greedy(graph).toMau();
    } else if (req.body.way == "welch") {
      color = new WelchPowell(graph).toMau();
    } else if (req.body.way == "byLevel") {
      color = new ToMauTheoBac(graph).toMau();
    }
    for (var prop in color) {
      color[prop] = colors_list[color[prop]];
    }
    var coloredGrap = { graph: graph, color: color };
    return res.send(coloredGrap);
  } catch (error) {
    console.log(error);
    return res.redirect("/");
  }
};
export default { coloringGraph };
