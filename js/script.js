var movies = obj;
console.log(movies[0].name)

/*$.each(movies, function(img, name, description) {
	$('.movie-description .row').append(
		$()

*/

function addMovie (img, name, description) {
	var movie = `<div class="col-md-12 col-lg-6 movie-description h-100">
					<div class="row"><div class="col-3"><img class='img-fluid w-100 rounded border border-white' src="${img}"></div>
					<div class="col-9 d-flex align-content-between flex-wrap">
						<div class="col-12">
							<h2>${name}</h2>
							<h5>${description}</h5>
						</div>
						<div class="col-12 d-flex align-items-end justify-content-end">	
							<h2 class="text-success">Like <span class="fas fa-thumbs-up text-success like-btn"></span>
								<span class="fa-stack"> 
									<span class="fas fa-circle fa-stack-2x"></span> 
									<span class="fa-stack-1x text-white like-amnt">0</span>
								</span>
							</h2>
						</div></div>
					</div></div>`;
	$(movie).appendTo(".movie-wrapper");				
}


function createList() {
	for (let i =0; i<movies.length; i++) {
	addMovie(movies[i].img, movies[i].name, movies[i].description);
	}
	standard = $(".movie-description");
}
createList()

/*
for (let i = 0; i<6; i++) {
	$("#title" + i).text(movies[i].name);
	$("#desc" + i).text(movies[i].description);
	$("#img-cont" + i).html("<img class='img-fluid h-100 w-100 rounded border' src='" + movies[i].img + "'>");
}*/

$(".like-btn").on('click', function() {
		let y = $(this).parent().find(".like-amnt").text();
		y++
		console.log(y);
		$(this).parent().find(".like-amnt").text(y);
	});

$("#default-order").on('click', function() {
	$(".movie-wrapper").append(standard);
});

$("#descending-sort").on('click', function() {
	ordered = $(".movie-description").sort(function (a,b) {
		return parseInt($(a).find(".like-amnt").text()) < parseInt($(b).find(".like-amnt").text()) ? 1 : -1;
	});
	$(".movie-wrapper").append(ordered);
	})
	/*$(ordered).appendTo(".movie-wrapper");*/

$("#ascending-sort").on('click', function() {
	var ordered = "";
	ordered = $(".movie-description").sort(function (a,b) {
		return parseInt($(a).find(".like-amnt").text()) > parseInt($(b).find(".like-amnt").text()) ? 1 : -1;
	});
	$(".movie-wrapper").append(ordered);
});


