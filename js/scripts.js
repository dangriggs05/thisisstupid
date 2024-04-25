window.addEventListener('DOMContentLoaded', event => {
    // Function to shrink navbar on scroll
    const navbarShrink = function() {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Initialize navbar shrink function
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Initialize Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
    responsiveNavItems.forEach(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Function to handle scroll-based movements for title, subheading, and image
    function handleScrollMovements() {
        // Calculate the scroll position
        const scrollY = window.scrollY;

        // Define speed factors for movements
        const speedFactors = {
            title: 2,
            subheading: 1,
            image: .7,
        };

        // Define starting point for the image to begin moving
        const imageStartPoint = 500;

        // Adjust positions based on scroll position and speed factors
        // Title element
        const titleElement = document.getElementById('title');
        if (titleElement) {
            titleElement.style.transform = `translateY(${-scrollY * speedFactors.title}px)`;
        }

        // Subheading element
        const subheadingElement = document.getElementById('subheading');
        if (subheadingElement) {
            subheadingElement.style.transform = `translateY(${-scrollY * speedFactors.subheading}px)`;
        }

        // Image element
        const fadedImage = document.querySelector('.faded-image');
        if (fadedImage && scrollY > imageStartPoint) {
            const newTopPosition = (scrollY - imageStartPoint) * speedFactors.image;
            fadedImage.style.transform = `translateY(-${newTopPosition}px)`;
        } else if (fadedImage) {
            fadedImage.style.transform = `translateY(0px)`;
        }
    }

    // Add scroll event listener for scroll-based movements
    window.addEventListener('scroll', handleScrollMovements);
});
