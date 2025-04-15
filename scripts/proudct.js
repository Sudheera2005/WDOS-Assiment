document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    fetch("products.json")
        .then(response => response.json())
        .then(data => {
            const product = data.find(item => item.id === productId);
            if (product) {
                displayProduct(product);
            } else {
                document.getElementById("productDetails").innerHTML = "<p>Product not found.</p>";
            }
        });
});

function displayProduct(product) {
    const container = document.getElementById("productDetails");
    container.innerHTML = `
        <div id="product-details" class="product-details-card">
            <img class="product-img-large" src="${product.Image}" alt="${product.Name}" />

            <div class="product-info">
                <h2 class="product-name">${product.Name}</h2>
    
                <p class="product-description">${product.Description}</p>

                <p class="product-category"><strong>Category:</strong> ${product.Category}</p>
    
                <p class="product-price"><strong>Price:</strong> Rs.${product.Price}</p>
    
                <h3 class="details-heading">About this item:</h3>
                <pre class="product-details-text">${product.Details}</pre>
                <i  class='bx bxs-left-arrow'></i>
                <input type="number" class="quantity" >
                <i  class='bx bxs-right-arrow'></i>
                <button class="add-to-cart-btn">🛒 Add to Cart</button>
            </div>
        </div>

    `;
}

function addToCart(productId) {
    // Optional: Cart functionality (can integrate later)
    alert(`Product ${productId} added to cart.`);
}
