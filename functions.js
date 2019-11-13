function pickColor(){
	let i = Math.floor(Math.random() * colors.length);
	return colors[i];
}

function generateRandomColors (num){
	// make array
	var arr = [];
	//repeat num times
	for (let i = 0; i < num; i++){
	  //get random color and push into array
		arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
	//pick a red from 0-255
	let r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	let g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	let b = Math.floor(Math.random() * 256);
	// concat rgb into string
	let rgb = ('rgb(' + r + ', ' + g + ', ' + b + ')');
	return  rgb;

}

function changeColors (color){
	for ( let i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function initialize(num){
  for (let i = 0; i < num; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listners to squares
    squares[i].addEventListener('click',() => {
      //grab color of clicked square
      var clickedColor = squares[i].style.backgroundColor;
      //compare color to pickedColor
      if( clickedColor == pickedColor){
        messageDisplay.textContent = 'Correct!';
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = 'Play Again?'
        changeColors(clickedColor);
      }else{
        squares[i].style.backgroundColor ='#232323';
        messageDisplay.textContent = 'Try Again!';
      }
    });
  }
}

function resetGUI(){
  // generate all new colors
  pickedColor = pickColor();
  h1.style.backgroundColor = 'steelblue';
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
}