window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let scrollTop = document.getElementById("f-btn");
    if (window.scrollY > 10) {
        header.style.backgroundColor = "rgba(251, 251, 251, .7)";
    } else {
        header.style.removeProperty("background-color");
    }

    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
})

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
