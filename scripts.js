// JavaScript to handle filtering and sorting functionality
const priceFilter = document.getElementById('price-filter');
const categoryFilter = document.getElementById('category-filter');
const catalogItems = document.getElementById('catalog-items');

// Event listener for price filter
priceFilter.addEventListener('change', () => {
    const sortOrder = priceFilter.value;
    const items = Array.from(catalogItems.children);

    // Sort items based on price in ascending or descending order
    items.sort((a, b) => {
        const priceA = parseFloat(a.dataset.price);
        const priceB = parseFloat(b.dataset.price);
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

    // Re-append sorted items to the catalog
    items.forEach(item => catalogItems.appendChild(item));
});

// Event listener for category filter
categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;
    const items = Array.from(catalogItems.children);

    // Show or hide items based on selected category
    items.forEach(item => {
        if (!selectedCategory || item.dataset.category === selectedCategory) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

