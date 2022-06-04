String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};
export class Graph {
  soDinh;
  logic = [];
  req;
  constructor(req) {
    this.req = req;
    this.soDinh = this.req.body.soDinh;
    for (var i = 0; i < this.req.body.soDinh; i++) {
      for (var j = 0; j < this.req.body.soDinh; j++) {
        this.logic[i] = "";
      }
      for (var j = 0; j < this.req.body.soDinh; j++) {
        this.logic[i] = this.logic[i] + "0";
      }
      this.req.body[i] = this.req.body[i].trim();
      var tempString = this.req.body[i].split(";");
      tempString.forEach((element) => {
        element = parseInt(element);
        this.logic[i] = this.logic[i].replaceAt(element - 1, "1");
      });
    }
  }
}
