window.onload = function() {

    var searchTerm = document.getElementById("input").value;

    var r = $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=15&search=what');

}