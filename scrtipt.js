document.getElementById('scrollToBottomButton').addEventListener('click', function() {
    // Scroll to the bottom of the page
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});