var imageArray = ["bildspel1.jpg", "bildspel2.jpg", "bildspel3.jpg"];

var myImage = document.getElementById("img");

var imageIndex = 1;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex = (imageIndex + 1) % imageArray.length;
}

var myTimer = setInterval(changeImage, 2000);

$(document).ready(function (){


	$("#stopKnapp").click(function(){
    clearInterval(myTimer);
});	
	$(window).resize(function(){
		if ($(window).width() <= 800) {
			$(".meny").hide();
		}
		else if ($(window).width() >= 800) {
			$(".meny").show();
		}
}).resize();

	$(".hamburgare").click(function(){
		$(".meny").slideToggle("slow");
	});
	
})
