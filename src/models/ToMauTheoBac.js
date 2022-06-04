function createArray(length) {
  var arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }

  return arr;
}
export class ToMauTheoBac {
  mauCam;
  tongBacDinh;
  dinh;
  mauDinh;
  constructor(graph) {
    this.graph = graph;
    this.mauCam = createArray(50, 50);
    this.tongBacDinh = [];
    this.dinh = [];
    this.mauDinh = [];
    for (var i = 0; i < this.graph.soDinh; i++) {
      this.mauDinh[i] = -1;
    }
    for (var i = 0; i < this.graph.soDinh; i++) {
      this.tongBacDinh[i] = 0;
      for (var j = 0; j < this.graph.soDinh; j++) {
        this.tongBacDinh[i] =
          this.tongBacDinh[i] + parseInt(this.graph.logic[i][j]);
      }
    }
  }
  dinhBacMac() {
    var max, vitri;
    max = this.tongBacDinh[0];
    vitri = 0;
    for (var i = 0; i < this.graph.soDinh; i++) {
      if (this.tongBacDinh[i] > max) {
        max = this.tongBacDinh[i];
        vitri = i;
      }
    }
    return vitri;
  }
  kiemTraMauCam(v, mau) {
    for (var i = 0; i < this.graph.soDinh; i++) {
      if (this.mauCam[v][i] === mau) {
        return true;
      }
    }
    return false;
  }
  chonMau(v) {
    var mau = 1;
    do {
      if (!this.kiemTraMauCam(v, mau)) {
        return mau;
        break;
      } else {
        mau++;
      }
    } while (true);
  }
  toMau() {
    var coloredGraph = {};
    var dem, dinhMax, daXet;
    dem = 0;
    daXet = [];
    for (var i = 0; i < this.graph.soDinh; i++) {
      daXet[i] = -1;
    }
    for (var i = 0; i < this.graph.soDinh; i++) {
      for (var j = 0; j < this.graph.soDinh; j++) {
        this.mauCam[i][j] = -1;
      }
    }
    do {
      dinhMax = this.dinhBacMac();
      this.mauDinh[dinhMax] = this.chonMau(dinhMax);
      daXet[dinhMax] = 1;
      dem++;
      for (var i = 0; i < this.graph.soDinh; i++) {
        if (parseInt(this.graph.logic[i][dinhMax]) === 1 && daXet[i] !== 1) {
          this.mauCam[i][dinhMax] = this.mauDinh[dinhMax];
          this.tongBacDinh[i]--;
        }
        if (this.tongBacDinh[i] === 0 && daXet[i] !== 1) {
          this.mauDinh[i] = this.chonMau(i);
          daXet[i] = 1;
          dem++;
        }
      }
      this.tongBacDinh[dinhMax] = 0;
    } while (dem < this.graph.soDinh);
    for (var i = 0; i < this.graph.soDinh; i++) {
      coloredGraph[i] = this.mauDinh[i];
    }
    return coloredGraph;
  }
}
