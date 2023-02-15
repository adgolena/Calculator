const display = document.getElementById('box1');
let pressedNum = 0;
let num = ''; 
let operate = '';
let num1 = 0;
let num2 = 0;
let equated = 0;
let test ='';

function Number(choice){
    

    if(operate != ''){
        num2=choice;
        num= num.concat('',num2);
        console.log('num2 is: '+ num2);
    }else{
        pressedNum = choice;
        num1 = choice;

        num= num.concat('',pressedNum);
        console.log('num1 is: '+ num1);
    }
    

    display.textContent = num;
}


function clearScreen(){
    console.log("working");
    num='';
    operate ='';
    num1=0; num2=0;
    display.textContent = num;
}

function eraser(){
    num=num.slice(0,-1);
    console.log(num);
    display.textContent = num;
}


function operator(operators){
    operate = operators;
    num= num.concat('',operate);
    display.textContent = num;
    console.log("operator is: "+ operate);
}

function equater(){
    //num1 = parseFloat(num1);
    //num2 = parseFloat(num2);
    if(equated!=0){
        if(operate ==='+'){
            equated = num1 + num2;
        }else if(operate === '-'){
            equated = num1 - num2;
        }else if(operate === 'x'){
            equated = num1 * num2;
        }else if(operate === '/'){
            equated = num1 / num2;
        }
    }else{
        if(operate ==='+'){
            equated = num1 + num2;
        }else if(operate === '-'){
            equated = num1 - num2;
        }else if(operate === 'x'){
            equated = num1 * num2;
        }else if(operate === '/'){
            equated = num1 / num2;
        }
    }
    num1 = equated; 
    
   

    display.textContent = equated;

    
}
/*
var expression = "7.2*6+3/2-5*6+(7-2)*5";
var copy = expression;

expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
var numbers = copy.split(/[^0-9\.]+/);
var operators = expression.split("#").filter(function(n){return n});
var result = [];

for(i = 0; i < numbers.length; i++){
     result.push(numbers[i]);
     if (i < operators.length) result.push(operators[i]);
}

console.log(result);*/