fetch("products.json")
    .then(response => response.json())
    .then(data => {
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".menu-icon").addEventListener("click", toggleMenu);
        });
        
        function toggleMenu() {
            document.getElementById("nav-links").classList.toggle("active");
        }
        
        console.log("Parsed JSON Data:", data);

        // Check if data is an array
        if (Array.isArray(data)) {
            let output = ''; // Store all items before inserting into HTML
            let x = 1;
            let p = 1;
            let g = 1;
            let m = 1;
            let y = 1;
            let s = 1;

            let outputP = `
                <section id="processors">
                    <h1 class="section-title">Processors</h1>
                    <div class="product-grid">
                `;

            let outputG = `
                <section id="graphiccards">
                    <h1 class="section-title">Graphic Cards</h1>
                    <div class="product-grid">
                `;

            let outputM = `
                <section id="motherboard">
                    <h1 class="section-title">Motherboard</h1>
                    <div class="product-grid">
                `;

            let outputY = `
                <section id="memory">
                    <h1 class="section-title">Memory</h1>
                    <div class="product-grid">
                `;

            let outputS = `
                <section id="storage">
                    <h1 class="section-title">Storage</h1>
                    <div class="product-grid">
                `;
s
            data.forEach(item => {
                if (x < 9) {
                    outputP += `
                        <div class="product">
                            <img class="image" src="${item.Image}" alt="${item.Name}" />
                            <h2 id="p${p}iterm">${item.Name}</h2>
                            <p>${item.Details}</p>
                            <p id="p${p}price" class="price">Price: ${item.Price}</p>
                            <i id="p${p}less" class='bx bxs-left-arrow'></i>
                            <input type="number" class="quantity" id="p${p}quantity"> 
                            <i id="p${p}add" class='bx bxs-right-arrow'></i>
                            <i id="p${p}cart" class='bx bxs-cart-add'></i>
                            <p id="responseMessagep${p}"></p>
                        </div>
                    `;
                    p += 1;
                } else if (x < 15) {
                    outputG += `
                        <div class="product">
                            <img class="image" src="${item.Image}" alt="${item.Name}" />
                            <h2 id="g${g}iterm">${item.Name}</h2>
                            <p>${item.Details}</p>
                            <p id="g${g}price">Price: ${item.Price}</p>
                            <i id="g${g}less" class='bx bxs-left-arrow'></i>
                            <input type="number" class="quantity" id="g${g}quantity">
                            <i id="g${g}add" class='bx bxs-right-arrow'></i>
                            <i id="g${g}cart" class='bx bxs-cart-add'></i>
                            <p id="responseMessageg${g}"></p>
                        </div>
                    `;
                    g += 1;
                } else if (x < 21) {
                    outputM += `
                        <div class="product">
                            <img class="image" src="${item.Image}" alt="${item.Name}" />
                            <h2 id="m${m}iterm">${item.Name}</h2>
                            <p>${item.Details}</p>
                            <p id="m${m}price">Price: ${item.Price}</p>
                            <i id="m${m}less" class='bx bxs-left-arrow'></i>
                            <input type="number" class="quantity" id="m${m}quantity">
                            <i id="m${m}add" class='bx bxs-right-arrow'></i>
                            <i id="m${m}cart" class='bx bxs-cart-add'></i>
                            <p id="responseMessagem${m}"></p>
                        </div>
                    `;
                    m += 1;
                } else if (x < 26) {
                    outputY += `
                        <div class="product">
                            <img class="image" src="${item.Image}" alt="${item.Name}" />
                            <h2 id="y${y}iterm">${item.Name}</h2>
                            <p>${item.Details}</p>
                            <p id="y${y}price">Price: ${item.Price}</p>
                            <i id="y${y}less" class='bx bxs-left-arrow'></i>
                            <input type="number" class="quantity" id="y${y}quantity">
                            <i id="y${y}add" class='bx bxs-right-arrow'></i>
                            <i id="y${y}cart" class='bx bxs-cart-add'></i>
                            <p id="responseMessagey${y}"></p>
                        </div>
                    `;
                    y += 1;
                } else if (x < 32) {
                    outputS += `
                        <div class="product">
                            <img class="image" src="${item.Image}" alt="${item.Name}" />
                            <h2 id="s${s}iterm">${item.Name}</h2>
                            <p>${item.Details}</p>
                            <p id="s${s}price">Price: ${item.Price}</p>
                            <i id="s${s}less" class='bx bxs-left-arrow'></i>
                            <input type="number" class="quantity" id="s${s}quantity">
                            <i id="s${s}add" class='bx bxs-right-arrow'></i>
                            <i id="s${s}cart" class='bx bxs-cart-add'></i>
                            <p id="responseMessages${s}"></p>
                        </div>
                    `;
                    s += 1;
                }
            
                x += 1;
            });
            
            // Close all sections
            outputP += `</div></section>`;
            outputG += `</div></section>`;
            outputM += `</div></section>`;
            outputY += `</div></section>`;
            outputS += `</div></section>`;

            
            // Combine everything into one output and inject into DOM
            document.getElementById('ProductsFrame').innerHTML = outputP + outputG + outputM + outputY + outputS;
            
            // display opning quantity  count 
            for (let i = 1; i <= 8; i++){
                let inputelement1 = document.getElementById(`p${i}quantity`);
                inputelement1.value = 1;
            }
            for (let j = 1; j <= 6; j++){
                let inputelement2 = document.getElementById(`g${j}quantity`);
                inputelement2.value = 1;
                let inputelement3 = document.getElementById(`m${j}quantity`);
                inputelement3.value = 1;
                let inputelement4 = document.getElementById(`s${j}quantity`);
                inputelement4.value = 1;
                
            }
            for (let k = 1; k <= 5; k++){
                let inputelement5 = document.getElementById(`y${k}quantity`);
                inputelement5.value = 1;
            }


            // print the worning
            function print(id){
                id.style.color = "#FF3131"
                id.textContent = "Crazy man  Zero or less than that cannot be your quantity."
                setTimeout(()=>{
                    id.textContent = ""
                },4000 )
            }

            const components = [
                { type: 'p', count: 8 },  // processors
                { type: 'g', count: 6 },  // graphics
                { type: 'm', count: 6 },  // motherboards
                { type: 'y', count: 5 },  // memory
                { type: 's', count: 6 }   // storage
            ];
            // Function to get the ElementById and save them inside of a veriable 
            function veriableMaker(addButtonId, subButtonId, cartButtonId, inputId, messageId, productId, priceId){
                const addButton = document.getElementById(addButtonId);
                const subButton = document.getElementById(subButtonId);
                const cartButton = document.getElementById(cartButtonId)
                const input = document.getElementById(inputId);
                const message = document.getElementById(messageId)
                const product =  document.getElementById(productId); 
                const price = document.getElementById(priceId);

                if (addButton &&  subButton &&  cartButton && input && message && product && price) {
                    
                    setupAddButton(addButton, input);
                    setupSubButton(subButton, input, message);
                    setupCartButton(cartButton, input, message,product, price)

                } else {
                    console.warn(`One of the input  did not found `);
                }


            }
            
            // Function to set up an event listener for the add button
            function setupAddButton(button, input) {
                button.addEventListener("click", () => {
                    let currentValue = parseInt(input.value) || 0;
                    input.value = currentValue + 1; // Increment quantity
                });
            }
            // Function to set up an event listener for the subtract button
            function setupSubButton(button, input, message){
                button.addEventListener("click",() =>{
                    let currentValue = parseInt(input.value) || 0;
                    if (currentValue < 2){
                        print(message)
                    }else{
                        input.value = currentValue - 1;
                    }
                    
                })
            }


            // Function to set up an event listener for the Cart button
            let No = 1;
            let whole_amount = 0;
            let cart = [];
            function setupCartButton(cartButton, input, message, product, price) {
                cartButton.addEventListener("click", () => {
                    // console.log("oke it does work");
            
                    let table = document.getElementById("mycartTable");
                    let rows = table.getElementsByTagName("tr");
                    
                    if  (input.value <1){
                        
                        print(message)
                        
                    }else{
                        let values = [];        
                        for (var i = 1; i < rows.length; i++) { 
                            let cell = rows[i].cells[1];
                            if (cell) {
                                values.push(cell.innerText);
                            }
                        }
                        let index = values.indexOf(product.textContent);// Get index of existing product
                    
                        if (index !== -1){
                        

                            // Product already exists, update quantity & total
                            let existingRow = rows[index + 1]; // Adjust for 1-based index
                            let quantityCell = existingRow.cells[3]; // Quantity column
                            let totalCell = existingRow.cells[4]; // Total column

                            if (quantityCell && totalCell) {  // Ensure cells exist
                                let existingQuantity = Number(quantityCell.innerText);
                                let newQuantity = existingQuantity + Number(input.value);
                                quantityCell.innerText = newQuantity;

                                let unitPrice = Number(price.textContent.replace("Price: Rs.", "").trim()); 
                                let newTotal = unitPrice * newQuantity;
                                totalCell.innerText = "Rs." + newTotal;

                                // Update localStorage
                                updateLocalStorageQuantity(
                                    product.textContent.trim(),
                                    price.textContent.replace("Price: Rs.", "").trim(),
                                    newQuantity
                                );
                            }
                        
                            // Recalculate whole_amount
                            whole_amount = Array.from(rows)
                                .slice(1)  // Exclude table header
                                .reduce((sum, row) => {
                                    let cell = row.cells[4];  // Ensure cell exists
                                    return cell ? sum + Number(cell.innerText.replace("Rs.", "").trim()) : sum;
                            }, 0);
        
                            document.getElementById("total").textContent = "Rs." + whole_amount;

                            message.style.color = "green";
                            message.textContent = "Item quantity updated in the cart.";
                            setTimeout(()=>{
                                message.textContent = ""
                            },4000 )
                        }else {
                            let row = table.insertRow(No); // Now safe to use insertRow
            
                            row.insertCell(0).innerText = No;
                            row.insertCell(1).innerText = product.textContent;
                            let unitPrice = price.textContent.replace("Price: ", "").trim()
                            row.insertCell(2).innerText = unitPrice;
                            row.insertCell(3).innerText = input.value;
            
                            let total = Number(price.textContent.replace("Price: Rs.", "").trim()) * Number(input.value);
                            row.insertCell(4).innerText = "Rs." + total;
            
                            let deleteCell = row.insertCell(5);
                            let deleteBtn = document.createElement("span");
                            deleteBtn.classList.add("delete-btn");  // Correct way to add class
                            deleteBtn.innerText = "❌";
                            deleteBtn.style.cursor = "pointer";
                            deleteBtn.style.color = "red";
                            deleteCell.appendChild(deleteBtn);
            
                            whole_amount += total;
                            document.getElementById("total").textContent = "Rs." + whole_amount;

                        
                            let item = {
                                no: No,
                                name: product.textContent,
                                unitPrice: price.textContent.replace("Price: ",""),
                                quantity: input.value,
                                amount: `Rs.${total}`
                            }
                            cart.push(item);
                            console.log(cart)
                            localStorage.setItem("cart", JSON.stringify(cart));
                    
            
                            message.style.color = "green";
                            message.textContent = "The item has been successfully added to the cart.";
                            setTimeout(()=>{
                                message.textContent = ""
                            },4000 )
            
                            No += 1;
                        
                        }
                    }                
                    
                });
            }

            function updateLocalStorageQuantity(productName, unitPrice, newQuantity) {
                let saved = localStorage.getItem("cart");
                if (saved) {
                    let savedOrder = JSON.parse(saved);
                    
                    // Find and update the matching item
                    let updatedOrder = savedOrder.map(item => {
                        if (item.name === productName && item.unitPrice === unitPrice) {
                            return {
                                ...item,
                                quantity: newQuantity,
                                total: (parseFloat(unitPrice) * newQuantity).toFixed(2)
                            };
                        }
                        return item;
                    });
            
                    // Update localStorage
                    localStorage.setItem("cart", JSON.stringify(updatedOrder));
                }
            }
            let cartSave = JSON.parse(localStorage.getItem("cart"));

            if (cartSave && Object.keys(cartSave).length > 0) {
                addItermsToCart(cartSave); // Pass directly without parsing again
                // console.log("Cart has items:", cartSave);
            } else {
                console.log("Cart is empty.");
            }

            
            // **Event Delegation for Delete Buttons**
            document.querySelector("#mycartTable tbody").addEventListener("click", function (e) {
                if (e.target.classList.contains("delete-btn")) {
                    let row = e.target.closest("tr"); // Find the row
                    let total = parseFloat(row.cells[4].textContent.replace("Rs.", "").trim()) || 0;
            
                    // Deduct from total
                    whole_amount -= total;
                    document.getElementById("total").textContent = "Rs." + whole_amount.toFixed(2);
            
                    // Get values to identify the item uniquely
                    let productName = row.cells[1].textContent.trim();
                    let unitPrice = row.cells[2].textContent.trim();
            
                    // Remove row from table
                    row.remove();
            
                    // Remove matching item from localStorage
                    let saved = localStorage.getItem("cart");
                    if (saved) {
                        let savedOrder = JSON.parse(saved);
            
                        // Filter out the item by matching name and unit price
                        let updatedOrder = savedOrder.filter(item => {
                            return !(item.name === productName && item.unitPrice === unitPrice);
                        });
            
                        // Update localStorage with the new list
                        localStorage.setItem("cart", JSON.stringify(updatedOrder));
                        
                        // Optional: If cart is empty, remove the key entirely
                        if (updatedOrder.length === 0) {
                            localStorage.removeItem("cart");
                        }
                    }
            
                    // Update row numbers
                    No--;
                    updateRowNumbers();
                    
                    // Optional: Show feedback to user
                    alert("Item removed from cart!");
                }
            });
            
            function updateRowNumbers() {
                let index = 1;
                document.querySelectorAll("#mycartTable tbody tr").forEach((row) => {
                    row.cells[0].textContent = index;
                    index++;
                });
            }
            
            
            
            // Loop through each component type
            components.forEach(comp => {
                for (let i = 1; i <= comp.count; i++) {
                    const addButtonId = `${comp.type}${i}add`;
                    const subButtonId = `${comp.type}${i}less`;
                    const cartButtonId = `${comp.type}${i}cart`;
                    const inputId = `${comp.type}${i}quantity`;
                    const messageId = `responseMessage${comp.type}${i}`;
                    const productId = `${comp.type}${i}iterm`;
                    const priceId = `${comp.type}${i}price`;

                    veriableMaker(addButtonId, subButtonId, cartButtonId, inputId, messageId, productId, priceId)
                }
                
            });

            // function readquantity(id){
            //     return id.value;
            // }
            // open the pay page 
            function openPage(){
                var table = document.getElementById("mycartTable"); // Get table by ID
                var values = [];
                
                for (var i = 1; i < table.rows.length; i++) { // Start from 1 to skip header
                    values.push(table.rows[i].cells[0].innerText); // Read the first column (index 0)
                }
                if (values.includes("1")){
                    window.location.href = "./pay.html";
                } else{
                    document.getElementById("buyMessage").style.color = "#FF3131"
                    document.getElementById("buyMessage").textContent = "Sorry their is nothing in the cart. " 
                }
            }

            
         

            document.getElementById("tableAction").style.display = "none";
            document.getElementById("cart").addEventListener("click", displayCart);

            function displayCart() {
                let productsFrame = document.getElementById("ProductsFrame");
                let tableAction = document.getElementById("tableAction");

                if (productsFrame.style.display === "none") {
                    // Show ProductsFrame and hide cart
                    productsFrame.style.display = "grid";  // Ensure correct layout
                    productsFrame.style.opacity = "1";
                    tableAction.style.display = "none";
                } else {
                    // Hide ProductsFrame and show cart
                    productsFrame.style.display = "none";
                    tableAction.style.display = "block";
                }
            }

            // Select the buttons
            const addToFavoritesBtn = document.getElementById("add");
            const applyFavoritesBtn = document.getElementById("apply");

            // Function to Save the Order in Local Storage
            function saveToFavorites() {
                let cartItems = [];

                // Loop through all rows in the cart table except the total row
                document.querySelectorAll("#mycartTable tbody tr:not(:last-child)").forEach((row, index) => {
                    let item = {
                        no: row.cells[0].textContent, // No.
                        name: row.cells[1].textContent, // Product Name
                        unitPrice: row.cells[2].textContent, // Unit Price
                        quantity: row.cells[3].textContent, // Quantity
                        amount: row.cells[4].textContent // Price
                        // actionbutton: row.cells[5].textContent
                    };
                    cartItems.push(item);
                });

                // Save to localStorage
                localStorage.setItem("favoriteOrder", JSON.stringify(cartItems));
                alert("Order saved as favorite!");
            }
            // Function to Load Favorite Order
            function applyFavorites() {
                let savedOrder = localStorage.getItem("favoriteOrder");
                
                if (savedOrder) {
                    let cartSave = JSON.parse(savedOrder); // Parse the saved order
                    if (cartSave.length > 0) {
                        addItermsToCart(cartSave); // Pass the parsed cart data
                        alert("Favorite order applied!");
                    } else {
                        alert("No favorite order saved.");
                    }
                }else{
                    alert("No favorite order saved.");
                }
            }
            function addItermsToCart(cartItems) {
                if (!Array.isArray(cartItems)) {
                    console.error("Cart data is not an array:", cartItems);
                    return;
                }
            
                let cartTableBody = document.querySelector("#mycartTable tbody");
            
                // Keep only the last row (Total row)
                let totalRow = cartTableBody.lastElementChild;
                cartTableBody.innerHTML = ""; // Clear the table
                cartTableBody.appendChild(totalRow); // Re-add the total row
            
                let totalPrice = 0;
            
                cartItems.forEach(item => {
                    if (!item.unitPrice) {
                        console.warn("Missing price for item:", item);
                        return; // Skip item if price is missing
                    }
            
                    let row = document.createElement("tr");
            
                    row.innerHTML = `
                        <td>${item.no || ""}</td>
                        <td>${item.name || "Unknown"}</td>
                        <td>${item.unitPrice || "0"}</td>
                        <td>${item.quantity || "1"}</td>
                        <td>${item.amount || "Rs.0"}</td>
                        <td class="action-cell"></td>
                    `;
            
                    // Create and append the delete button
                    let deleteBtn = document.createElement("span");
                    deleteBtn.classList.add("delete-btn");
                    deleteBtn.innerText = "❌";
                    deleteBtn.style.cursor = "pointer";
                    deleteBtn.style.color = "red";
            
                    row.querySelector(".action-cell").appendChild(deleteBtn);
            
                    cartTableBody.insertBefore(row, totalRow);
            
                    cartTableBody.insertBefore(row, totalRow);
                    totalPrice += Number(item.amount.replace("Rs.","").trim()) ; // Update total
                });
            
                document.getElementById("total").textContent = `Rs.${totalPrice.toFixed(2)}`;
            }
            

            // Attach event listeners
            addToFavoritesBtn.addEventListener("click", saveToFavorites);
            applyFavoritesBtn.addEventListener("click", applyFavorites);

            
            
            
            
            // go to the new page button
            document.getElementById("buy").addEventListener("click", openPage);            
            
        } else {
            console.error("Error: JSON data is not an array", data);
        }
    })
    .catch(error => console.error("Error loading JSON:", error));


