window.onload = function() {

    $("#submit").on("click", function(e){
        e.preventDefault(); //prevent reload

        var searchTerm = document.getElementById("input").value;
        console.log("search term:", searchTerm);


    });


    var r = $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=15&search=what');

}