export default class WelchPowell {
  tongBacDinh;
  dinh;
  constructor(graph) {
    this.graph = graph;
    this.tongBacDinh = [];
    this.dinh = [];
    var dem = 0;
    for (var i = 0; i < this.graph.vertices; i++) {
      this.dinh[i] = dem++;
    }
    for (var i = 0; i < this.graph.vertices; i++) {
      this.tongBacDinh[i] = 0;
      for (var j = 0; j < this.graph.vertices; j++) {
        this.tongBacDinh[i] =
          this.tongBacDinh[i] + parseInt(this.graph.logic[i][j]);
      }
    }
    for (var i = 0; i < this.graph.vertices; i++) {
      for (var j = 0; j < this.graph.vertices; j++) {
        if (this.tongBacDinh[i] < this.tongBacDinh[j]) {
          this.swap(this.tongBacDinh[i], this.tongBacDinh[j]);
          this.swap(this.dinh[i], this.dinh[j]);
        }
      }
    }
  }
  async swap(x, y) {
    var t = x;
    x = y;
    y = t;
  }
  kiemTraMau(mauDaTo, soMau, mau) {
    for (var i = 0; i < soMau; i++) {
      if (mau == mauDaTo[i]) {
        return true;
      }
    }
    return false;
  }
  chonMau(g, l) {
    var mau = 1;
    do {
      if (!this.kiemTraMau(g, l, mau)) {
        return mau;
        break;
      } else {
        mau++;
      }
    } while (true);
  }
  toMau() {
    var coloredGraph = {};
    var t = 1,
      i = 0,
      j = 1,
      mau = 1,
      mauDinh = [],
      mauPhu = [],
      dinhTruoc = [],
      l = 1;
    mauDinh[this.dinh[i]] = mau;
    dinhTruoc[l] = this.dinh[i];
    do {
      for (var temp = 0; temp <= l; temp++) {
        if (parseInt(this.graph.logic[j][dinhTruoc[temp]]) === 1) {
          mauPhu[t++] = mauDinh[dinhTruoc[temp]];
        }
      }
      mauDinh[this.dinh[j]] = this.chonMau(mauPhu, t);
      l++;
      dinhTruoc[l] = this.dinh[j];
      j++;
      t = 1;
    } while (j < this.graph.vertices);
    for (i = 0; i < this.graph.vertices; i++) {
      coloredGraph[i + 1] = mauDinh[i];
    }
    return coloredGraph;
  }
}
