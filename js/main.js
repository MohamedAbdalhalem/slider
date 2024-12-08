var cont = document.querySelector(".container");
var imgs = document.querySelectorAll("#slider img");
var layer = document.querySelector("#layer");
var imglayer = document.querySelector("#layer img");
var clos = document.querySelector("#close");
var right = document.querySelector("#right");
var left = document.querySelector("#left"); 
var img_arr = Array.from(imgs);

var index = 0;
cont.addEventListener("click", function (e) {
    if (e.target.hasAttribute("src")) {
        layer.classList.replace("d-none", "d-flex")
        imglayer.setAttribute("src", e.target.src)
        index = img_arr.indexOf(e.target);
    } else if (e.target.parentElement.previousElementSibling.hasAttribute("src")) {
        layer.classList.replace("d-none", "d-flex")
        imglayer.setAttribute("src", e.target.parentElement.previousElementSibling.src)
        index = img_arr.indexOf(e.target.parentElement.previousElementSibling);
    }
})

function close() {
    layer.classList.replace("d-flex", "d-none");
}

clos.addEventListener("click", function () {
    close()
})

document.addEventListener("keyup", function (e) {
    if (e.code == "Escape") {
        close()
    } else if (e.code == "ArrowRight") {
        next_img()
    } else if (e.code == "ArrowLeft") {
        prevese_img()
    }
})

function next_img() {
    index++;
    if (index > img_arr.length-1) {
        index = 0;
    }
    imglayer.setAttribute("src", img_arr[index].src);
}
function prevese_img() {
    index--;
    if (index < 0) {
        index = img_arr.length-1
    }
    imglayer.setAttribute("src", img_arr[index].src);
}
right.addEventListener("click", function () {
    next_img()
})
left.addEventListener("click", function () {
    prevese_img()
})