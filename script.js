var author = document.querySelector('#author');
var footer = document.querySelector('#footer');

// hides the author section, shows the footer
function showFooter() {
    footer.style.display = "block";
    author.style.display = "none";
}

// hides the footer, shows the author section
function hideFooter() {
    footer.style.display = "none";
    author.style.display = "flex";
}