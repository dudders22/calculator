let numVal; let totalVal; let operatorVal;
let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('.display');
buttons.forEach(btn => btn.addEventListener('click',clickButton));

//Adding Key Press
document.addEventListener("keypress",typeButton);
const numArr = ['1','2','3','4','5','6','7','8','9','0'];
const opArr = []; 
opArr.push({key:'+', op:'addi'});
opArr.push({key:'-', op:'subi'});
opArr.push({key:'/', op:'divi'});
opArr.push({key:'*', op:'mult'});
opArr.push({key:'Enter', op:'equals'});
const acArr = ['Delete','Backspace'];

function typeButton(event){
    //Just doing numbers for proof of concept. Need smart way to define operators, possibly just remap keypresses, or likely just rename id's to match keypress ids.
    const key = event.key;
    const opItem = opArr.filter((x) => x.key == key)[0];
    if(numArr.includes(key)){
        numButton(key);
    }
    else if(opItem){
        opButton(opItem.op);
    }
    else if(acArr.includes(key)){
        acButton();
    }
}

function clickButton(event){
    const btn = event.target
    if (btn.classList.contains('num')){
        const value = btn.textContent;
        numButton(value);
    }
    else if(btn.classList.contains('op')){
        const value = btn.id;
        opButton(value);
    }
    else if(btn.id === 'AC'){
        acButton();
    }
}

function numButton(num){
    if (numVal){
        numVal = Number(String(numVal) + String(num));
    }
    else{
        numVal = Number(num);
    }
    display.textContent = numVal;
}

function opButton(operator){
    if (operatorVal){
        totalVal = calc(totalVal, numVal, operatorVal);
    }else{
        totalVal = numVal;
    }
    display.textContent = totalVal;
    numVal = null;
    operatorVal = operator;
}

function acButton(){
    numVal = null;
    totalVal = null;
    operatorVal = null;
    display.textContent = '------'
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



    
