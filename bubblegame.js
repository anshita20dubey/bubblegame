var timer = 60;
var score = 0;
var hit;


function makeBubbles() {
    document.querySelector("#panel").innerHTML = ""
    for (var i = 1; i <= 126; i++) {
        var rn = Math.floor(Math.random() * 10)
        document.querySelector("#panel").innerHTML += `<div class = "bubble"> ${rn} </div>`
    }

}

function timerset() {
    setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").innerHTML = timer;

        }
        else {
            document.querySelector("#panel").innerHTML = "";
            document.querySelector("#panel").innerHTML = "<h1>GAME OVER!!</h1>";
            document.querySelector("#gethit").innerHTML = 0;
        }
    }, 1000);
}

function gethit() {
    hit = Math.floor(Math.random() * 10)
    document.querySelector("#gethit").innerHTML = hit;
}

function scoreset()
{
    score += 10
    document.querySelector("#score").innerHTML = score;
}

document.querySelector("#panel").addEventListener("click", function (dets) {
    console.log(dets.target)

    if (Number(dets.target.textContent) === hit) {
        scoreset()
        makeBubbles()
        gethit()
    }
    else {
        makeBubbles()
        gethit()
        console.log(Number(dets.target.textContent), hit)
    }
})

makeBubbles()
timerset()
gethit();