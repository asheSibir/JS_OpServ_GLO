'use strict';
const mult = (x, y) => {
    return x * y;
}; 
const getArg = (z) => {
    return mult(z, z);
};

const showRes = (num) =>{
    const res = getArg(num);
    console.log(res);
}
debugger;
showRes(2);