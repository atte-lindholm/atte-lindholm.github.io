function openSidebar() {
    var sidebar = document.getElementById('sidebar');
    var menuIcon = document.querySelector('.menu-icon');
    
    sidebar.style.width = '250px';
    menuIcon.style.right = '250px'; // Adjust the value to match the width of the sidebar
}

function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    var menuIcon = document.querySelector('.menu-icon');
    
    sidebar.style.width = '0';
    menuIcon.style.right = '0'; // Reset to the original position
}

function scrollToBottom(event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the target element
    var targetElement = document.querySelector('.contact-info');

    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
}