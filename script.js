function search(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the search query from the input field
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim().toLowerCase();
  
    // Perform the search
    const products = document.querySelectorAll('.product');
    for (const product of products) {
      const productTitle = product.querySelector('h3').textContent.toLowerCase();
      const productDescription = product.querySelector('p').textContent.toLowerCase();
  
      if (productTitle.includes(query) || productDescription.includes(query)) {
        product.style.display = 'block'; // Show matching products
      } else {
        product.style.display = 'none'; // Hide non-matching products
      }
    }
  }