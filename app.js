//make an obj with all properties fora  graphic on screen - width, height, color, position
//in create/draw function, draw object using data in object

//create an object with necessary properties
let objOne = {colorRed: "66", colorGreen: "135", colorBlue: "245", height: "100", width: "50", xPosition: "200", yPosition: "50"};

function setup(){
    //create canvas to hold obj
    createCanvas(1000,1000);
}

function draw(){
    //use fill to make the desired color, using the color's red, green, and blue values respectively
    fill(objOne.colorRed, objOne.colorGreen, objOne.colorBlue);
    //create a rectangle using the properties of the object
    rect(objOne.xPosition, objOne.yPosition, objOne.width, objOne.height);
}