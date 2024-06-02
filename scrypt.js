let game = document.querySelector("#game");
let dinosaur = document.querySelector("#dinosaur");
let cactus = document.querySelector("#cactus");
let my_point = document.querySelector("#my-point");
let my_level = document.querySelector("#my-level");
let my_chance = document.querySelector("#my-chance");
let cactus_flag = false;
let check_level = true;

let point = 0;
let chance_to_play = 3;

function jump_dinosaur() {
    if (!dinosaur.classList.contains("jump")) {
        dinosaur.classList.add("jump");
        cactus_flag = true;
        setTimeout(() => {
            dinosaur.classList.remove("jump");
        }, 600);
    }
}

document.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
        jump_dinosaur();
    }
});

document.addEventListener("click", () => {
    jump_dinosaur();
});

let check_live_game = setInterval(() => {
    let dinosaur_top = parseInt(
        window.getComputedStyle(dinosaur).getPropertyValue("top")
    );
    let cactus_left = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );

    if (cactus_left > 95 && cactus_left < 100 && dinosaur_top > 150) {
        chance_to_play--;
        console.log("====================================");
        console.log(chance_to_play);
        console.log("====================================");
        my_chance.innerHTML = chance_to_play;
    }

    if (chance_to_play == 0) {
        dinosaur.style.animationplaystate = "paused";
        cactus.style.animationplaystate = "paused";
        game.style.animationplaystate = "paused";
        clearInterval(check_live_game);
        alert("Game over - Your point : " + point + " - Try Again");
        window.location.reload();
    }

    if (cactus_left < 10 && cactus_flag) {
        point += 100;
        cactus_flag = false;
        my_point.innerHTML = point;
    }
}, 10);


setInterval(() => {
    if (point >= 1000 && check_level) {
        cactus.style.animationDuration = "1s";
        my_level.innerHTML = "2";
        check_level = false;
    }
}, 100);