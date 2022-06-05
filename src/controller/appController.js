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
    var result;
    if (req.body.way == "greedy") {
      result = new Greedy(graph).toMau();
    } else if (req.body.way == "welch") {
      result = new WelchPowell(graph).toMau();
    } else if (req.body.way == "byLevel") {
      result = new ToMauTheoBac(graph).toMau();
    }
    for (var prop in result) {
      result[prop] = colors_list[result[prop]];
    }
    var coloredGrap = { graph: graph, result: result };
    return res.send(coloredGrap);
  } catch (error) {
    console.log(error);
    return res.redirect("/");
  }
};
export default { coloringGraph };
