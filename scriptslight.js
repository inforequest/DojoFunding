document.addEventListener('DOMContentLoaded', function() {
    var popupModal = document.getElementById('popupModal');
    var calendlyModal = document.getElementById('calendlyModal');
    var calendlyModalContent = document.querySelector('#calendlyModal .modal-content');
  var closeModal = document.getElementById('closeModal');
    var button = document.querySelector('.button');
    var button1 = document.querySelector('.button1'); 
    var button2 = document.querySelector('.button2');


     calendlyModal.style.display = 'none';
    

    if (calendlyModal && closeModal) {
        closeModal.addEventListener('click', function() {
            calendlyModalContent.classList.add('float-out');
            calendlyModal.classList.add('fade-out');

            // Wait for the animation to finish before hiding the modal
            setTimeout(function() {
                calendlyModal.style.display = 'none';
            }, 250); // Match the duration of the animation
        });
    } else {
        console.log('Calendly Modal or back button not found');
    }

    if (button) {
        button.addEventListener('click', function() {
            calendlyModal.style.display = 'block';
            calendlyModalContent.classList.remove('float-out');
            calendlyModal.classList.remove('fade-out');
        });
    } else {
        console.log('Button not found');
    }

    if (button1) {
        button1.addEventListener('click', function() {
            calendlyModal.style.display = 'block';
            calendlyModalContent.classList.remove('float-out');
            calendlyModal.classList.remove('fade-out');
        });
    } else {
        console.log('Button1 not found');
    }

      if (button2) {
        button1.addEventListener('click', function() {
            calendlyModal.style.display = 'block';
            calendlyModalContent.classList.remove('float-out');
            calendlyModal.classList.remove('fade-out');
        });
    } else {
        console.log('Button2 not found');
    }

    window.addEventListener('click', function(event) {
        if (event.target === calendlyModal) {
            calendlyModal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.getElementById('hamburgerMenu');
    var navMenu = document.getElementById('navMenu');
    var bodyContent = document.querySelectorAll('body > *:not(.header)');
    var closeMenu = document.getElementById('closeMenu');

    hamburgerMenu.addEventListener('click', function() {
        if (navMenu.classList.contains('show')) {
            closeMenu.style.display = 'none'; // Hide the close menu button
            hamburgerMenu.style.display = 'block'; // Show the hamburger menu button
            navMenu.classList.remove('show');
            bodyContent.forEach(function(element) {
                element.classList.remove('blur');
            });
        } else {
            hamburgerMenu.style.display = 'none'; // Hide the hamburger menu button
            closeMenu.style.display = 'block'; // Show the close menu button
            navMenu.classList.add('show');
            bodyContent.forEach(function(element) {
                element.classList.add('blur');
            });
        }
    });

    closeMenu.addEventListener('click', function() {
        closeMenu.style.display = 'none'; // Hide the close menu button
        hamburgerMenu.style.display = 'block'; // Show the hamburger menu button
        navMenu.classList.remove('show');
        bodyContent.forEach(function(element) {
            element.classList.remove('blur');
        });
    });

    navMenu.addEventListener('click', function() {
        closeMenu.style.display = 'none'; // Hide the close menu button
        hamburgerMenu.style.display = 'block'; // Show the hamburger menu button
        navMenu.classList.remove('show');
        bodyContent.forEach(function(element) {
            element.classList.remove('blur');
        });
    });

    var navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu.style.display = 'none'; // Hide the close menu button
            hamburgerMenu.style.display = 'block'; // Show the hamburger menu button
            navMenu.classList.remove('show');
            bodyContent.forEach(function(element) {
                element.classList.remove('blur');
            });
        });
    });
});
