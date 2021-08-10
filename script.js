// targets the share buttons
// let shareArrow = document.querySelectorAll("#arrow #footer");

// takes in the click event, hides the author section, and unhides the footer
let shareToggle = () => {
    var author = document.querySelector('#author');
    var footer = document.querySelector('#footer');
    if(footer.style.display === "none") {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
        author.style.display = "block";
    }
}
