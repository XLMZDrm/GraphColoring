export default class Greedy {
  constructor(graph) {
    this.graph = graph;
  }
  kiemTraMau(z, w, mau) {
    for (var i = 0; i < w; i++) {
      if (mau === z[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
  chonMau(g, l) {
    var mau = 0;
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
    var coloredGrap = {};
    var i, j, l, mau, t, mauDinh, dinhTruoc, mauPhu;
    i = 0;
    l = 0;
    mau = 0;
    t = 0;
    j = 1;
    mauDinh = [];
    dinhTruoc = [];
    mauPhu = [];
    mauDinh[0] = mau;
    dinhTruoc[0] = 0;
    do {
      for (var temp = 0; temp <= l; temp++) {
        if (parseInt(this.graph.logic[j][dinhTruoc[temp]]) === 1) {
          mauPhu[++t] = mauDinh[dinhTruoc[temp]];
        }
      }
      mauDinh[j] = this.chonMau(mauPhu, t);
      l = j;
      dinhTruoc[l] = j;
      j++;
      t = -1;
    } while (j < this.graph.soDinh);
    for (i = 0; i < this.graph.soDinh; i++) {
      coloredGrap[i] = mauDinh[i] + 1;
    }
    return coloredGrap;
  }
}
