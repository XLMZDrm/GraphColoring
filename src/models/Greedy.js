export default class Greedy {
  constructor(graph) {
    this.graph = graph;
  }
  kiemTraMau(z, w, mau) {
    for (var i = 0; i < w; i++) {
      // console.log(mau);
      // console.log(z[i]);
      // console.log(mau === z[i]);
      if (mau === z[i]) {
        return true;
      }
    }
    return false;
  }
  chonMau(g, l) {
    var mau = 1;
    do {
      console.log(g);
      if (!this.kiemTraMau(g, l, mau)) {
        return mau;
        break;
      }
      {
        mau++;
      }
    } while (true);
  }
  toMau() {
    var coloredGrap = {};
    var i = 0,
      j = 1,
      l = 0,
      t = 1,
      mau = 1,
      mauDinh = [],
      dinhTruoc = [],
      mauPhu = [];
    mauDinh[0] = mau;
    dinhTruoc[0] = 0;
    do {
      for (var temp = 0; temp <= l; temp++) {
        if (parseInt(this.graph.logic[j][dinhTruoc[temp]]) === 1) {
          mauPhu[t++] = mauDinh[dinhTruoc[temp]];
        }
      }
      mauDinh[j] = this.chonMau(mauPhu, t);
      l = j;
      dinhTruoc[l] = j;
      j++;
      t = 0;
    } while (j < this.graph.soDinh);
    for (i = 0; i < this.graph.soDinh; i++) {
      coloredGrap[i + 1] = mauDinh[i];
    }
    return coloredGrap;
  }
}
