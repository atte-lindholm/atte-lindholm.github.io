function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var menuIcon = document.querySelector('.menu-icon');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        menuIcon.style.right = '10px'; // Adjust the original position
    } else {
        sidebar.style.width = '250px';
        menuIcon.style.right = '260px'; // Adjust the position when the sidebar is open
    }
}

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
