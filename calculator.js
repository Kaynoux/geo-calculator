let shapeSelect, divA, divB, divC, divR, divG, divH, diletea, divVolume;
let inputA, inputB, inputC, inputR, inputG, inputH, inputArea, inputVolume;
let currentShape;

document.addEventListener('DOMContentLoaded', () => {
  //Get references to all the elements
  divA = document.getElementById('a');
  divB = document.getElementById('b');
  divC = document.getElementById('c');
  divR = document.getElementById('r');
  divG = document.getElementById('g');
  divH = document.getElementById('h');
  divGArea = document.getElementById('g-area');
  diletea = document.getElementById('area');
  divVolume = document.getElementById('volume');

  inputA = document.getElementById('input-a');
  inputB = document.getElementById('input-b');
  inputC = document.getElementById('input-c');
  inputR = document.getElementById('input-r');
  inputG = document.getElementById('input-g');
  inputH = document.getElementById('input-h');
  inputGArea = document.getElementById('input-g-area');
  inputArea = document.getElementById('input-area');
  inputVolume = document.getElementById('input-volume');
  calculateBtn = document.getElementById('calculate-btn');

  updateFields();
});

function updateFields(newShape) {

  currentShape = newShape;
  //Hide all fields
  divA.style.display = 'none';
  divB.style.display = 'none';
  divC.style.display = 'none';
  divR.style.display = 'none';
  divG.style.display = 'none';
  divH.style.display = 'none';
  divGArea.style.display = 'none';
  diletea.style.display = 'none';
  divVolume.style.display = 'none';
  calculateBtn.style.display = 'none';
  
  clearAllFieldsAndBorders();

  // Show the necessary fields based on the selected shape
  switch (currentShape) {
    case 'triangle':
      divA.style.display = 'block';
      divB.style.display = 'block';
      divC.style.display = 'block';
      diletea.style.display = 'block';
      calculateBtn.style.display = 'block';
      break;
    case 'square':
      divA.style.display = 'block';
      diletea.style.display = 'block';
      calculateBtn.style.display = 'block';
      break;
    case 'rectangle':
      divA.style.display = 'block';
      divB.style.display = 'block';
      diletea.style.display = 'block';
      calculateBtn.style.display = 'block';
      break;
    case 'circle':
      divR.style.display = 'block';
      diletea.style.display = 'block';
      calculateBtn.style.display = 'block';
      break;
    case 'cube':
      divA.style.display = 'block';
      divVolume.style.display = 'block';
      calculateBtn.style.display = 'block';
      break;
    case 'cuboid':
      divA.style.display = 'block';
      divB.style.display = 'block';
      divC.style.display = 'block';
      divVolume.style.display = 'block';
      calculateBtn.style.display = 'block';
      break;
    case 'sphere':
      divR.style.display = 'block';
      divVolume.style.display = 'block';
      calculateBtn.style.display = 'block';
      break;
    case 'pyramid':
      divGArea.style.display = 'block';
      divH.style.display = 'block';
      divVolume.style.display = 'block';
      calculateBtn.style.display = 'block';
      break;
  }
}

/**
 * Function to remove all red borders and to clear all fields
 */
function clearAllFieldsAndBorders() {
  inputA.value = '';
  inputB.value = '';
  inputC.value = '';
  inputR.value = '';
  inputG.value = '';
  inputH.value = '';
  inputGArea.value = '';
  inputArea.value = '';
  inputVolume.value = '';
  inputA.style.border = '';
  inputB.style.border = '';
  inputC.style.border = '';
  inputR.style.border = '';
  inputG.style.border = '';
  inputH.style.border = '';
  inputGArea.style.border = '';
  inputArea.style.border = '';
  inputVolume.style.border = '';
}

function calculate() {
  switch (currentShape) {
    case "triangle":
      calculateTriangle();
      break;
    case "square":
      calculateSquare();
      break;
    case "rectangle":
      calculateRectangle();
      break;
    case "circle":
      calculateCircle();
      break;
    case "cube":
      calculateCube();
      break;
    case "cuboid":
      calculateCuboid();
      break;
    case "sphere":
      calculateSphere();
      break;
    case "pyramid":
      calculatePyramid();
      break;
  } 
}

/**
 * Input field also counts as empty if it only contains whitespaces
 */
function isEmpty(str) {
  return !str.trim().length;
}

/**
 * Checks if the input field contains a negative number or NaN and returns true if it does but empty fields are allowed
 * due to the way the calculator works and marks the field red if it is an error
 */
function isError(input)
{
  if((isNaN(input.value) || parseFloat(input.value) < 0) && !isEmpty(input.value))
  {
    input.style.border = '2px solid red';
    return true;
  }
  input.style.border = '';
  return false;
}

