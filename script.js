var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

// 🎵 Background Music
const bgMusic = new Audio("Eyedress-(Something About You).mp3");
bgMusic.loop = true;
bgMusic.volume = 0.7;

// Try autoplay (may be blocked)
bgMusic.play().catch(() => {
    console.log("Autoplay blocked. Waiting for interaction...");
});

// Start music on first click (guaranteed to work)
document.addEventListener("click", function startMusic() {
    bgMusic.play();
    document.removeEventListener("click", startMusic);
});


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}



function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
// 💖 Soft Pink + Blue Glow (breathing effect)
    var glowPulse = Math.sin(frameNumber * 0.05) * 6 + 18;
    
    context.shadowBlur = glowPulse;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    
    // Blue outer glow
    context.shadowColor = "rgba(0, 150, 255, 0.8)";


    if(frameNumber < 250){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("Hey, Missed U my love", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("Hey, Missed U my love", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;

        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks([ "I feel so lucky to have u in my life", "U r my home, my sanctuary" ], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("I feel so lucky to have u in my life", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks([ "I feel so lucky to have u in my life", "U r my home, my sanctuary" ], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("I feel so lucky to have u in my life", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("I'm yours, forever and ever", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("I'm yours, forever and ever", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("My heart belongs to you.", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("My heart belongs to you.", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks([ "You are the most beautiful girl ever seen", "You're the most smart and kind-hearted girl" ], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("You are the most beautiful girl ever seen", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks([ "You are the most beautiful girl ever seen", "You're the most smart and kind-hearted girl" ], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("You are the most beautiful girl ever seen", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks([ "I love you so much Mickey", "More than time and space can contain" ], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("I love you so much Mickey, more than all time and space can contain", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;


        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and I can't wait to spend all the time in", "the world to share that love with you!"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("And there's nothing in the world that would ever make this less, and i can't wait to give u all this love", canvas.width/2, (canvas.height/2 + 50));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 105, 180, ${thirdOpacity})`;
        context.fillText("I Wolf U, Mickey. My Love Quinn", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;

    
    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
