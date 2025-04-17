// gallery.js
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.padding = '15px 5%';
            header.style.background = 'rgba(22, 41, 56, 0.95)';
        } else {
            header.style.padding = '20px 5%';
            header.style.background = 'var(--primary)';
        }
        
        // Back to top button
        const backToTop = document.getElementById('backToTop');
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Back to top functionality
    document.getElementById('backToTop').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Initialize all items as visible
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.style.display = 'block';
    });
});