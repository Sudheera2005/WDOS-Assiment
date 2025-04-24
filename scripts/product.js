// read the values from the Json file and get the current value from the user click
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
// dispay the values in the HTML file 
function displayProduct(product) {
    const container = document.getElementById("productDetails");
    container.innerHTML = `
        <div id="product-details" class="product-details-card">
            <img class="product-img-large" src="${product.Image}" alt="${product.Name}" />

            <div class="product-info">
                <h2 id="item" class="product-name">${product.Name}</h2>
    
                <p class="product-description">${product.Description}</p>

                <p class="product-category"><strong>Category:</strong> ${product.Category}</p>
    
                <p id="price" class="product-price"><strong>Price:</strong> ${product.Price}</p>
    
                <h3 class="details-heading">About this item:</h3>
                <pre class="product-details-text">${product.Details}</pre>
                <div class="quantity-selector">
                    <i id="decrease" class="bx bxs-left-arrow"></i>
                    <input type="number" id="quantityP" value="1" />
                    <i id="increase" class="bx bxs-right-arrow"></i>
                </div>
                <button id="addcart" class="add-to-cart-btn">🛒 Add to Cart</button>
                <p id="reply"></p>
            </div>
        </div>

    `;
    const qtyInput = document.getElementById("quantityP");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");

    increaseBtn.addEventListener("click", function(){
        let currentValue = qtyInput.value;
        currentValue++
        qtyInput.value = currentValue;
    });
    decreaseBtn.addEventListener("click", function(){
        let currentValue = qtyInput.value;
        if (currentValue <= 1){
            alert("The item's quantity is less than zero; enter agine")
        }else{
            currentValue--
            qtyInput.value = currentValue;
        }
    });
    // add item to the cart 
    document.getElementById("addcart").addEventListener("click", function(){
        let price = document.getElementById("price").textContent.replace("Price: Rs.","")
        let count = qtyInput.value;
        let total = Number(price)+Number(count);
        console.log(price, count, total);
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        let item = {
            no: cart.length+1,
            name: document.getElementById("item").textContent,
            unitPrice: price,
            quantity: count,
            amount: `Rs.${total}`
        }
        cart.push(item);
        console.log(cart)
        localStorage.setItem("cart", JSON.stringify(cart));
        document.getElementById("reply").style.color = "green";
        document.getElementById("reply").textContent = "The item has been successfully added to the cart.";
        setTimeout(()=>{
            document.getElementById("reply").textContent = ""
        },6000 )

    })
}




