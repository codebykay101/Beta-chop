// Function to toggle the menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (navMenu && hamburger) {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    } else {
        console.error('Menu or hamburger element not found.');
    }
}

// Function to change the active class of the menu items
function initMenuToggle() {
    const menuItems = document.querySelectorAll('nav ul li a');
    if (menuItems.length > 0) {
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all menu items
                menuItems.forEach(menuItem => menuItem.classList.remove('active'));
                // Add active class to the clicked item
                this.classList.add('active');
            });
        });
    } else {
        console.error('Menu items not found.');
    }
}

// Animation for login - sign up form functionality
function initLoginForm() {
    const wrapper = document.querySelector('.wrapper');
    const signUpLink = document.querySelector('.signUp-link');
    const signInLink = document.querySelector('.signIn-link');

    if (wrapper && signUpLink && signInLink) {
        signUpLink.addEventListener('click', () => {
            wrapper.classList.add('animate-signIn');
            wrapper.classList.remove('animate-signUp');
        });

        signInLink.addEventListener('click', () => {
            wrapper.classList.add('animate-signUp');
            wrapper.classList.remove('animate-signIn');
        });
    } else {
        console.error('Wrapper or sign links not found.');
    }
}

// Function to change the image of the hero section every 4 seconds
function initImageSlider() {
    const mainImage = document.querySelector('.hero-image .main-image');
    const heroSection = document.querySelector('.hero-section');

    if (mainImage && heroSection) {
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
    } else {
        console.error('Main image or hero section not found.');
    }
}

// Function to change the image and text of the hero section when hovering over the meal options
function initMealOptionsHover() {
    const mealOptions = document.querySelectorAll('.meal-option');
    const mainImage = document.querySelector('.hero-image .main-image');
    const heroSection = document.getElementById('hero-section');
    const heroSpan = document.querySelector('.hero-content span');
    const heroParagraph = document.querySelector('.hero-content p');

    if (mealOptions.length > 0 && mainImage && heroSection && heroSpan && heroParagraph) {
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
    } else {
        console.error('Meal options or hero elements not found.');
    }
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing functions...');
    initMenuToggle();
    initLoginForm();
    initImageSlider();
    initMealOptionsHover();
});
