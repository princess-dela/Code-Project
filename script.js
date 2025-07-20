document.querySelector('.search-bar button').addEventListener('click', function() {
    var query = document.querySelector('.search-bar input').value;
    if (query) {
        window.location.href = 'https://www.amazon.com/s?k=' + encodeURIComponent(query);
    }
});
