let numVal; let totalVal; let operatorVal
let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('.display');
buttons.forEach(btn => btn.addEventListener('click',clickButton));

//Adding Key Press Arrays
    document.addEventListener("keypress",typeButton);
    const numArr = ['1','2','3','4','5','6','7','8','9','0'];
    const opArr = []; 
    opArr.push({key:'+', op:'addi'});
    opArr.push({key:'-', op:'subi'});
    opArr.push({key:'/', op:'divi'});
    opArr.push({key:'*', op:'mult'});
    opArr.push({key:'Enter', op:'equals'});
    const acArr = ['Delete','Backspace'];

//Funtion for if a key is typed
    function typeButton(event){
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
        else if(key == '.'){
            dotButton();
        }
    }

//Function for if a button is clicked.
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
        else if(btn.id == 'dot'){
            dotButton();
        }
    }

//--Calculator functions--
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
        //If numVal empty then just change the operator and nothing else. 
        if (numVal){
            if (operatorVal){
                totalVal = calc(totalVal, Number(numVal), operatorVal);
            }
            else{
                totalVal = Number(numVal);
            }
            display.textContent = totalVal;
            numVal = null;
        }
        if (!(operator == 'equals')){
            operatorVal = operator;
        }
        else{
            operatorVal = null;
        }
        
    }

    function acButton(){
        numVal = null;
        totalVal = null;
        operatorVal = null;
        display.textContent = '-------'
    }

    function dotButton(){
        if (String(numVal).includes('.')){
            return
        }
        else if(!numVal){
            numVal = '0.'
        }
        else{
            numVal = String(numVal) + '.'
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



    
