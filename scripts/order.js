function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

let mainElement = document.querySelector("main");
document.getElementById("tableAction").style.display = "none";
document.getElementById("cart").addEventListener("click", displayCart);

function displayCart() {
    if (mainElement.offsetWidth > 0 && mainElement.offsetHeight > 0) {
        mainElement.style.display = "none";  // Corrected from "hidden"
        document.getElementById("tableAction").style.display = "block"; // Corrected from "Block"
    } else {
        mainElement.style.display = "block";  // Corrected from "hidden"
        document.getElementById("tableAction").style.display = "none"; // Corrected from "Block"
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
            price: row.cells[4].textContent // Price
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
        let cartItems = JSON.parse(savedOrder);
        let cartTableBody = document.querySelector("#mycartTable tbody");
        
        // Keep only the last row (Total row)
        let totalRow = cartTableBody.lastElementChild;
        cartTableBody.innerHTML = ""; // Clear the table
        cartTableBody.appendChild(totalRow); // Re-add the total row

        let totalPrice = 0;

        cartItems.forEach(item => {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.no}</td>
                <td>${item.name}</td>
                <td>${item.unitPrice}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
            `;

            cartTableBody.insertBefore(row, totalRow);
            totalPrice += parseFloat(item.price.replace("$", "")) || 0; // Update total
        });

        document.getElementById("total").textContent = `$${totalPrice.toFixed(2)}`;

        alert("Favorite order applied!");
    } else {
        alert("No favorite order saved.");
    }
}

// Attach event listeners
addToFavoritesBtn.addEventListener("click", saveToFavorites);
applyFavoritesBtn.addEventListener("click", applyFavorites);


// Function to 





let p1 = 1;
let p2 = 1; 
let p3 = 1; 
let p4 = 1; 
let p5 = 1; 
let p6 = 1; 
let p7 = 1; 
let p8 = 1; 

let g1 = 1;
let g2 = 1; 
let g3 = 1; 
let g4 = 1; 
let g5 = 1; 
let g6 = 1; 

let m1 = 1;
let m2 = 1; 
let m3 = 1; 
let m4 = 1; 
let m5 = 1; 
let m6 = 1; 

let y1 = 1;
let y2 = 1; 
let y3 = 1; 
let y4 = 1; 
let y5 = 1; 

let s1 = 1;
let s2 = 1; 
let s3 = 1; 
let s4 = 1; 
let s5 = 1; 
let s6 = 1;
// increase the quantity
function add(x) {
    return x + 1;  // Ensure x is returned correctly
}
// decrease the quantity
function less(x) {
    return x - 1;  // Ensure x is returned correctly
}
// print the worning
function print(id){
    document.getElementById(id).style.color = "#FF3131"
    document.getElementById(id).textContent = "Crazy man  Zero or less than that cannot be your quantity."
}

function readquantity(id){
    return id.value;
}
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
        document.getElementById("buyMessage").textContent = "There is nothing in the cart. "
    }
}
// add iterms to the cart
let No = 1;
let whole_amount = 0;

function addCart(Product, price, Quantity, id) {
    var table = document.getElementById("mycartTable");

    var values = [];
    var rows = table.rows;

    for (var i = 1; i < rows.length; i++) { 
        let cell = rows[i].cells[1]; // Product Name column (index 1)
        if (cell) {
            values.push(cell.innerText);
        }
    }

    let index = values.indexOf(Product);

    if (index !== -1) {
        // Product already exists, update quantity & total
        let existingRow = rows[index + 1]; // Adjust for 1-based index
        let quantityCell = existingRow.cells[3]; // Quantity column
        let totalCell = existingRow.cells[4]; // Total column

        if (quantityCell && totalCell) {  // Ensure cells exist
            let existingQuantity = Number(quantityCell.innerText);
            let newQuantity = existingQuantity + Number(Quantity);
            quantityCell.innerText = newQuantity;

            let unitPrice = Number(price.replace("Rs.", "").trim()); // Extract number from "Rs.X"
            let newTotal = unitPrice * newQuantity;
            totalCell.innerText = "Rs." + newTotal;
        }

        // Recalculate whole_amount
        whole_amount = Array.from(rows)
            .slice(1)  // Exclude table header
            .reduce((sum, row) => {
                let cell = row.cells[4];  // Ensure cell exists
                return cell ? sum + Number(cell.innerText.replace("Rs.", "").trim()) : sum;
            }, 0);
        
        document.getElementById("total").textContent = "Rs." + whole_amount;

        id.style.color = "#39FF14";
        id.textContent = "Item quantity updated in the cart.";
    } else {
        // Product not in cart, add new row
        var row = table.insertRow(No);
        row.insertCell(0).innerText = No; // Item number
        row.insertCell(1).innerText = Product; // Product name
        row.insertCell(2).innerText = price; // Unit price
        row.insertCell(3).innerText = Quantity; // Quantity
        let total = Number(price.replace("Rs.", "").trim()) * Number(Quantity);
        row.insertCell(4).innerText = "Rs." + total; // Total price

        // Create delete button
        let deleteCell = row.insertCell(5);
        let deleteBtn = document.createElement("span");
        deleteBtn.innerText = "❌";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.color = "red";
        deleteCell.appendChild(deleteBtn);

        // Update total amount
        whole_amount += total;
        document.getElementById("total").textContent = "Rs." + whole_amount;

        id.style.color = "#39FF14";
        id.textContent = "The item has been successfully added to the cart.";
        
        No += 1; // Only increment if a new item is added
        row.addEventListener("click", function (e) {
            if (!e.target.classList.contains("delete-btn")) {
                row.classList.toggle("selected");
            }
        });
    
        // **Delete row function**
        deleteBtn.addEventListener("click", function () {
            whole_amount -= total; // Deduct from total
            row.remove(); // Remove row
            document.getElementById("total").textContent = "Rs." + whole_amount; // Update total
            No -= 1;
        });
    }
}


// making variable 
function veriableMaker(ids,products,prices,qs){
    var id = document.getElementById(ids);
    var price = document.getElementById(prices).textContent.trim();
    var Product = document.getElementById(products).textContent;
    var q = qs.value;
    if (q< 1){
        print(ids)
    }else{
        addCart(Product, price, q,  id)
    }
    
}
// add buttons
document.getElementById("p1add").addEventListener("click", function() {
    p1 = add(Number(p1quantity.value) );  // Update p1
    p1quantity.value = p1;  // Update UI
});
document.getElementById("p2add").addEventListener("click", function() {
    p2 = add(Number(p2quantity.value) );  // Update p1
    p2quantity.value = p2;  // Update UI
});
document.getElementById("p3add").addEventListener("click", function() {
    p3 = add(Number(p3quantity.value) );  // Update p1
    p3quantity.value= p3;  // Update UI
});
document.getElementById("p4add").addEventListener("click", function() {
    p4 = add(Number(p4quantity.value) );  // Update p1
    p4quantity.value = p4;  // Update UI
});
document.getElementById("p5add").addEventListener("click", function() {
    p5 = add(Number(p5quantity.value) );  // Update p1
    p5quantity.value = p5;  // Update UI
});
document.getElementById("p6add").addEventListener("click", function() {
    p6 = add(Number(p6quantity.value) );  // Update p1
    p6quantity.value = p6;  // Update UI
});
document.getElementById("p7add").addEventListener("click", function() {
    p7 = add(Number(p7quantity.value) );  // Update p1
    p7quantity.value = p7;  // Update UI
});
document.getElementById("p8add").addEventListener("click", function() {
    p8 = add(Number(p8quantity.value) );  // Update p1
    p8quantity.value = p8;  // Update UI
});


document.getElementById("g1add").addEventListener("click", function() {
    g1 = add(Number(g1quantity.value) );  // Update p1
    g1quantity.value = g1;  // Update UI
});
document.getElementById("g2add").addEventListener("click", function() {
    g2 = add(Number(g2quantity.value) );  // Update p1
    g2quantity.value = g2;  // Update UI
});
document.getElementById("g3add").addEventListener("click", function() {
    g3 = add(Number(g3quantity.value) );  // Update p1
    g3quantity.value= g3;  // Update UI
});
document.getElementById("g4add").addEventListener("click", function() {
    g4 = add(Number(g4quantity.value) );  // Update p1
    g4quantity.value = g4;  // Update UI
});
document.getElementById("g5add").addEventListener("click", function() {
    g5 = add(Number(g5quantity.value) );  // Update p1
    g5quantity.value = g5;  // Update UI
});
document.getElementById("g6add").addEventListener("click", function() {
    g6 = add(Number(g6quantity.value) );  // Update p1
    g6quantity.value = g6;  // Update UI
});

document.getElementById("m1add").addEventListener("click", function() {
    m1 = add(Number(m1quantity.value) );  // Update p1
    m1quantity.value = m1;  // Update UI
});
document.getElementById("m2add").addEventListener("click", function() {
    m2 = add(Number(m2quantity.value) );  // Update p1
    m2quantity.value = m2;  // Update UI
});
document.getElementById("m3add").addEventListener("click", function() {
    m3 = add(Number(m3quantity.value) );  // Update p1
    m3quantity.value= m3;  // Update UI
});
document.getElementById("m4add").addEventListener("click", function() {
    m4 = add(Number(m4quantity.value) );  // Update p1
    m4quantity.value = m4;  // Update UI
});
document.getElementById("m5add").addEventListener("click", function() {
    m5 = add(Number(m5quantity.value) );  // Update p1
    m5quantity.value = m5;  // Update UI
});
document.getElementById("m6add").addEventListener("click", function() {
    m6 = add(Number(m6quantity.value) );  // Update p1
    m6quantity.value = m6;  // Update UI
});


document.getElementById("y1add").addEventListener("click", function() {
    y1 = add(Number(y1quantity.value) );  // Update p1
    y1quantity.value = y1;  // Update UI
});
document.getElementById("y2add").addEventListener("click", function() {
    y2 = add(Number(y2quantity.value) );  // Update p1
    y2quantity.value = y2;  // Update UI
});
document.getElementById("y3add").addEventListener("click", function() {
    y3 = add(Number(y3quantity.value) );  // Update p1
    y3quantity.value= y3;  // Update UI
});
document.getElementById("y4add").addEventListener("click", function() {
    y4 = add(Number(y4quantity.value) );  // Update p1
    y4quantity.value = y4;  // Update UI
});
document.getElementById("y5add").addEventListener("click", function() {
    y5 = add(Number(y5quantity.value) );  // Update p1
    y5quantity.value = y5;  // Update UI
});


document.getElementById("s1add").addEventListener("click", function() {
    s1 = add(Number(s1quantity.value) );  // Update p1
    s1quantity.value = s1;  // Update UI
});
document.getElementById("s2add").addEventListener("click", function() {
    s2 = add(Number(s2quantity.value) );  // Update p1
    s2quantity.value = s2;  // Update UI
});
document.getElementById("s3add").addEventListener("click", function() {
    s3 = add(Number(s3quantity.value) );  // Update p1
    s3quantity.value= s3;  // Update UI
});
document.getElementById("s4add").addEventListener("click", function() {
    s4 = add(Number(s4quantity.value) );  // Update p1
    s4quantity.value = s4;  // Update UI
});
document.getElementById("s5add").addEventListener("click", function() {
    s5 = add(Number(s5quantity.value) );  // Update p1
    s5quantity.value = s5;  // Update UI
});
document.getElementById("s6add").addEventListener("click", function() {
    s6 = add(Number(s6quantity.value) );  // Update p1
    s6quantity.value = s6;  // Update UI
});

// decrease buttons
document.getElementById("p1less").addEventListener("click", function() {
    p1 = (Number(p1quantity.value) )
    if (p1 <= 1){
        print("responseMessage1");     
    } else{
        
        p1 = less(p1);
        p1quantity.value = p1;
    }
    
})
document.getElementById("p2less").addEventListener("click", function() {
    p2 = (Number(p2quantity.value) )
    if (p2 <= 1){
        print("responseMessage2"); 
    } else{
        
        p2 = less(p2);
        p2quantity.value = p2;
    }
    
})
document.getElementById("p3less").addEventListener("click", function() {
    p3 = (Number(p3quantity.value) )
    if (p3 <= 1){
        print("responseMessage3"); 
       
    } else{
        
        p3 = less(p3);
        p3quantity.value = p3;
    }
    
})
document.getElementById("p4less").addEventListener("click", function() {
    p4 = (Number(p4quantity.value) )
    if (p4 <= 1){
        print("responseMessage4"); 
       
    } else{
        
        p4 = less(p4);
        p4quantity.value = p4;
    }
    
})
document.getElementById("p5less").addEventListener("click", function() {
    p5 = (Number(p5quantity.value) )
    if (p5 <= 1){
        print("responseMessage5"); 
       
    } else{
        
        p5 = less(p5);
        p5quantity.value = p5;
    }
    
})
document.getElementById("p6less").addEventListener("click", function() {
    p6 = (Number(p6quantity.value) )
    if (p6 <= 1){
        print("responseMessage6"); 
    } else{
        
        p6 = less(p6);
        p6quantity.value = p6;
    }
    
})
document.getElementById("p7less").addEventListener("click", function() {
    p7 = (Number(p7quantity.value) )
    if (p7 <= 1){
        print("responseMessage7"); 
    } else{
        
        p7 = less(p7);
        p7quantity.value = p7;
    }
    
})
document.getElementById("p8less").addEventListener("click", function() {
    p8 = (Number(p8quantity.value) )
    if (p8 <= 1){
        print("responseMessage8"); 
       
    } else{
        
        p8 = less(p8);
        p8quantity.value = p8;
    }
    
})


document.getElementById("g1less").addEventListener("click", function() {
    g1 = (Number(g1quantity.value) )
    if (g1 <= 1){
        print("responseMessageg1");     
    } else{
        
        g1 = less(g1);
        g1quantity.value = g1;
    }
    
})
document.getElementById("g2less").addEventListener("click", function() {
    g2 = (Number(g2quantity.value) )
    if (g2 <= 1){
        print("responseMessageg2"); 
    } else{
        
        g2 = less(g2);
        g2quantity.value = g2;
    }
    
})
document.getElementById("g3less").addEventListener("click", function() {
    g3 = (Number(g3quantity.value) )
    if (g3 <= 1){
        print("responseMessageg3"); 
       
    } else{
        
        g3 = less(g3);
        g3quantity.value = g3;
    }
    
})
document.getElementById("g4less").addEventListener("click", function() {
    g4 = (Number(g4quantity.value) )
    if (g4 <= 1){
        print("responseMessageg4"); 
       
    } else{
        
        g4 = less(g4);
        g4quantity.value = g4;
    }
    
})
document.getElementById("g5less").addEventListener("click", function() {
    g5 = (Number(g5quantity.value) )
    if (g5 <= 1){
        print("responseMessageg5"); 
       
    } else{
        
        g5 = less(g5);
        g5quantity.value = g5;
    }
    
})
document.getElementById("g6less").addEventListener("click", function() {
    g6 = (Number(g6quantity.value) )
    if (g6 <= 1){
        print("responseMessageg6"); 
       
    } else{
        
        g6 = less(g6);
        g6quantity.value = g6;
    }
    
})

document.getElementById("m1less").addEventListener("click", function() {
    m1 = (Number(m1quantity.value) )
    if (m1 <= 1){
        print("responseMessagem1");     
    } else{
        
        m1 = less(m1);
        m1quantity.value = m1;
    }
    
})
document.getElementById("m2less").addEventListener("click", function() {
    m2 = (Number(m2quantity.value) )
    if (m2 <= 1){
        print("responseMessagem2"); 
    } else{
        
        m2 = less(m2);
        m2quantity.value = m2;
    }
    
})
document.getElementById("m3less").addEventListener("click", function() {
    m3 = (Number(m3quantity.value) )
    if (m3 <= 1){
        print("responseMessagem3"); 
       
    } else{
        
        m3 = less(m3);
        m3quantity.value = m3;
    }
    
})
document.getElementById("m4less").addEventListener("click", function() {
    m4 = (Number(m4quantity.value) )
    if (m4 <= 1){
        print("responseMessagem4"); 
       
    } else{
        
        m4 = less(m4);
        m4quantity.value = m4;
    }
    
})
document.getElementById("m5less").addEventListener("click", function() {
    m5 = (Number(m5quantity.value) )
    if (m5 <= 1){
        print("responseMessagem5"); 
       
    } else{
        
        m5 = less(m5);
        m5quantity.value = m5;
    }
    
})
document.getElementById("m6less").addEventListener("click", function() {
    m6 = (Number(m6quantity.value) )
    if (m6 <= 1){
        print("responseMessagem6"); 
       
    } else{
        
        m6 = less(m6);
        m6quantity.value = m6;
    }
    
})


document.getElementById("y1less").addEventListener("click", function() {
    y1 = (Number(y1quantity.value) )
    if (y1 <= 1){
        print("responseMessagey1");     
    } else{
        
        y1 = less(y1);
        y1quantity.value = y1;
    }
    
})
document.getElementById("y2less").addEventListener("click", function() {
    y2 = (Number(y2quantity.value) )
    if (y2 <= 1){
        print("responseMessagey2"); 
    } else{
        
        y2 = less(y2);
        y2quantity.value = y2;
    }
    
})
document.getElementById("y3less").addEventListener("click", function() {
    y3 = (Number(y3quantity.value) )
    if (y3 <= 1){
        print("responseMessagey3"); 
       
    } else{
        
        y3 = less(y3);
        y3quantity.value = y3;
    }
    
})
document.getElementById("y4less").addEventListener("click", function() {
    y4 = (Number(y4quantity.value) )
    if (y4 <= 1){
        print("responseMessagey4"); 
       
    } else{
        
        y4 = less(y4);
        y4quantity.value = y4;
    }
    
})
document.getElementById("y5less").addEventListener("click", function() {
    y5 = (Number(y5quantity.value) )
    if (y5 <= 1){
        print("responseMessagey5"); 
       
    } else{
        
        y5 = less(y5);
        y5quantity.value = y5;
    }
    
})


document.getElementById("s1less").addEventListener("click", function() {
    s1 = (Number(s1quantity.value) )
    if (s1 <= 1){
        print("responseMessages1");     
    } else{
        
        s1 = less(s1);
        s1quantity.value = s1;
    }
    
})
document.getElementById("s2less").addEventListener("click", function() {
    s2 = (Number(s2quantity.value) )
    if (s2 <= 1){
        print("responseMessages2"); 
    } else{
        
        s2 = less(s2);
        s2quantity.value = s2;
    }
    
})
document.getElementById("s3less").addEventListener("click", function() {
    s3 = (Number(s3quantity.value) )
    if (s3 <= 1){
        print("responseMessages3"); 
       
    } else{
        
        s3 = less(s3);
        s3quantity.value = s3;
    }
    
})
document.getElementById("s4less").addEventListener("click", function() {
    s4 = (Number(s4quantity.value) )
    if (s4 <= 1){
        print("responseMessages4"); 
       
    } else{
        
        s4 = less(s4);
        s4quantity.value = s4;
    }
    
})
document.getElementById("s5less").addEventListener("click", function() {
    s5 = (Number(s5quantity.value) )
    if (s5 <= 1){
        print("responseMessages5"); 
       
    } else{
        
        s5 = less(s5);
        s5quantity.value = s5;
    }
    
})
document.getElementById("s6less").addEventListener("click", function() {
    s6 = (Number(s6quantity.value) )
    if (s6 <= 1){
        print("responseMessages6"); 
       
    } else{
        
        s6 = less(s6);
        s6quantity.value = s6;
    }
    
})
// add to the table button
document.getElementById("p1cart").addEventListener("click", function(){   
    veriableMaker("responseMessage1", "p1iterm", "p1price", p1quantity)
})
document.getElementById("p2cart").addEventListener("click", function(){   
    veriableMaker("responseMessage2", "p2iterm", "p2price", p2quantity)
})
document.getElementById("p3cart").addEventListener("click", function(){   
    veriableMaker("responseMessage3", "p3iterm", "p3price", p3quantity)
})
document.getElementById("p4cart").addEventListener("click", function(){   
    veriableMaker("responseMessage4", "p4iterm", "p4price", p4quantity)
})
document.getElementById("p5cart").addEventListener("click", function(){   
    veriableMaker("responseMessage5", "p5iterm", "p5price", p5quantity)
})
document.getElementById("p6cart").addEventListener("click", function(){   
    veriableMaker("responseMessage6", "p6iterm", "p6price", p6quantity)
})
document.getElementById("p7cart").addEventListener("click", function(){   
    veriableMaker("responseMessage7", "p7iterm", "p7price", p7quantity)
})
document.getElementById("p8cart").addEventListener("click", function(){   
    veriableMaker("responseMessage8", "p8iterm", "p8price", p8quantity)
})


document.getElementById("g1cart").addEventListener("click", function(){   
    veriableMaker("responseMessageg1", "g1iterm", "g1price", g1quantity)
})
document.getElementById("g2cart").addEventListener("click", function(){   
    veriableMaker("responseMessageg2", "g2iterm", "g2price", g2quantity)
})
document.getElementById("g3cart").addEventListener("click", function(){   
    veriableMaker("responseMessageg3", "g3iterm", "g3price", g3quantity)
})
document.getElementById("g4cart").addEventListener("click", function(){   
    veriableMaker("responseMessageg4", "g4iterm", "g4price", g4quantity)
})
document.getElementById("g5cart").addEventListener("click", function(){   
    veriableMaker("responseMessageg5", "g5iterm", "g5price", g5quantity)
})
document.getElementById("g6cart").addEventListener("click", function(){   
    veriableMaker("responseMessageg6", "g6iterm", "g6price", g6quantity)
})

document.getElementById("m1cart").addEventListener("click", function(){   
    veriableMaker("responseMessagem1", "m1iterm", "m1price", m1quantity)
})
document.getElementById("m2cart").addEventListener("click", function(){   
    veriableMaker("responseMessagem2", "m2iterm", "m2price", m2quantity)
})
document.getElementById("m3cart").addEventListener("click", function(){   
    veriableMaker("responseMessagem3", "m3iterm", "m3price", m3quantity)
})
document.getElementById("m4cart").addEventListener("click", function(){   
    veriableMaker("responseMessagem4", "m4iterm", "m4price", m4quantity)
})
document.getElementById("m5cart").addEventListener("click", function(){   
    veriableMaker("responseMessagem5", "m5iterm", "m5price", m5quantity)
})
document.getElementById("m6cart").addEventListener("click", function(){   
    veriableMaker("responseMessagem6", "m6iterm", "m6price", m6quantity)
})

document.getElementById("y1cart").addEventListener("click", function(){   
    veriableMaker("responseMessagey1", "y1iterm", "y1price", y1quantity)
})
document.getElementById("y2cart").addEventListener("click", function(){   
    veriableMaker("responseMessagey2", "y2iterm", "y2price", y2quantity)
})
document.getElementById("y3cart").addEventListener("click", function(){   
    veriableMaker("responseMessagey3", "y3iterm", "y3price", y3quantity)
})
document.getElementById("y4cart").addEventListener("click", function(){   
    veriableMaker("responseMessagey4", "y4iterm", "y4price", y4quantity)
})
document.getElementById("y5cart").addEventListener("click", function(){   
    veriableMaker("responseMessagey5", "y5iterm", "y5price", y5quantity)
})


document.getElementById("s1cart").addEventListener("click", function(){   
    veriableMaker("responseMessages1", "s1iterm", "s1price", s1quantity)
})
document.getElementById("s2cart").addEventListener("click", function(){   
    veriableMaker("responseMessages2", "s2iterm", "s2price", s2quantity)
})
document.getElementById("s3cart").addEventListener("click", function(){   
    veriableMaker("responseMessages3", "s3iterm", "s3price", s3quantity)
})
document.getElementById("s4cart").addEventListener("click", function(){   
    veriableMaker("responseMessages4", "s4iterm", "s4price", s4quantity)
})
document.getElementById("s5cart").addEventListener("click", function(){   
    veriableMaker("responseMessages5", "s5iterm", "s5price", s5quantity)
})
document.getElementById("s6cart").addEventListener("click", function(){   
    veriableMaker("responseMessages6", "s6iterm", "s6price", s6quantity)
})
// go to the new page button
document.getElementById("buy").addEventListener("click", openPage);



// starting dispay


p1quantity.value = 1;
p2quantity.value = 1;
p3quantity.value = 1;
p4quantity.value = 1;
p5quantity.value = 1;
p6quantity.value = 1;
p7quantity.value = 1;
p8quantity.value = 1;

g1quantity.value = 1;
g2quantity.value = 1;
g3quantity.value = 1;
g4quantity.value = 1;
g5quantity.value = 1;
g6quantity.value = 1;

m1quantity.value = 1;
m2quantity.value = 1;
m3quantity.value = 1;
m4quantity.value = 1;
m5quantity.value = 1;
m6quantity.value = 1;

y1quantity.value = 1;
y2quantity.value = 1;
y3quantity.value = 1;
y4quantity.value = 1;
y5quantity.value = 1;

s1quantity.value = 1;
s2quantity.value = 1;
s3quantity.value = 1;
s4quantity.value = 1;
s5quantity.value = 1;
s6quantity.value = 1;


