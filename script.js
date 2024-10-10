// Tab navigation
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Main tab functionality
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all tab contents
            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });

            // Remove active class from all tab links
            tabLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            // Add active class to clicked tab link and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Sub-tab functionality
    const subTabLinks = document.querySelectorAll('.sub-tab-link');

    subTabLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const subTabId = this.getAttribute('data-subtab');
            const parentSection = this.closest('.tab-content');

            // Remove active class from all sub-tab contents within the same section
            parentSection.querySelectorAll('.sub-tab-content').forEach(function(content) {
                content.classList.remove('active');
            });

            // Remove active class from all sub-tab links within the same section
            parentSection.querySelectorAll('.sub-tab-link').forEach(function(link) {
                link.classList.remove('active');
            });

            // Add active class to clicked sub-tab link and corresponding content
            this.classList.add('active');
            parentSection.querySelector('#' + subTabId).classList.add('active');
        });
    });
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? carouselImages.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        showImage(currentIndex);
    });

    // Initialize carousel
    showImage(currentIndex);
});
