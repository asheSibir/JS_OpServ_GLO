'use strict';
const sign = 'dd';
console.log(/[a-f]{1,3}/.test(sign));

//bcdgh cdfgh
//[^h]([aeiou])v\1.+
//.{2}(gw|st|br)[^d-q]*
//_ _ gw|st|br abcrstuvwxyz
// [^i-z]([aeiouy])\1[c-h]
//([f-z]{2})\1
//[a-f]{1,3}r[p-z]{1,3}

//5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль

const color = '#ABCDEF';
console.log(/#[A-Z]{6}/.test(color));

//Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить
//на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>

const link = 'http://site.ru/aaaa/bbbb.html';
let boom,
fin,
prepres,
presentation;
if (link.match(/^http/g)){
    boom = link.replace(/http/, '<a href="http') + '">';
    prepres = link.match(/\/{2}.+?\//);
    presentation = link.match(/\/+.+?\//);
    fin = link.replace(/\.[a-z]{2,4}/, presentation);
}
console.log(boom);
console.log(presentation);