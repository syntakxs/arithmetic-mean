document.getElementById('toggle-genres').addEventListener('click', function() {
    var genreContainer = document.getElementById('genre-container');
    genreContainer.classList.toggle('visible');
});

function showMore(sectionId) {
    var section = document.getElementById(sectionId);
    section.classList.remove('hidden');
    event.target.style.display = 'none';
}

function includeHTML() {
    var elements, i, element, file, xhttp;
    elements = document.getElementsByTagName("*");
    for (i = 0; i < elements.length; i++) {
        element = elements[i];
        file = element.getAttribute("include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {element.innerHTML = this.responseText;}
                    if (this.status == 404) {element.innerHTML = "Page not found.";}
                    element.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

// Call includeHTML function to include HTML files
includeHTML();

