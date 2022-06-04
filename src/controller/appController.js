import Graph from "../models/Graph";
import Greedy from "../models/Greedy";
import WelchPowell from "../models/WelchPowell";
import ToMauTheoBac from "../models/ToMauTheoBac";
let coloringGraph = async (req, res) => {
  var graph = new Graph(req.body);
  console.log(graph);
  var result;
  if (req.body.way == "greedy") {
    result = new Greedy(graph).toMau();
  } else if (req.body.way == "welch") {
    result = new WelchPowell(graph).toMau();
  } else if (req.body.way == "byLevel") {
    result = new ToMauTheoBac(graph).toMau();
  }
  console.log(result);
  // return res.render("result", { result: result });
  // return res.send(result);
};
export default { coloringGraph };
