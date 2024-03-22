function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLastElement() {
  var display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculateResult() {
  var display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculatePercentage() {
  var display = document.getElementById('display');
  try {
    display.value = eval(display.value) / 100;
  } catch (error) {
    display.value = 'Error';
  }
}