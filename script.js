var author = document.querySelector('#author');
var footer = document.querySelector('#footer');

// hides the author section, shows the footer - keeps the author section visible in desktop view
function showFooter() {
    footer.style.display = "block";
    author.style.display = "none";
    if(footer.style.position = "absolute"){
        author.style.display = "flex";
    }
}

// hides the footer, shows the author section
function hideFooter() {
    footer.style.display = "none";
    author.style.display = "flex";
}