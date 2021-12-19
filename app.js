// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// ***toggle*** - this toggles the class automatically - I can use this instead of writing out an if/else statement that says:
//if(links.classList.contains("show-links")) {
//    links.classList.remove("show-links");
//} else {
//    links.classList.add("show-links");
//}

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
   links.classList.toggle("show-links");
});