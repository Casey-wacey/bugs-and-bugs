
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hamburger").addEventListener("click", function(){
        document.getElementById("hamburgerMenu").classList.remove('hidden'); 
        document.getElementById("ham").classList.add("hidden");
    })
    document.getElementById("hamburgerMenu").addEventListener("click", function() {
        document.getElementById("hamburgerMenu").classList.add("hidden");
        document.getElementById("ham").classList.remove('hidden'); 
    })
    document.getElementById("choei").addEventListener("mouseover", function(){
        document.getElementById("choei").src = "images/choeidance.gif"; 
    })
    document.getElementById("choei").addEventListener("mouseout", function(){
        document.getElementById("choei").src = "images/choei.png"; 
    })
    document.getElementById("choei").addEventListener("click", function() {
        location.href = 'https://nunoke123.github.io/';
    })
    document.getElementById("casey").addEventListener("click", function() {
        location.href = 'https://casey-wacey.github.io/';
    })
});