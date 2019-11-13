// DOM Variables
const squares = document.querySelectorAll('.square');
const messageDisplay = document.getElementById('message');
const colorDisplay = document.getElementById('colorDisplay');
const h1 = document.querySelector('h1');
const resetButton = document.getElementById('reset');
const easyMode = document.querySelector('.mode');
const hardMode = document.getElementsByClassName('mode')[1];

// Initialization
var colors = generateRandomColors(6);
var pickedColor = pickColor();
resetGUI();
initialize(squares.length);

// Objects and Event Listners
resetButton.addEventListener('click', () =>{
  // Checks mode and generates new colors
  if(easyMode.classList.contains('selected')){
    colors = generateRandomColors(3);
    initialize(3);
  }else{
    colors = generateRandomColors(6);
    initialize(6);
  }
  resetGUI()
});

easyMode.addEventListener('click', () =>{
  // clears all squares
  for (let i = 3; i < colors.length; i++){
    squares[i].classList.remove('square');
  }
  colors = generateRandomColors(3);
  initialize(3);
  resetGUI();
  hardMode.classList.remove('selected');
  easyMode.classList.add('selected');
});

hardMode.addEventListener('click', () =>{
  colors = generateRandomColors(6);
  initialize(6);
  resetGUI();
  easyMode.classList.remove('selected');
  hardMode.classList.add('selected');
  // Restores squares from 3 to 6
  for (let i = 3; i < colors.length; i++){
    squares[i].classList.add('square');
  }
});