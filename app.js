

var searchBar = document.getElementById('input');
var submit = document.getElementById('submit');
var query = searchBar.value;

submit.addEventListener("submit", function(e){
	e.preventDefault();
	console.log(submit);
	console.log(query);
})

console.log(searchTerm);


function displayResult() {

}

