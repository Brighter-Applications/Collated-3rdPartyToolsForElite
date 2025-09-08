document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const toolCards = document.querySelectorAll('.tool-card[data-category]');
    const categorySections = document.querySelectorAll('.category-section');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Manage active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter logic for cards
            toolCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show/hide entire sections based on visible cards
            categorySections.forEach(section => {
                // Check for visible cards within this section
                const visibleCards = section.querySelectorAll('.tool-card[data-category][style*="display: block"]');
                
                if (visibleCards.length > 0) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

        });
    });
    
    // Set the initial view to show all tools and sections
    document.querySelector('.filter-btn[data-filter="all"]').click();
});
