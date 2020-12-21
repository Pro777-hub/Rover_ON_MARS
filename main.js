canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 80;

pictures = ["nasa1.jpg", "nasa2.jpg", "nasa3.jpg", "4.jpeg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number)


background_image = pictures[random_number];

rover_image = "rover.png";
rover_x = 10;
rover_y = 10;


function add() {
    newImage = new Image();
    newImage.onload = uploadBackground;
    newImage.src = background_image;
    newRover = new Image();
    newRover.onload = uploadRover;
    newRover.src = rover_image;
}
function uploadBackground() {
    ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);
}
function uploadRover() {
    ctx.drawImage(newRover, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) { keyPressed = e.keyCode; console.log(keyPressed); if(keyPressed == '38') { up(); console.log("up"); } if(keyPressed == '40') { down(); console.log("down"); } if(keyPressed == '37') { left(); console.log("left"); } if(keyPressed == '39') { right(); console.log("right"); } }

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadRover();
    }
}