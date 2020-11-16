//Graphics library 

let cnv= document.getElementById("my-canvas")
let ctx = cnv.getContext("2d")
cnv.width = 800
cnv.height = 600

// draw a straight line 

stroke ("red")
lineWidth(4)
line(100, 200, 300, 100); //calls the function, back in grade 10 we used an eventlistener

stroke ("blue")
line(500, 50, 300, 450);


//draw rectange 
fill("orange")
rect(100, 100, 200, 50, "fill")
rect(400, 500, 70, 100, "stroke")
//stroke rect makes an outline and fill rect fills it in 


//draw a circle 
circle(400, 300, 50, "stroke")
stroke("black")
circle(700, 300, 20, "stroke")

//draw elipse 
fill("pink")
ellipse (700, 100, 10, 80, 0, "fill")
ellipse (700, 500, 40, 80, 0, "stroke")


// draw triangle 
triangle( 0, 400, 300, 400, 250, 450, "fill" )
triangle( 0, 200, 300, 400, 250, 450, "stroke" )

//ctx.closePath() //use this if you ar stroking a triagle, if not fill will fill it in you onyl need two pints to make a tiangle 
//ctx.stroke() 

//draw tect
font("64px Arial")
text("Hello", 400, 200, "fill")
text("goodbye", 100, 200, "stroke")

//draw an image 
let chessImgEl = document.createElement("img")
chessImgEl.src = "img/chess.png"

window.addEventListener("load", draw);

function draw() {
    imageClip(chessImgEl, 50, 50, 100, 200, 0, 0, 100, 200)
    //image(chessImgEl, 0, 0, 300, 200)

}

