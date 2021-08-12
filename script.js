var author = document.querySelector('#author');
var footer = document.querySelector('#footer');
var triangle = document.querySelector('#triangle');
var arrow = document.querySelector('#arrow')
var arrow2 = document.querySelector('#arrow2');

// hides the author section, shows the footer - keeps the author section visible in desktop view when share arrow is clicked
function showFooter() {
    footer.style.display = "block";
    footer.style.position = "auto";
    author.style.display = "none";
    triangle.style.display = "block";
    if($(window).width() > 376){
        author.style.display = "flex";
        arrow2.style.display = "block";
        arrow.style.display = "none";
    }
}

// hides the footer and triangle, shows the author section when share arrow2 is clicked
function hideFooter() {
    footer.style.display = "none";
    triangle.style.display = "block";
    author.style.display = "flex";
    if(triangle.style.display = "block"){
        arrow.style.display = "flex";
    }
}