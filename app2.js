//Create an object with properties for the x, y, and size of a circle. In the draw function, add 1 to one or more of these properties, and then draw the circle described by the object to the screen.

//make an object to hold the x and y coordinate of the circle, as well as the inital radius
let objCircle = {xPos: "150", yPos: "100", circRad: "3"};

function setup(){
    //create canvas
    createCanvas(300, 300);
}

function draw(){
    //fill the background a certain color
    background(210);
    //set color of circle
    fill(23, 122, 21);
    //create circle by reading the values of the obj
    circle(objCircle.xPos, objCircle.yPos, objCircle.circRad);
    //add one to circle radius
    objCircle.circRad++;
    //if the circle radius is greater than 150
    if(objCircle.circRad > 150){
        //set the radius back to 3 so the cycle repeats
        objCircle.circRad = 3;
    }
    


}