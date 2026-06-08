document.addEventListener("DOMContentLoaded", function() {
    fetch("episodes.json")
    .then(r => r.json())
    .then(data => {
      document.getElementById("episode-count").textContent = data.count;
    });
})