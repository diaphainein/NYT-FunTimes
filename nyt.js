
$("button").on("click", function() {

	var searchTerm = $("#searchBox").val();

	var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

	var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
	 authKey + "&q=";
	
	var records = $("#numRec").val();
	
	var startDate = $("#startDate").val();

	var endDate = $("#endDate").val();

	var queryURL = queryURLBase + searchTerm + records + startDate + endDate;

	$.ajax({
	        url: queryURL,
	        method: "GET"
	      }).done(function(response) {
	      	
	      	console.log("response");
	      	var results = response.data;


	      });

});
