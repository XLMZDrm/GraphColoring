let generateDinh = () => {
  var dinh = document.getElementsByName("soDinh")[0].value;
  document.getElementsByClassName("getDinh")[0].style.display = "none";
  var elements =
    "<h2>Các đỉnh ngăn cách nhau bởi dấu <b>;</b> không dùng bừa dấu space.</h2><br>";
  for (var i = 1, j = 0; i <= dinh && j < dinh; i++, j++) {
    elements +=
      "<h3>Đỉnh " +
      i +
      "</h3><br>" +
      '<label for="' +
      j +
      '">Các đỉnh nối với đỉnh ' +
      i +
      "</label><br>" +
      '<input type="text" name="' +
      j +
      '"></input><br>';
  }
  elements +=
    '<select name="way"><option value="greedy" selected>Greedy</option><option value="welch">Welch Powell</option><option value="byLevel">Tô màu theo bậc</option></select><br>';
  elements += '<input type="submit"><br>';
  document.getElementsByClassName("geneDinh")[0].innerHTML = elements;
  document.getElementsByClassName("geneDinh")[0].style.display = "";
};
