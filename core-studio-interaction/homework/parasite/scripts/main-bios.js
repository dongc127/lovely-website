document.body.style.backgroundImage='url("https://images.yourstory.com/cs/images/people/main-qimg-87001d2ce810c2f48c97032cbc905939-1578303703685.webp")'

document.body.style.filter="blur(10px)";

var images = [(
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
"https://images.squarespace-cdn.com/content/v1/5bce1ed034c4e2d741fe15fc/1542058813138-D0CYK18TQXAAOBAJ1JVG/ke17ZwdGBToddI8pDm48kP06O0_IHyRXSOOiqwgWaApZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEHLRkg2cosQUGLeQ33UzXdgIxPDaVwE3LlEpL74qP4JVW4jCyXLPvvdR287iymYt8/Female_Blank_Avatar.jpg",
"https://onlinelearninginsights.files.wordpress.com/2012/06/facebook-avatar.png",
"data:image/jpeg;base64,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",
"https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png"
)];

$('img').each( function(index, element) {
    var image = images[index%5]
    $(this).attr({"src": image, "srcset": image})
  }
);

if (confirm("Dont trust these people")) {
	txt="next";
}	else{
	txt="back"
};
