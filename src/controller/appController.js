import Graph from "../models/Graph";
import Greedy from "../models/Greedy";
import WelchPowell from "../models/WelchPowell";
import ToMauTheoBac from "../models/ToMauTheoBac";
let coloringGraph = (req, res) => {
  var graph = new Graph(req.body);
  if (req.body.way == "greedy") {
    return res.send(new Greedy(graph).toMau());
  } else if (req.body.way == "welch") {
    return res.send(new WelchPowell(graph).toMau());
  } else if (req.body.way == "byLevel") {
    return res.send(new ToMauTheoBac(graph).toMau());
  }
};
export default { coloringGraph };
