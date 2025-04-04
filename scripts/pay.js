// pay page 
function pay(){
    let error = [];
    if (input1.value == ""){
        error.push("You must shoud enter your name")
    }
    if (input2.value == ""){
        error.push("You must shoud enter your mobile number")
    }
    if (input3.value == ""){
        error.push("You must shoud enter address")
    }
    if (input4.value == ""){
        error.push("You must shoud enter your card number")
    }
    if (input5.value == ""){
        error.push("You must shoud enter your name which is on the card")
    }
    if (input6.value === "" || input7.value === "") {
        error.push("You must enter the Expiration date of the card");
    }
    
    if (input8.value == ""){
        error.push("You must shoud enter the code back in the card")
    }
    console.log(error.length)
    if (error.length == 0){
        let currentDate = new Date();

        // Set delivery time (e.g., 3 days from now)
        let deliveryDays = 3;
        let deliveryDate = new Date();
        deliveryDate.setDate(currentDate.getDate() + deliveryDays);
    
        // Format the delivery date
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let formattedDate = deliveryDate.toLocaleDateString('en-US', options);
    
        // Display the confirmation message with the delivery date
        
            `Thank you for your purchase! Your order will be delivered on <b>${formattedDate}</b>.`;
        document.getElementById("payMessage").style.textAlign = "center";
        document.getElementById("payMessage").style.color = "green" ;
        document.getElementById("payMessage").textContent = 
        `Thank you for your purchase! Your order will be delivered on <b>${formattedDate}</b>.`;
    }else{
        alert(error.join("\n"));
    }
}

document.getElementById("paynow").addEventListener("click",pay);

