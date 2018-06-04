window.onload = function() {

    function apicall(){

        $("#submit").on("click", function(e){
            e.preventDefault(); //prevent reload

            // get input
            var searchTerm = document.getElementById("input").value.replace(/\s/gi, '%20');
            console.log("search term:", searchTerm);

            // change any possible spaces for %20s

            var wikipediaAPI = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=15&search=${searchTerm}`;
            // var apiCall = $.getJSON(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=15&search=${searchTerm}`);
            console.log('api call', wikipediaAPI)

            $.ajax({

                url: wikipediaAPI,
                type: "get",
                dataType: "json",
                success: function(data){

                    // console.log(data[0]);
                    // console.log(data[1][1]);
                    // console.log(data[2][1]);
                    // console.log(data[3][1]);

                    for (var i=0; i<data[1].length; i++){
                        $("#results").append('<p>hello</p>');
                    }
                }
            })
        });
    }




    apicall();

}