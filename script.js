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
