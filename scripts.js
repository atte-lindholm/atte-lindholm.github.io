document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrollToBottomButton').addEventListener('click', function() {
        // Scroll to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrollToTopButton').addEventListener('click', function() {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
