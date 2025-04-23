// pay page 
document.getElementById("success-message").style.display = "none";
let data = JSON.parse(localStorage.getItem("orderSummary"));

let outputDiv = document.getElementById("summaryFram");


if (data && data.length > 0) {
    let html = "<ul>";
    let summaryTotal = 0;
    data.forEach(entry => {
        html += `<li><strong>${entry.item}</strong>: ${entry.price}</li>`;
        summaryTotal += Number(entry.price.replace("Rs.",""));
    });
    html += "</ul>";
    
    document.getElementById("summaryTotal").textContent = ` Rs: ${summaryTotal}`

    outputDiv.innerHTML += html;
} else {
    outputDiv.innerHTML += "<p>No order data found.</p>";
}

function pay(){
    const input1 = document.getElementById("input1"); // Name
    const input2 = document.getElementById("input2"); // Mobile
    const input3 = document.getElementById("input3"); // Address
    const input4 = document.getElementById("input4"); // Card Number
    const input5 = document.getElementById("input5"); // Name on Card
    const input6 = document.getElementById("input6"); // Expiry Month
    const input7 = document.getElementById("input7"); // Expiry Year
    const input8 = document.getElementById("input8"); // CVV

    let errorCount = 0

    // Convert to strings
    const cardNumber = input4.value.toString().trim();
    const nameOnCard = input5.value.trim();
    const expiryMonth = input6.value.toString().trim();
    const expiryYear = input7.value.toString().trim();
    const cvv = input8.value.toString().trim();

    if (input1.value.trim() === "") {
        document.getElementById("massegre1").textContent = "You must enter your name."
        errorCount += 1;
    }

    if (input2.value.trim() === "") {
        document.getElementById("massegre2").textContent = "You must enter your mobile number.";
        errorCount += 1;
    }

    if (input3.value.trim() === "") {
        document.getElementById("massegre3").textContent = "You must enter your address.";
        errorCount += 1;
    }

    if (cardNumber === "" || cardNumber.length < 13 || cardNumber.length > 19 ) {
        document.getElementById("massegre4").textContent = "Card number must be 13–19 digits and contain only numbers.";
        errorCount += 1;
    }

    if (nameOnCard === "") {
        document.getElementById("massegre5").textContent = "You must enter the name on the card.";
        errorCount += 1;
    }

    if (
        expiryMonth === "" || 
        expiryYear === "" || 
        !/^\d{2}$/.test(expiryMonth) || 
        !/^\d{2}$/.test(expiryYear) || 
        Number(expiryMonth) < 1 || 
        Number(expiryMonth) > 12
    ) {
        document.getElementById("massegre6").textContent = "Enter a valid expiration date (e.g., 05 / 29).";
        errorCount += 1;
    }

    if (cvv === "" ||  cvv.length !== 3 || !/^\d{3}$/.test(cvv)) {
        document.getElementById("massegre7").textContent = "CVV must be 3  digits.";
        errorCount += 1;
    }

    
    if (errorCount == 0){
        document.getElementById("pay_frame").style.display = "none";
        document.getElementById("success-message").style.display = "block";
            
        let currentDate = new Date();

        // Set delivery time (e.g., 3 days from now)
        let deliveryDays = 5;
        let deliveryDate = new Date();
        deliveryDate.setDate(currentDate.getDate() + deliveryDays);
    
        // Format the delivery date
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let formattedDate = deliveryDate.toLocaleDateString('en-US', options);
        
        document.getElementById("delivery-date").textContent = formattedDate;
    }
}

document.getElementById("paynow").addEventListener("click",pay);

