 canvas = document.getElementById("mycanvas6")
 ctx = canvas.getContext("2d")
 rover_x = 10
 rover_y = 10
 bg = "mars.jpg"
 rover_image = "rover.png"

 function add(){
     canvasbg = new Image()
     canvasbg.src = bg
     canvasbg.onload = uplaodbg 

     rover = new Image()
     rover.src = rover_image 
     rover.onload = uploadrover
 }

 function uplaodbg(){
     ctx.drawImage(canvasbg,0,0,canvas.width,canvas.height)
 }

 function uploadrover(){
     ctx.drawImage(rover,rover_x,rover_y,100,100)
 }

 window.addEventListener("keydown",mk)
 function mk(e) {
     //find the ASCII value of the key pressed
     x = e.keyCode
     console.log(x)
     if (x==37) {
         console.log("Left is Pressed")
         left() 
     }

     if (x==39) {
         console.log("Right is Pressed")
         right()
     }

     if (x==38) {
         console.log("Up is Pressed")
         up()
     }
     if (x==40) {
         console.log("Down is Pressed")
         down()
     }
 }