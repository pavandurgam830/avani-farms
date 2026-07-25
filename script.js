// Show button when scrolling
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let button = document.getElementById("topBtn");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Scroll to top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}