document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hamburger").addEventListener("click", function(){
        document.getElementById("hamburgerMenu").classList.remove('hidden');
    })
    document.getElementById("hamburgerMenu").addEventListener("click", function() {
        document.getElementById("hamburgerMenu").classList.add("hidden");
    })
});