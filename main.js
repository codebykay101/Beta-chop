// Menu toggle functionality 
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Function to change the active class of the menu items
function initMenuToggle() {
    const menuItems = document.querySelectorAll('nav ul li a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            
            // Add active class to the clicked item
            this.classList.add('active');
        });
    });
}

// Function to change the image of the hero section every 4 seconds
function initImageSlider() {
    const mainImage = document.querySelector('.hero-image .main-image');
    const heroSection = document.querySelector('.hero-section');

    const images = [
        { src: './image/food1.png', background: './image/bgMeal1.png' },
        { src: './image/food2.png', background: './image/bgMeal2.png' },
        { src: './image/food3.png', background: './image/bgMeal3.png' }
    ];

    let currentIndex = 0;

    function changeImage() {
        mainImage.style.opacity = 0; // Fade out the current image

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            mainImage.src = images[currentIndex].src;
            heroSection.style.backgroundImage = `url(${images[currentIndex].background})`;
            mainImage.style.opacity = 1; // Fade in the new image
        }, 1000); // Match this duration with the CSS transition duration
    }

    setInterval(changeImage, 4000); // Change image every 4 seconds
}

// Function to change the image and text of the hero section when hovering over the meal options
function initMealOptionsHover() {
    const mealOptions = document.querySelectorAll('.meal-option');
    const mainImage = document.querySelector('.hero-image .main-image');
    const heroSection = document.getElementById('hero-section');
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSpan = document.querySelector('.hero-content span');
    const heroParagraph = document.querySelector('.hero-content p');
    const defaultImageSrc = mainImage.src;
    const defaultBackground = heroSection.style.backgroundImage;
    const defaultSpanText = heroSpan.textContent;
    const defaultParagraphText = heroParagraph.textContent;

    mealOptions.forEach(option => {
        option.addEventListener('mouseover', function() {
            const newImage = this.getAttribute('data-image');
            const newBackground = this.getAttribute('data-background');
            const newTitle = this.getAttribute('data-title');
            const newDescription = this.getAttribute('data-description');
            
            mainImage.style.opacity = 0; // Start fade out
            heroSpan.style.opacity = 0; // Start fade out
            heroParagraph.style.opacity = 0; // Start fade out
            
            setTimeout(() => {
                mainImage.src = newImage;
                mainImage.style.opacity = 1; // Fade in new image

                heroSpan.textContent = newTitle;
                heroParagraph.textContent = newDescription;
                heroSpan.style.opacity = 1; // Fade in new span
                heroParagraph.style.opacity = 1; // Fade in new paragraph
            }, 500); // Match this duration with the CSS transition duration
            
            heroSection.style.backgroundImage = `url(${newBackground})`; // Change background image
        });

        option.addEventListener('mouseout', function() {
            mainImage.style.opacity = 0; // Start fade out
            heroSpan.style.opacity = 0; // Start fade out
            heroParagraph.style.opacity = 0; // Start fade out
            
            setTimeout(() => {
                mainImage.src = defaultImageSrc;
                mainImage.style.opacity = 1; // Fade in default image

                heroSpan.textContent = defaultSpanText;
                heroParagraph.textContent = defaultParagraphText;
                heroSpan.style.opacity = 1; // Fade in default span
                heroParagraph.style.opacity = 1; // Fade in default paragraph
            }, 500); // Match this duration with the CSS transition duration
            
            heroSection.style.backgroundImage = defaultBackground; // Revert to default background image
        });
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
    toggleMenu();
    initMenuToggle();
    initImageSlider();
    initMealOptionsHover();
});
