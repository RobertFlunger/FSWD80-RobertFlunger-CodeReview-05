var movies = obj;
console.log(movies[0].name)



for (let i = 0; i<6; i++) {
	$("#title" + i).text(movies[i].name);
	$("#desc" + i).text(movies[i].description);
	$("#img-cont" + i).html("<img class='img-fluid h-100 w-100' src='" + movies[i].img + "'>");
}

$(".like-btn").on('click', function() {
		let y = $(this).parent().find(".like-amnt").text();
		y++
		console.log(y);
		$(this).parent().find(".like-amnt").text(y);
	});

console.log(movies.length)
var length = 7
var sorted = new Array();
$("#order").on('click', function() {
	console.log($(".movie-description:nth-child(" + 1 + ") .like-amnt").text());
	for (let i = 1; i<length; i++) {
		sorted[i] = $(".movie-description:nth-child(" + i + ") .like-amnt").attr('id');
		
	}
	
	sorted = sorted.sort().reverse();
	console.log(sorted);
/*
	$("#likes0").closest(".movie-description").addClass("order-0");
	$("#likes2").closest(".movie-description").addClass("order-1");
*/

})