// variable place holder for loader
var loadWrapper = document.querySelector(".loader-wrapper");

// while the page loads the loader icon will display
$(window).on("load", function(){
    $(loadWrapper).fadeOut("slow");
 });