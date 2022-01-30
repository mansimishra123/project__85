//Create a reference for canvas

var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image

grenncar_x=5;
grenncar_y=225;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

grenncar_width=75;
grenncar_height=100;

function add() {
	//upload car, and background images on the canvas.
	background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;

    grenncar_img=new Image();
    grenncar_img.onload=uploadgreencar;
    grenncar_img.src=greencar_image;


}



function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}



function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(grenncar_img,grenncar_x,grenncar_y,grenncar_width,grenncar_height);

	
}


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
	if(grenncar_y>=0){
		grenncar_y=grenncar_y-10;
		 console.log("when up arrow is pressed x="+grenncar_x+"| y="+grenncar_y);
		 uploadBackground()
		 uploadgrenncar()
	 }
	 
	 }


function down()
{
	//Define function to move the car downward
	if(grenncar_y<=300){
		grenncar_y=greencar_y+10;
		 console.log("when down arrow is pressed x="+grenncar_x+"| y="+grenncar_y);
		 uploadBackground()
		 uploadgrenncar()
	 }
	 
	 }


function left()
{
	//Define function to move the car left side
	if(grenncar_x>=0){
		grenncar_x=grenncar_x-10;
		 console.log("when left arrow is pressed x="+grenncar_x+"| y="+grenncar_y);
		 uploadBackground()
		 uploadgrenncar()
	 }
	 
	 }



function right()
{
	//Define function to move the car right side
	function right(){

		if(grenncar_x<=700){
			grenncar_x=grenncar_x+10;
			console.log("when right arrow is pressed x="+grenncar_x+"| y="+grenncar_y);
			uploadBackground()
			uploadgrenncar()
		}
		
		}


}
