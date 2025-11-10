function checkTax(){

    const BasicPay=document.getElementById("basicpay").value;
    const HRA1=document.getElementById("HRA").value;

    const value1=parseInt(BasicPay);
    const value2=parseInt(HRA1);
    
    const total=value1+value2
    let tax=0
    if(total>0 && total>50000){
        tax=0
    }else if(total>5000 && total>100000){
        tax=0.5
    }else if(total>=100000){
        tax=0.010
    }


    console.log("Tax is",tax);
    
}

