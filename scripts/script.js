function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    var main = document.getElementById("main");
    if (main.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    main.scrollTop = 0;
}