'use strict';
let num = 266219; 
let arr=[];

for(let temp = num; Math.round(temp) !== 0; temp/=10, temp = Math.floor(temp)){
    arr.unshift(temp%10);
}
let fix = 1;
arr.forEach (function (e) {
    fix *= e;
});
alert(fix);

let cube = fix;
alert(cube *= fix * fix);

let strcube = cube.toString();
alert(strcube.substring(0, 1));

