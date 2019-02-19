var numSquares=6;
var colors = generateRandomColor(numSquares);
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor(); 
var h1= document.querySelector("h1");
var colorDisplay= document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var reset= document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");


resetGame(); //starts game

for(var i=0; i < modeButtons.length; i++)
{
	modeButtons[i].addEventListener("click", function()
	{
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
     this.classList.add("selected");
     if(this.textContent==="Easy")
     	{
     		numSquares= 3;
     	}
     if(this.textContent==="Hard")
     	{
     	numSquares=6;	
     	}
     	else if(this.textContent=="Difficult")
     	{
     		
     		numSquares=9;
     	}

      //figure out the squares to show
     //pick new colors
     //pick a new pickedColor
    resetGame();
    
	});
}

function resetGame()
{
	colors=generateRandomColor(numSquares);
	//pick new random color from array
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	reset.textContent="New Colors";
	messageDisplay.textContent="";
	
	//change color of the squares
	for(var i=0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}
		else
		{
			squares[i].style.display="none"; 
		}
	}
	h1.style.backgroundColor= "steelblue";
}

//resetting the game
reset.addEventListener("click", function(){
	resetGame();
});

//winning/losing logic
colorDisplay.textContent= pickedColor;
for(var i= 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor=colors[i];

	//color click
	squares[i].addEventListener("click", function()
	{
var clickedColor=this.style.backgroundColor;
console.log(clickedColor, pickedColor);
if(clickedColor===pickedColor)
{
	messageDisplay.textContent= "You Won!"
	changeColor(clickedColor);
	h1.style.backgroundColor= clickedColor;
	reset.textContent= "Play Again?";

}
else
{
	this.style.backgroundColor= "#232323";
	messageDisplay.textContent= "Try Again"
}

});
}
//color changing functions
function changeColor(color)
{
	for(var i= 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor=color;
}
}

function pickColor()
{
 var random= Math.floor(Math.random()*colors.length);
 return colors[random];
}
//generating random color functions
function generateRandomColor(num)
{
	var arr= [] 
	for(var i=0; i< num; i++)
	{
      arr.push(randomColor())
	}
	return arr;
}
function randomColor()
{
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
