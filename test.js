let quantity = 0;
function addQuantity() {
    quantity=quantity + 1;
    document.getElementById('quantity').innerHTML = quantity;
    document.getElementById('quantity1').innerHTML = quantity;
    console.log(quantity);
    // var price = 1000;

    if (quantity == 1) {
        document.getElementById('subtotal').innerHTML = quantity * 1000;
        document.getElementById('total').innerHTML = (quantity * 1000) + 50;
        document.getElementById('total2').innerHTML = (quantity * 1000) + 50;
    }
    else if (quantity <= 10) {
        document.getElementById('subtotal').innerHTML = quantity * 1000;
        document.getElementById('total').innerHTML = (quantity * 1000) + 50;
        document.getElementById('total2').innerHTML = (quantity * 1000) + 50;
    }
    else  {
        window.alert("Quantity exceeds the stock number (Nanubra naka!)");    
        quantity = 10;
    }

    
}
// decrease the quantity of an item
function descQuantity() {
    
    quantity=quantity - 1;
    
    document.getElementById('quantity').innerHTML = quantity;
    document.getElementById('quantity1').innerHTML = quantity;
    console.log(quantity);

    if (quantity <= 0) {
        window.alert("Quantity cannot be negative or zero!");
        quantity = 1;
  

    }else if (quantity <= 10) {
        document.getElementById('subtotal').innerHTML = quantity * 1000;
        document.getElementById('total').innerHTML = (quantity * 1000) + 50;
        document.getElementById('total2').innerHTML = (quantity * 1000) + 50;
    
    }
    
}

