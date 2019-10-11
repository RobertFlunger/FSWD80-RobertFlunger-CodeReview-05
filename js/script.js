var movies = obj;
console.log(movies[0].name)



for (let i = 0; i<6; i++) {
	$("#title" + i).text(movies[i].name);
	$("#desc" + i).text(movies[i].description);
	$("#img-cont" + i).html("<img class='img-fluid h-100 w-100 rounded border' src='" + movies[i].img + "'>");
}

$(".like-btn").on('click', function() {
		let y = $(this).parent().find(".like-amnt").text();
		y++
		console.log(y);
		$(this).parent().find(".like-amnt").text(y);
	});

var standard = $(".movie-description");

$("#default-order").on('click', function() {
	$(".movie-wrapper").append(standard);
});

$("#descending-sort").on('click', function() {
	var ordered = $(".movie-description").sort(function (a,b) {
		return $(a).find(".like-amnt").text() < $(b).find(".like-amnt").text() ? 1 : -1;
	});
	$(".movie-wrapper").append(ordered);
});

$("#ascending-sort").on('click', function() {
	var ordered = $(".movie-description").sort(function (a,b) {
		return $(a).find(".like-amnt").text() > $(b).find(".like-amnt").text() ? 1 : -1;
	});
	$(".movie-wrapper").append(ordered);
});

