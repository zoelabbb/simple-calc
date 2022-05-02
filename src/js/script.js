function clearScreen() {
  document.getElementById("result").value = "";
}
// This function will be display values
function display(value) {
  document.getElementById("result").value += value;
}

// This function will be evaluates the expression and return result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
