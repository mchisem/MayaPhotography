// variable place holder for loader
var loader = document.querySelector(".loader-wrapper");

// while the page loads the loader icon will display
$(window).on("load", function(){
    $(loader).fadeOut("slow");
 });