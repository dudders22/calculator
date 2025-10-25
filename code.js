let numVal; let totalVal; let operatorVal;
let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('.display');
buttons.forEach(btn => btn.addEventListener('click',buttonClick));


function buttonClick(event){
    let btn = event.target;
    console.log(btn.id)
    //Number Selection
    if (btn.classList.contains('num')){
        if (numVal){
            numVal = Number(String(numVal) + String(btn.id));
        }
        else{
            numVal = Number(btn.id);
        }
        display.textContent = numVal;
    }

    //Operator Selection
    if(btn.classList.contains('op')){
        if (operatorVal){
            totalVal = calc(totalVal, numVal, operatorVal);
        }else{
            totalVal = numVal;
        }
        display.textContent = totalVal;
        numVal = null;
        operatorVal = btn.id;
    }

    //AC Selection
    if (btn.id == 'AC'){
        numVal = null;
        totalVal = null;
        operatorVal = null;
        display.textContent = '------'
    }
    
}

function calc(total, number, operator){
    switch(operator){
        case 'addi':
            return total + number;
        case 'subi':
            return total - number;
        case 'mult':
            return total * number;
        case 'divi':
            return total / number;
        case '=':
            return total
    }
}



    
