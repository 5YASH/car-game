canvas=document.getElementById ('myCanvas');
ctx=canvas.getcontext("2d");
greencar_width=75;
greencar_height=100;
greencar_x=5;
greencar_y=225;
Functionadd() {
	background_imgtag=new Image();
	background_imgtag.onload=uploadBackground;
	background_imgtag.src=greencar_image;
}
function uploadBackground(){
	ctx.drawimage(background_imgtag,0,0,canvas.width canvas.height);
}
function uploadgreencar(){
	ctx.drawimage(greencar_imgtag,greencar_x_y,greencar_width,greencar_height);

}
	


//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	
}
function up()
{
	if(greencar_y>=0)
}
greencar_y=greencar_y-10;
console.log("when up arrow key is presseed, x =" +"| y=" + greencar_y);
uploadbackground();
uploadgreencar();





window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
