var inputA = document.getElementById('input-a');
var inputB = document.getElementById('input-b');
var inputC = document.getElementById('input-c');
var inputR = document.getElementById('input-r');
var inputCircumference = document.getElementById('input-circumference');
var inputArea = document.getElementById('input-area');

var currentShape;

inputA.style.display = "block";
inputB.style.display = "block";
inputC.style.display = "block";
inputR.style.display = "none";

document.getElementById('2d-shape-select').addEventListener('change', 
function formChange2d() {
  var selectedShape = this.value;   
  currentShape = selectedShape;
  switch (selectedShape) {
    case "0":
      inputA.style.display = "block";
      inputB.style.display = "block";
      inputC.style.display = "block";
      inputR.style.display = "none";
      break;
    case "1":
      inputA.style.display = "block";
      inputB.style.display = "none";
      inputC.style.display = "none";
      inputR.style.display = "none";
      break;
    case "2":
      inputA.style.display = "block";
      inputB.style.display = "block";
      inputC.style.display = "none";
      inputR.style.display = "none";
      break;
    case "3":
      inputA.style.display = "none";
      inputB.style.display = "none";
      inputC.style.display = "none";
      inputR.style.display = "block";
      break;
  } 
}
);

function formSubmit2d() {
  switch (currentShape) {
    case "0":
      calculateTriangle();
      break;
    case "1":
      break;
    case "2":
      break;
    case "3":
      break;
  } 
}

function calculateTriangle()
{
  var a = parseFloat(inputA.value);
  var b = parseFloat(inputB.value);
  var c = parseFloat(inputC.value);
  var area = parseFloat(inputArea.value);
  var circum = parseFloat(inputCircumference.value);

  if (a && b && c)
  {
    var s = (a + b + c) / 2;
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    inputArea.value = area;
    inputCircumference.value = a + b + c;
  }
  else if(a && b && area)
  {
    c = Math.sqrt(a * a + b * b);
    inputC.value = c;
    inputCircumference.value = a + b + c;
  }
  else if(a && c && area)
  {
    b = Math.sqrt(c * c - a * a);
    inputB.value = b;
    inputCircumference.value = a + b + c;
  }
  else if(b && c && area)
  {
    a = Math.sqrt(c * c - b * b);
    inputA.value = a;
    inputCircumference.value = a + b + c;
  }
  else if(a && b && circum)
  {
    c = circum - a - b;
    inputC.value = c;
    var s = (a + b + c) / 2;
    inputArea.value = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  else if(a && c && circum)
  {
    b = circum - a - c;
    inputB.value = b;
    var s = (a + b + c) / 2;
    inputArea.value = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  else if(b && c && circum)
  {
    a = circum - b - c;
    inputA.value = a;
    var s = (a + b + c) / 2;
    inputArea.value = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

function calculateSquare()
{
  var a = parseFloat(inputA.value);
  var area = parseFloat(inputArea.value);
  var circum = parseFloat(inputCircumference.value);

  if (a && area)
  {
    circum = 4 * a;
    inputCircumference.value = circum;
  }
  else if(a && circum)
  {
    area = a * a;
    inputArea.value = area;
  }
  else
}