/* Functions for calculating the area and volume of the shapes
* It converts the input into floats and then checks if the input is valid
* If the input is invalid the field is marked after checking
* If all inputs are valid it trys to calculate the missing value
*/

function calculateTriangle()
{
  let a = parseFloat(inputA.value);
  let b = parseFloat(inputB.value);
  let c = parseFloat(inputC.value);
  let area = parseFloat(inputArea.value);

  let error = false;
  if(isError(inputA)) error = true;
  if(isError(inputB)) error = true;
  if(isError(inputC)) error = true;
  if(isError(inputArea)) error = true;
  if(error) return;

  if (a && b && c)
  {
    let s = (a + b + c) / 2;
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
  let a = parseFloat(inputA.value);
  let area = parseFloat(inputArea.value);

  let error = false;
  if(isError(inputA) | isError(inputArea)) error = true;
  if(isError(inputArea)) error = true;
  if(error) return;

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

function calculateRectangle()
{
  let a = parseFloat(inputA.value);
  let b = parseFloat(inputB.value);
  let area = parseFloat(inputArea.value);

  let error = false;
  if(isError(inputA)) error = true;
  if(isError(inputB)) error = true;
  if(isError(inputArea)) error = true;
  if(error) return;

  if(a && b)
  {
    inputArea.value = a * b;
  }
  else if(a && area)
  {
    inputB.value = area / a;
  }
  else if(b && area)
  {
    inputA.value = area / b;
  }
  else
  {
    alert("Mindestens 2 Werte eingeben");
  }
}

function calculateCircle()
{
  let r = parseFloat(inputR.value);
  let area = parseFloat(inputArea.value);

  let error = false;
  if(isError(inputR)) error = true;
  if(isError(inputArea)) error = true;
  if(error) return;

  if(r)
  {
    inputArea.value = Math.PI * r * r;
  }
  else if(area)
  {
    inputR.value = Math.sqrt(area / Math.PI);
  }
}

function calculateCube()
{
  let a = parseFloat(inputA.value);
  let volume = parseFloat(inputVolume.value);

  let error = false;
  if(isError(inputA) | isError(inputVolume)) error = true;
  if(isError(inputVolume)) error = true;
  if(error) return;

  if(a)
  {
    inputVolume.value = a * a * a;
  }
  else if(volume)
  {
    inputA.value = Math.cbrt(volume);
  }
  else
  {
    alert("Mindestens 1 Wert eingeben");
  }

}

function calculateCuboid()
{
  let a = parseFloat(inputA.value);
  let b = parseFloat(inputB.value);
  let c = parseFloat(inputC.value);
  let volume = parseFloat(inputVolume.value);

  let error = false;
  if(isError(inputA)) error = true;
  if(isError(inputB)) error = true;
  if(isError(inputC)) error = true;
  if(isError(inputVolume)) error = true;
  if(error) return;

  if (a && b && c)
  {
    inputVolume.value = a * b * c;
  }
  else if (a && b && volume)
  {
    inputC.value = volume / (a * b);
  }
  else if (a && c && volume)
  {
    inputB.value = volume / (a * c);
  }
  else if (b && c && volume)
  {
    inputA.value = volume / (b * c);
  }
  else
  {
    alert("Mindestens 3 Werte eingeben");
  }
}

function calculateSphere()
{
  let r = parseFloat(inputR.value);
  let volume = parseFloat(inputVolume.value);

  let error = false;
  if(isError(inputR) | isError(inputVolume)) error = true;
  if(isError(inputVolume)) error = true;
  if(error) return;

  if(r)
  {
    inputVolume.value = 4 / 3 * Math.PI * r * r * r;
  }
  else if(volume)
  {
    inputR.value = Math.cbrt(volume / (4 / 3 * Math.PI));
  }
  else 
  {
    alert("Mindestens 1 Wert eingeben");
  }
}

function calculatePyramid()
{
  let g = parseFloat(inputGArea.value);
  let h = parseFloat(inputH.value);
  let volume = parseFloat(inputVolume.value);

  let error = false;
  if(isError(inputGArea)) error = true;
  if(isError(inputH)) error = true;
  if(isError(inputVolume)) error = true;
  if(error) return;

  if(g && h)
  {
    inputVolume.value = 1 / 3 * g * g * h;
  }
  else if(g && volume)
  {
    inputH.value = volume / (1 / 3 * g * g);
  }
  else if(h && volume)
  {
    inputGArea.value = Math.sqrt(volume / (1 / 3 * h));
  }
  else
  {
    alert("Mindestens 2 Werte eingeben");
  } 
}
