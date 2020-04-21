var places = [
	{
		"name": "Albertine",
		"location":"Upper East Side",
		"fact":"There is a hand painted ceiling of celestial scenes that caps the shelves of books on the second floor of Albertine, a bookstore on Musuem Mile.",
		"pic":"url('https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2I0ZjE0YTE3LWNmMzQtNDUyYS04MDUxLTYyNWFiZmE2ZTFjNDQ2YTBlZGVjOThmOThmNzA4ZF9EMDhFQkQ1QS05MjJFLTQ2OUEtODYxMi1EMDI2MjU0MDE5MkYuanBlZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/D08EBD5A-922E-469A-8612-D0262540192F.jpeg')",
	},
	{
		"name":"Sunshine Laundromat",
		"location":"Brooklyn",
		"fact":"Go past the washing machines there are classic pinball machines that fill the walls of the laundromat.",
		"pic":"url('https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzFkYjcwZjg1MDFhZmUxMjAzYl9JTUdfNjg1My5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/IMG_6853.JPG')",
	},
	{
		"name":"Roosevelt Island Smallpox Hospital Ruins",
		"location":"Roosevelt Island",
		"fact":"Take the F to Roosevelt Island and the ruins will be on your right, visit the site where patients were treated for one of the most impactful diseases in human history.",
		"pic":"url('https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzBiZjM5ZGRjLWQ2YzItNDUzMy1iYmUxLWQ4ODJhNWI3MTcxOTgzNDU1Nzg3MzNhNWU4YzAwOV9qdW5lMy1TbWFsbFBveC1zcGhlcmljYWxTdGl0Y2guanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/june3-SmallPox-sphericalStitch.jpg')",
	},
	{
		"name":"The Cathedral Church of St. John the Divine",
		"location":"Morningside Heights",
		"fact":"The 127 year old unfinished catherdral is one of the 5 largest in the world. It features one of the last works by artist Keith Haring and the stained glass is beautiful on a sunny day.",
		"pic":"url('https://www.stjohndivine.org/images/pages/home-hero.jpg')",
	},
	{
		"name":"Poster House Museum",
		"location":"Midtown",
		"fact":"This is the first museum in the United States dedicated exclusively to posters. They explore everything from avant-garde design, to changing societal norms, and all the fads and fashions over the last 160 years. A must see for graphic design students.",
		"pic":"url('https://thumbs-prod.si-cdn.com/OlWm2i2P4tx770ZTrQB96fNiwDs=/fit-in/1600x0/https://public-media.si-cdn.com/filer/48/f9/48f9274a-9b96-4b43-9fa2-6b492b443acc/poster-house-museum-nyc-untapped-cities1-1.jpg')",
	},
	{
		"name":"Bluestockings Bookstore",
		"location":"East Village",
		"fact":"New York City's only radical feminist independent bookstore. It is volunteer-powered, fair-trade café, and activist center",
		"pic":"url('https://s26162.pcdn.co/wp-content/uploads/2019/06/Bluestockings-e1561411438932.jpg')",
	},
	{
		"name":"Chinese Scholar's Garden",
		"location":"Staten Island",
		"fact":"This small and serene place for quiet reflection on Staten Island was built in China based on the gardens of the Ming Dynasty.",
		"pic":"url('https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL3RpaDlsYW5hOTNsY3c5YWcwZDkzZDNjZDUyMzczMDc2YTBfRFNDMDg2MDguSlBHIl0sWyJwIiwidGh1bWIiLCJ4MzkwPiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/DSC08608.JPG')",
	}


]

for(var i=0; i<5; i++){
$(".places").append('<div style="text-align:center; border-style:solid; border-width: 1px; border-color:lightsteelblue;">'+ places[i].pic + '<br>')
}
