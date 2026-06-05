document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hamburger").addEventListener("click", function(){
        document.getElementById("hamburgerMenu").classList.remove('hidden'); 
        document.getElementById("ham").classList.add("hidden");
    })
    document.getElementById("hamburgerMenu").addEventListener("click", function() {
        document.getElementById("hamburgerMenu").classList.add("hidden");
        document.getElementById("ham").classList.remove('hidden'); 
    })
});