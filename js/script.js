var movies = obj;

/*function that saves the movie information (including html codes) and appends it to the movie wrapper*/

function addMovie (img, name, description, randomNum, randomNumMinus) {
	var movie = `<div class="col-md-12 col-lg-6 movie-description h-100 shadow-lg rounded">
					<div class="row"><div class="col-3"><img class='img-fluid w-100 rounded border' src="${img}"></div>
					<div class="col-9 d-flex align-content-between flex-wrap">
						<div class="col-12">
							<h2>${name}</h2>
							<h5>${description}</h5>
						</div>
						<div class="col-12 d-flex align-items-end justify-content-end">	
							<h2 class="text-success">Like <span class="fas fa-thumbs-up text-success like-btn"></span>
								<span class="fa-stack"> 
									<span class="fas fa-circle fa-stack-2x"></span> 
									<span class="fa-stack-1x text-white like-amnt">${randomNum}</span>
								</span>
							</h2>
							<h2 class="text-danger">Dislike <span class="fas fa-thumbs-down text-danger dislike-btn"></span>
								<span class="fa-stack"> 
									<span class="fas fa-circle fa-stack-2x"></span> 
									<span class="fa-stack-1x text-white dislike-amnt">${randomNumMinus}</span>
								</span>
							</h2>
						</div></div>
					</div></div>`;
	$(movie).appendTo(".movie-wrapper");				
}

/*Random number functions for positive and negative integer values which are added as value for like/dislike amounts*/

function getRndInteger(n) {
	return Math.floor(Math.random() * (n));
}

function getRndIntegerMinus (n) {
	return Math.floor(Math.random() * (n)) - n;
}

/*Function calling the addMovie() function for each object from the json file -> also saving a global variable 
"standard" which is later used for a default sorting option*/

function createList() {
	for (let i =0; i<movies.length; i++) {
	addMovie(movies[i].img, movies[i].name, movies[i].description, getRndInteger(101), getRndIntegerMinus(101));
	}
	standard = $(".movie-description");
}
createList()

/*Increment buttons to add Likes or Dislikes*/

$(".like-btn").on('click', function() {
	let y = $(this).parent().find(".like-amnt").text();
	y++;
	$(this).parent().find(".like-amnt").text(y);
});

$(".dislike-btn").on('click', function() {
	let x = $(this).parent().find(".dislike-amnt").text();
	x--;
	$(this).parent().find(".dislike-amnt").text(x);
})

/*Default order under Sort-submenu to sort the movies according to the order they were supplied in -> by appending the standard variable from before*/

$("#default-order").on('click', function() {
	$(".movie-wrapper").append(standard);
});

/*Sorting algorithm in descending and ascending order for both, Like and Dislike values, bound to the buttons in the Sort-submenu.
First the divs with class "movie-description" get sorted and saved into a variable, which is then appended to the wrapper.
Things to watch out for -> parseInt() the retrieved values or it won't work properly for values < 10 !!
Adding "? 1 : -1" is important as well - without it the functions don't work, at least on Chrome browser*/ 

$("#descending-sort").on('click', function() {
	let ordered = $(".movie-description").sort(function (a,b) {
		return parseInt($(a).find(".like-amnt").text()) < parseInt($(b).find(".like-amnt").text()) ? 1 : -1;
	});
	$(".movie-wrapper").append(ordered);
	})

$("#ascending-sort").on('click', function() {
	let ordered = $(".movie-description").sort(function (a,b) {
		return parseInt($(a).find(".like-amnt").text()) > parseInt($(b).find(".like-amnt").text()) ? 1 : -1;
	});
	$(".movie-wrapper").append(ordered);
});

$("#descending-sort-dl").on('click', function() {
	let ordered = $(".movie-description").sort(function (a,b) {
		return parseInt($(a).find(".dislike-amnt").text()) < parseInt($(b).find(".dislike-amnt").text()) ? 1 : -1;
	});
	$(".movie-wrapper").append(ordered);
	})

$("#ascending-sort-dl").on('click', function() {
	let ordered = $(".movie-description").sort(function (a,b) {
		return parseInt($(a).find(".dislike-amnt").text()) > parseInt($(b).find(".dislike-amnt").text()) ? 1 : -1;
	});
	$(".movie-wrapper").append(ordered);
});

