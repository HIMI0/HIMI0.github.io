const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("#main").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }

        return letters[Math.floor(Math.random() * 26)]
    })
        .join("");

    if(iterations >= event.target.dataset.value.length){
        clearInterval(interval);
    }
    iterations += 1;
}, 30);
}

function rotateCube(e) {

    var cube = document.getElementsByClassName("cube");
    var x = e.clientX - window.innerWidth / 2;
    var y = e.clientY - window.innerHeight / 2;
    var q = 0.2;
    var i;

    x = x * q * 1.25;
    y = -y * q * 1.25;

    for(i = 0; i < cube.length; i++) {
        cube[i].style.transform = "rotateY(" + x +"deg) rotateX("+ y +"deg)";
     }

}

document.addEventListener("mousemove", rotateCube);
