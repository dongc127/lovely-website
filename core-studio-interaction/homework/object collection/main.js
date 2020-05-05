 var places = [
	{
		"name": "Albertine",
		"location":"Upper East Side",
		"fact":"There is a hand painted ceiling of celestial scenes that caps the shelves of books on the second floor of Albertine, a bookstore on Musuem Mile.",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2I0ZjE0YTE3LWNmMzQtNDUyYS04MDUxLTYyNWFiZmE2ZTFjNDQ2YTBlZGVjOThmOThmNzA4ZF9EMDhFQkQ1QS05MjJFLTQ2OUEtODYxMi1EMDI2MjU0MDE5MkYuanBlZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/D08EBD5A-922E-469A-8612-D0262540192F.jpeg'>",
		"left":"50px",
		"top":"200px",
		"admission":"free"
	},
	{
		"name":"Sunshine Laundromat",
		"location":"Brooklyn",
		"fact":"Go past the washing machines there are classic pinball machines that fill the walls of the laundromat.",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzFkYjcwZjg1MDFhZmUxMjAzYl9JTUdfNjg1My5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/IMG_6853.JPG'>",
		"left":"00px",
		"top":"600px",
		"admission":"free"
	},
	{
		"name":"Roosevelt Island Smallpox Hospital Ruins",
		"location":"Roosevelt Island",
		"fact":"Take the F to Roosevelt Island and the ruins will be on your right, visit the site where patients were treated for one of the most impactful diseases in human history.",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzBiZjM5ZGRjLWQ2YzItNDUzMy1iYmUxLWQ4ODJhNWI3MTcxOTgzNDU1Nzg3MzNhNWU4YzAwOV9qdW5lMy1TbWFsbFBveC1zcGhlcmljYWxTdGl0Y2guanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/june3-SmallPox-sphericalStitch.jpg'>",
		"left":"500px",
		"top":"150px",
		"admission":"free"
		},
	{
		"name":"The Cathedral Church of St. John the Divine",
		"location":"Morningside Heights",
		"fact":"The 127 year old unfinished catherdral is one of the 5 largest in the world. It features one of the last works by artist Keith Haring and the stained glass is beautiful on a sunny day.",
		"pic":"<img src='https://www.stjohndivine.org/images/pages/home-hero.jpg'>",
		"left":"700px",
		"top":"200px",
		"admission":"notfree"
	},
	{
		"name":"Poster House Museum",
		"location":"Midtown",
		"fact":"This is the first museum in the United States dedicated exclusively to posters. They explore everything from avant-garde design, to changing societal norms, and all the fads and fashions over the last 160 years. A must see for graphic design students.",
		"pic":"<img src='https://thumbs-prod.si-cdn.com/OlWm2i2P4tx770ZTrQB96fNiwDs=/fit-in/1600x0/https://public-media.si-cdn.com/filer/48/f9/48f9274a-9b96-4b43-9fa2-6b492b443acc/poster-house-museum-nyc-untapped-cities1-1.jpg'>",
		"left":"600px",
		"top":"250px",
		"admission":"notfree"
		},
	{
		"name":"Chinese Scholar's Garden",
		"location":"Staten Island",
		"fact":"This small and serene place for quiet reflection on Staten Island was built in China based on the gardens of the Ming Dynasty.",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL3RpaDlsYW5hOTNsY3c5YWcwZDkzZDNjZDUyMzczMDc2YTBfRFNDMDg2MDguSlBHIl0sWyJwIiwidGh1bWIiLCJ4MzkwPiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/DSC08608.JPG'>",
		"left":"400px",
		"top":"650px",
		"admission":"notfree"
		},
	{
		"name":"Abolitionist Place",
		"location":"Brooklyn ",
		"fact":"This block in downtown Brooklyn was a hotbed of antislavery activism along the Underground Railroad.",
		"pic":"<img src='https://untappedcities.com/wp-content/uploads/2019/08/227-Duffield-Street-Undeground-Railroad-Downtown-Brooklyn-Abolitionist-Place-Demolition-NYC_5-1.jpg'>",
		"left":"100px",
		"top":"150px",
		"admission":"free"
		},
]

// I want to have a hover feature for the facts
// 2. use keys or mousepress to showcase where each location is
// mouse press for names of places to showup
// using json action do the hover thing
// create a type property that sorts the type of activity
// Json methods for filter 
// You dont have to put css in this for loop
// for the images just fix img src

// button that shows free places and notfree things
// do hidden views or border stuff

// for(var i=0; i<places.length; i++){
// $(".places").append("<div class='item "+[i]+"'>" + places[i].pic + '<br>' + "</div>")
// 	.css({"position":"absolute","left" : places[i].left,"top" : places[i].top })
// }
// $('.places').hover(function(){
// 	$(this).append(places[i].fact);
// });
// $(document).ready(function(){
// 	$(".places").click(function(){
// 	$(this).append(places[i].location);
// 	})
// })

for(var i=0; i< places.length; i++){

var items = $('<div/>', {'class':'item' })
			.data('places', places[i])
			.html(places[i].pic + '<br>' + '<span>' + places[i].fact + '</span>')
			.css({
				"position" : "absolute",
				"max-width" : "300px",
				"max-height" : "300px",
				"left" : places[i].left,
				"top" : places [i].top,
			})
			.hover( function() { $(this).find('span').show() },
			 function() { $(this).find('span').hide() })
			.click(function(){
				$(this).append($(this).data('places').location);
			});

console.log(places[i].fact)

$(".places").append(items)
}



