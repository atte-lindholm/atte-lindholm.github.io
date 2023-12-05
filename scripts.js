function openSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = '250px';
}

function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = '0';
}

function scrollToBottom(event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the target element
    var targetElement = document.querySelector('.contact-info');

    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }