function bookingItemChange(booking , isIncrease) {
    const bookingInput = document.getElementById(booking +'-count');
    const bookingCount = parseInt(bookingInput.value);
    let bookingNewCount = bookingCount ;
    if (isIncrease == true) {
        bookingNewCount = bookingCount + 1;
    }
    if (isIncrease == false && bookingCount > 0) {
        bookingNewCount = bookingCount - 1;
    }
    bookingInput.value =bookingNewCount;
    totalCalculate();
}

function totalCalculate() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');

    var totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal').innerText ='$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax').innerText = '$' + tax;

    const grandAmount = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandAmount;
}
function getInputValue (booking) {
    const bookingInput = document.getElementById(booking + '-count');
    const bookingCount  = parseInt( bookingInput .value);
    return bookingCount;
};
// booking confirm
document.getElementById('booking-btn').addEventListener('click', function () {
    document.getElementById('booking-wrap').style.display = 'none';
    document.getElementById('confirm-area').style.display = 'block';

    const firstPerpiece =document.getElementById('firstClass-count').value;
    let firstNewPerpiece=parseInt(firstPerpiece);
    document.getElementById("First-Class").innerText= firstNewPerpiece;

    const economyPerpiece =document.getElementById('economy-count').value;
    let economyNewPerpiece=parseInt(economyPerpiece);
    document.getElementById("Economy-Class").innerText= economyNewPerpiece;

    let Newsubtotals=document.getElementById("subtotal").innerText;
    document.getElementById("Subtotals").innerText= Newsubtotals;
            
    let vat=document.getElementById("tax").innerText;
    document.getElementById("Vats").innerText= vat;

    let totals=document.getElementById("grand-total").innerText;
    document.getElementById("Totals").innerText= totals;
})
