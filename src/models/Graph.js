String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};
export default class Graph {
  soDinh;
  logic = [];
  req;
  constructor(req) {
    this.req = req;
    this.soDinh = parseInt(this.req["soDinh"]);
    for (var i = 0; i < this.soDinh; i++) {
      for (var j = 0; j < this.soDinh; j++) {
        this.logic[i] = "";
      }
      for (var j = 0; j < this.soDinh; j++) {
        this.logic[i] = this.logic[i] + "0";
      }
      var tmpStr = this.req[i + ""];
      tmpStr = tmpStr.trim();
      var tempString = tmpStr.split(";");
      tempString.forEach((element) => {
        element = parseInt(element);
        this.logic[i] = this.logic[i].replaceAt(element - 1, "1");
      });
    }
  }
}
