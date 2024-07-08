var divA = document.getElementById('a');
var divB = document.getElementById('b');
var divC = document.getElementById('c');
var divR = document.getElementById('r');
var divArea = document.getElementById('area');

var inputA = document.getElementById('input-a');
var inputB = document.getElementById('input-b');
var inputC = document.getElementById('input-c');
var inputR = document.getElementById('input-r');
var inputArea = document.getElementById('input-area');

// Triangle is default value
var currentShape = 0;
divA.style.display = "block";
divB.style.display = "block";
divC.style.display = "block";
divR.style.display = "none";

document.getElementById('2d-shape-select').addEventListener('change', 
function formChange2d() {   
  currentShape = this.value;
  switch (currentShape) {
    case "0":
      divA.style.display = "block";
      divB.style.display = "block";
      divC.style.display = "block";
      divR.style.display = "none";
      break;
    case "1":
      divA.style.display = "block";
      divB.style.display = "none";
      divC.style.display = "none";
      divR.style.display = "none";
      break;
    case "2":
      divA.style.display = "block";
      divB.style.display = "block";
      divC.style.display = "none";
      divR.style.display = "none";
      break;
    case "3":
      divA.style.display = "none";
      divB.style.display = "none";
      divC.style.display = "none";
      divR.style.display = "block";
      break;
  } 
}
);

function calculate2d() {
  console.log("Calculate" + currentShape);
  switch (currentShape) {
    case "0":
      calculateTriangle();
      break;
    case "1":
      calculateSquare();
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

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(area);

  if (a && b && c)
  {
    var s = (a + b + c) / 2;
    inputArea.value = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  else if(a && b && area)
  {
    inputC.value = Math.sqrt(a * a + b * b);
  }
  else if(a && c && area)
  {
    inputB.value = Math.sqrt(c * c - a * a);;
  }
  else if(b && c && area)
  {
    inputA.value = Math.sqrt(c * c - b * b);
  }
  else
  {
    alert("Mindestens 3 Werte eingeben");
  }
}

function calculateSquare()
{
  var a = parseFloat(inputA.value);
  var area = parseFloat(inputArea.value);

  console.log(a);
  console.log(area);

  if(a)
  {
    inputArea.value = a * a;
  }
  else if(area)
  {
    inputA.value = Math.sqrt(area);
  }
  else
  {
    alert("Mindestens 1 Wert eingeben");
  }
}
