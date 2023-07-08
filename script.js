//asign buttons
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three= document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const sum = document.getElementById('plus');
const sub = document.getElementById('sub');
const times = document.getElementById('times');
const divide = document.getElementById('divide');
const clear = document.getElementById('clear');
const equals = document.getElementById('eq');
const point = document.getElementById('dot');
const display = document.querySelector('.display');

const infoz = document.getElementById('display');

let array = [];
let string = '';


const clearDisplay = () => {
    location.reload();
    }


    const checkDisplay = () => {
        if(display.innerHTML === ''){
            display.innerHTML += 'add digits'
        }
        if(display.innerHTML === 'add digits'){
            setTimeout(()=>{
                display.innerHTML = '';
            },1000)
        }
    }
    
clear.addEventListener('click', clearDisplay);



//math functions

const getSum = (a,b) => {
    return a + b;
}
const getSub = (a,b) => {
    return a - b;
}

const multi = (a,b) => {
    return a * b;
}

const dividez = (a, b) => {
    return a / b;
}


const  parse = (str) => {
    return Function(` return (${str})`)()
  }


const solve = () => {
    let solution;
    array.push(display.innerHTML);
     string = array.toString();
    console.log(string);

    solution = parse(string);   
    console.log(solution);
    display.innerHTML = solution; 
}


const logZero = () => {
    display.innerHTML += 0;
    }
    
zero.addEventListener('click', logZero);


const logOne = () => {
    display.innerHTML += 1;
    }
    
one.addEventListener('click', logOne);

const logTwo = () => {
    display.innerHTML += 2;
    }
    
two.addEventListener('click', logTwo);
  
const logThree = () => {
    display.innerHTML += 3;
    }
    
three.addEventListener('click', logThree);

const logFour = () => {
    display.innerHTML += 4;
    }
    
four.addEventListener('click', logFour);

const logFive = () => {
    display.innerHTML += 5;
    }
    
five.addEventListener('click', logFive);

const logSix = () => {
    display.innerHTML += 6;
    }
    
six.addEventListener('click', logSix);

const logSeven = () => {
    display.innerHTML += 7;
    }
    
seven.addEventListener('click', logSeven);

const logEight = () => {
    display.innerHTML += 8;
    }
    
eight.addEventListener('click', logEight);

const logNine = () => {
    display.innerHTML += 9;
    }
    
nine.addEventListener('click', logNine);


const pointz = () => {
    display.innerHTML += '.';
}

point.addEventListener('click', pointz);


const logDivide = () => {
    checkDisplay();
    if(display.innerHTML !== 'add digits'){
        display.innerHTML += ' / ';
    }
    }
    
divide.addEventListener('click', logDivide);

const logSum = () => {
    checkDisplay();
    if(display.innerHTML !== 'add digits'){
        display.innerHTML += ' + ';
    }
    }
    
sum.addEventListener('click', logSum);

const logSub = () => {
    checkDisplay();
    if(display.innerHTML !== 'add digits'){
        display.innerHTML += ' - ';
    }
    }
    
sub.addEventListener('click', logSub);

const logTimes = () => {
    checkDisplay();
    if(display.innerHTML !== 'add digits'){
        display.innerHTML += ' * ';
    }
    }
    
times.addEventListener('click', logTimes);

const logEquals = () => {
    checkDisplay();
    if(display.innerHTML !== 'add digits'){
        solve();   
    }    

}
    
    
equals.addEventListener('click', logEquals);


