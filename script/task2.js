function checkTax() {
    const BasicPay = parseInt(document.getElementById("basicpay").value);
    const HRA1 = parseInt(document.getElementById("HRA").value);

    const total = BasicPay + HRA1;
    let tax = 0;

    if (total >= 100000) {
        tax = total * 0.10; 
    } else if (total >= 50000) {
        tax = total * 0.05; 
    } else {
        tax = 0; 
    }

    console.log("Tax is ₹" + tax);
}
