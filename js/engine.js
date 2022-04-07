let container = document.querySelector("#container");
let ball = document.querySelector("#ball");
let wall = document.querySelector("#wall");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");




//start Game

window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        wall.classList.add("wallActive");
        cloud.classList.add("cloudActive");
        road.style.display = "block";
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});


window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
        if (ball.classList != "bounce") {
            ball.classList.add("bounce");

            setTimeout(() => {
                ball.classList.remove("bounce");
            }, 500);
        }
    }
})




let result = setInterval(() => {
    let ballTop = parseInt(getComputedStyle(ball).getPropertyValue("top"));
    // console.log("ballBottom" + ballTop);

    let wallright = parseInt(getComputedStyle(wall).getPropertyValue("right"));
    // console.log("wallRight" + wallright);

    if (ballTop >= 0 && wallright >= 880 && wallright <= 933) {
        // alert("Game Over");
        gameOver.style.display = "block";
        wall.classList.remove("wallActive"); 
        road.firstElementChild.style.animation = "none";
        road.style.display = "none";
        // cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);