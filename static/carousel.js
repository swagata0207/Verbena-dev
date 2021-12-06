var slideIndex = 1;
slideShow(slideIndex);

function plusSlides(n) {
    slideShow(slideIndex += n);
    }

function slideShow(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-image");
    //var dots = document.getElementsByClassName();

    if (n > slides.length) {slideIndex = 1} 

    if (n < 1) {slideIndex = slides.length}

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(slideShow, 3000);
}
