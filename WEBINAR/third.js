'use strict';
alert('!'); 
const obj = {
    firstname: 'Arya',
    surname: 'Stark',
    age: 17,
    kill(victim) {
        console.log(victim + ' dead');
    }
};
const { firstname, kill } = obj;
console.log(firstname);
console.log(kill);