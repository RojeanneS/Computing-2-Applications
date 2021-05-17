//Recursion Exercise
//Factorial
const factorial = (n) => {
    if (n === 0){
        return 1;
    }
else return n * factorial(n - 1);
};

//Fibonacci 
const fibonacci = (n) => {
    if (n===0){
       return 0;
    }
    if (n===1){
        return 1;
    }

else return fibonacci(n - 1) + fibonacci(n - 2);
};

//Lucas
const lucas = (n) => {
    if (n===0){
       return 2;
    }
    if (n===1){
        return 1;
    }

else return lucas(n - 1) + lucas(n - 2);
};

//Brady
const brady = (n) => {
if (n===0){
    return 2308;
 }
 if (n===1){
     return 4261;
 }

 else return brady(n - 1) + brady(n - 2);
};

//Fibonacci-Like
//const fibonacci = (n) => {
    //if (n===0){
       //return 0;
   // }
   // if (n===1){
        //return 1;
//     }

// else return fibonacci(n - 1) + fibonacci(n - 2);
// };

const fibonacci_like = function (x,y)(n){
    const start = [x,y];
    return fibonacci_like(n - 1) + fibonacci_like(n - 2);
};



debugger;