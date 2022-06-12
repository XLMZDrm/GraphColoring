String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};
export default class Graph {
  vertices;
  logic = [];

  constructor(req) {
    req;
    this.vertices = parseInt(req["vertices"]);
    for (var i = 0; i < this.vertices; i++) {
      for (var j = 0; j < this.vertices; j++) {
        this.logic[i] = "";
      }
      for (var j = 0; j < this.vertices; j++) {
        this.logic[i] = this.logic[i] + "0";
      }
      var tmpStr = req[i + ""];
      tmpStr = tmpStr.trim();
      var tempString = tmpStr.split(";");
      tempString.forEach((element) => {
        element = parseInt(element);
        this.logic[i] = this.logic[i].replaceAt(element - 1, "1");
      });
    }
  }
}
