 var places = [
	{
		"name": "Albertine",
		"location":"Upper East Side",
		"fact":"There is a hand painted ceiling of celestial scenes that caps the shelves of books on the second floor of Albertine, a bookstore on Musuem Mile.",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2I0ZjE0YTE3LWNmMzQtNDUyYS04MDUxLTYyNWFiZmE2ZTFjNDQ2YTBlZGVjOThmOThmNzA4ZF9EMDhFQkQ1QS05MjJFLTQ2OUEtODYxMi1EMDI2MjU0MDE5MkYuanBlZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/D08EBD5A-922E-469A-8612-D0262540192F.jpeg'>",
		"left":"50px",
		"top":"400px",
		"admission":"free"
	},
	{
		"name":"Sunshine Laundromat",
		"location":"Brooklyn",
		"fact":"Go past the washing machines there are classic pinball machines that fill the walls of the laundromat.",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzFkYjcwZjg1MDFhZmUxMjAzYl9JTUdfNjg1My5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/IMG_6853.JPG'>",
		"left":"800px",
		"top":"50px",
		"admission":"free"
	},
	{
		"name":"Roosevelt Island Smallpox Hospital Ruins",
		"location":"Roosevelt Is.",
		"fact":"Take the F to Roosevelt Island and the ruins will be on your right, visit the site where patients were treated for one of the most impactful diseases in human history.",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzBiZjM5ZGRjLWQ2YzItNDUzMy1iYmUxLWQ4ODJhNWI3MTcxOTgzNDU1Nzg3MzNhNWU4YzAwOV9qdW5lMy1TbWFsbFBveC1zcGhlcmljYWxTdGl0Y2guanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/june3-SmallPox-sphericalStitch.jpg'>",
		"left":"500px",
		"top":"150px",
		"admission":"free"
		},
	{
		"name":"The Cathedral Church of St. John the Divine",
		"location":"Uptown",
		"fact":"The 127 year old unfinished catherdral is one of the 5 largest in the world. It features one of the last works by artist Keith Haring and the stained glass is beautiful on a sunny day.",
		"pic":"<img src='https://www.stjohndivine.org/images/pages/home-hero.jpg'>",
		"left":"800px",
		"top":"300px",
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
		"left":"1000px",
		"top":"250px",
		"admission":"notfree"
		},
	{
		"name":"Abolitionist Place",
		"location":"Brooklyn ",
		"fact":"This block in downtown Brooklyn was a hotbed of antislavery activism along the Underground Railroad.",
		"pic":"<img src='https://untappedcities.com/wp-content/uploads/2019/08/227-Duffield-Street-Undeground-Railroad-Downtown-Brooklyn-Abolitionist-Place-Demolition-NYC_5-1.jpg'>",
		"left":"200px",
		"top":"150px",
		"admission":"free"
		},
		{
		"name":"Lesbian Herstory Archives",
		"location":"Brooklyn ",
		"fact":"The world's largest collection of materials relating to lesbian history is housed in a townhouse. The motto 'In memory of the voice we have lost'.",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2ZlY2E4NTllNTQzZjA0N2ZhMF84MDBweC1MZXNiaWFuX0hlcnN0b3J5X0FyY2hpdmVzX0dheV9QcmlkZV8yMDA3LmpwZyJdLFsicCIsInRodW1iIiwieDM5MD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/800px-Lesbian_Herstory_Archives_Gay_Pride_2007.jpg'>",
		"left":"200px",
		"top":"500px",
		"admission":"free"
		},
		{
		"name":"Vander Ende-Onderdonk House",
		"location":"Queens",
		"fact":"The oldest Dutch colonial stone house in New York City is a hidden gem on the border of Brooklyn and Queens. ",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2Q2YjNmYmIyNTY4MDZmNTE1OF84MDBweC1PbmRlcmRvbmtfSG91c2VfRmx1X0F2X2plaC5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0'>",
		"left":"850px",
		"top":"450px",
		"admission":"free"
		},
		{
		"name":"Alexander Hamilton Grange National Memorial",
		"location":"Uptown",
		"fact":"The only home that Alexander Hamilton ever owned has a history almost as troubled as his own.'It's quiet Uptown'",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzZuNnphZGlxa2piNGE0a2Q1ZTMxYWQ0MjNlZTY3NGVjY2FfMjAxNjExMjBfMTU0MDAzLmpwZyJdLFsicCIsInRodW1iIiwieDM5MD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/20161120_154003.jpg'>",
		"left":"500px",
		"top":"500px",
		"admission":"free"
		},
		{
		"name":"Woodlawn Cemetary",
		"location":"Bronx",
		"fact":"Its 1,300 mausoleums run the gamut of architectural styles, including the Art Nouveau tomb of Titanic victims Isidor and Ida Straus and the Egyptian Modern mausoleum of the Woolworths.",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzMzYzVhNDEzM2UzODkzMGFiNl93b29kbGF3bm1vb25saWdodDEyLmpwZyJdLFsicCIsInRodW1iIiwieDM5MD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d'>",
		"left":"50px",
		"top":"50px",
		"admission":"free"
		},
		{
		"name":"The Little Church Around the Corner",
		"location":"Midtown",
		"fact":"This Fifth Avenue church has long been the favored worshiping place of Broadway actors and vaudeville performers. In 2012 the first same sex marriage took place in 'The Little Church Around the Corner'",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzFlMTkwMTY4LTkzZDAtNGI4MC1iYzk4LWRhYzI5ZTYyMDcyMDk0YmIzNzEyNmQzYjQ4YTE0OF9GOEY4RTcxNC1CNjg2LTQ3MDYtOTJBNi04RjBBQkM5QjUyMTAuanBlZyJdLFsicCIsInRodW1iIiwieDM5MD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/F8F8E714-B686-4706-92A6-8F0ABC9B5210.jpeg'>",
		"left":"1100px",
		"top":"50px",
		"admission":"free"
		},
		{
		"name":"United Palace Theatre",
		"location":"Up-Uptown",
		"fact":"THE WONDER THEATRES WERE FIVE giant, lavish movie palaces that opened around New York City in 1929 and 1930. While cinemas were plentiful at the time, the Wonder Theatres were a cut above the rest.",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2IxNzRhNjEzLTEyZjUtNDc3Mi05MTc0LTFlNTYyM2U2MjEyYzJhMjM3OWE3Mjg3YWNhMzE3Y18xMjAwcHgtVW5pdGVkX1BhbGFjZV8tX1Bhbm9yYW1hLmpwZyJdLFsicCIsInRodW1iIiwieDM5MD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/1200px-United_Palace_-_Panorama.jpg'>",
		"left":"1150px",
		"top":"400px",
		"admission":"notfree"
		},
		{
		"name":"The High Bridge",
		"location":"Up-Uptown",
		"fact":"Connecting Manhattan and The Bronx. The bridge was completed in 1848, nearly 11 years after construction began, and stands 140 feet high and over 2,000 feet long. The oldest bridge in NYC.",
		"pic":"<img src='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzYyYzMxMWYzOWZiMzQyN2U2OV9QMTA0MDI3NmxvLmpwZyJdLFsicCIsInRodW1iIiwieDM5MD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d'>",
		"left":"1200px",
		"top":"200px",
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

// function sortByAdmission(){
// 	places.sort
// }

// for(var i=0; i< places.length; i++){

// var items = $('<div/>', {'class':'item' })
// 			.data('places', places[i])
// 			.html(places[i].pic + '<br>' + '<span>' + places[i].fact + '</span>')
// 			.css({
// 				"position" : "absolute",
// 				"max-width" : "300px",
// 				"max-height" : "300px",
// 				"left" : places[i].left,
// 				"top" : places [i].top,
// 				"background-color":"orange",
// 				"border-color":"black",
// 			})
// 			.hover( function() { $(this).find('span').show() },
// 			 function() { $(this).find('span').hide() })
// 			.click(function(){
// 				$(this).append($(this).data('places').location);
// 			});

// console.log(places[i].fact)

// $(".places").append(items)
// }


for(var i=0; i< places.length; i++){

var items = $('<div/>', {'class':'item ' + places[i].admission})
			.data('places', places[i])
			.html(places[i].pic + '<br>' + '<span>' + places[i].fact + '</span>')
			.css({
				"position" : "absolute",
				"max-width" : "300px",
				"max-height" : "300px",
				"left" : places[i].left,
				"top" : places [i].top,
				"background-color":"plum",
				"font-color":"white",
				"font-family":"monospace Lucida Console"
			})
			.hover( function() { $(this).find('span').show() },
			 function() { $(this).find('span').hide() })
			.click(function(){
				$(this).append($(this).data('places').location);
			});

console.log(places[i].fact)

$(".places").append(items)
}

$('.free').css("border","7px palegreen double","font-color","white")

// jquery toggle 


