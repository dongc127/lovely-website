var songs = [
	{
		"name": "Save Your Tears",
		"artist":"The Weeknd",
		"genre":"R&B",
	},
	{
		"name":"Go to Town",
		"artist":"Doja Cat",
		"genre":"Pop",
	},
	{
		"name":"If the World Was Ending",
		"artist":"JP Saxe",
		"genre":"Pop",
	},
	{
		"name":"Supa Lonely",
		"artist":"Benee",
		"genre":"Pop",
	},
	{
		"name":"Somebody Else",
		"artist":"1975",
		"genre":"Synth Pop",
	}

]

// you can only do [i] within  a for loop
// so place the song thing inside the function

// songs[i].name

// for(var i=0; i<5; i++){
// 	console.log(songs[i].name)
// }

// // creating simple list
// for(var i=0; i<5; i++){
// $('blockquote').append('<div style= "padding:10px">' + songs[i].name + '<br>')
// }

// // creating a red border
// for(var i=0; i<5; i++){
// $('blockquote').append('<div style= "border-style: solid; border-color:red;">' + songs[i].name + '<br>')
// }

// // making the text center
// for(var i=0; i<5; i++){
// $('blockquote').append('<div style="text-align:center;">'+ songs[i].name + '<br>')
// }

// center + red border
for(var i=0; i<5; i++){
$("#song").append('<div style="text-align:center; border-style:solid; border-width: 1px; border-color:lightsteelblue;">'+ songs[i].name + '<br>')
}

