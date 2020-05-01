'use strict';
const header = document.querySelectorAll('h1')[1].textContent,
    input = document.querySelector('[type="text"]'),
    output = document.querySelector('.output'),
    text = input.textContent;


input.addEventListener('input', (ev)=>{
    let text = input.value;
    output.textContent = text;
    //output.textContent = text.replace(/^8/g, '7');
    //output.textContent = text.replace(/^[a-zа-я]/g, (match)=> match.slice(0,1).toUpperCase());
    output.textContent = text.replace(/(\+?[78])(([- () ]*\d){10})/g, (match, val1, val2) => val1);
});





// const reg = /привет/;
// const reg2 = new RegExp('hi');

// // console.log(reg.test('привет, муж'));
// // console.log(reg2);
// // console.log(/привет/.test('привет, мамочка! тут пока хорошо'));
// // console.log(/hi/.test('привет, мамочка! hi, hi'));
// console.log(/Андрей/.test('Андрей, иди сюда'));
// console.log(/^Андрей/.test('Андрей, иди сюда'));
// console.log(/^Андрей/.test('иди сюда, Андрей'));
// console.log(/Андрей$/.test('иди сюда, Андрей'));

// const string = `Lorem АБВА ipsum dolor sit_ АБВА amet, consectetur adipiscing elit 555.
// Lorem ipsum
// Lorem amet ipsum
// Loremipsum`;
// const contact = `Телефон:
// +7 (495) 604-63-63
// 89054561285
// 79065413322
// Телефон/факс
// Email info@info.ru
// дедушка Леонтий девушка двушка дедушшшшкаааа дедушшкаа
// экстренно экстрено экстреннннооо экстрео
// <div class="output">Привет</div>`;

// const strSample = 'номер, номера, номура';

// console.log(string.match(/Lorem(?=ipsum)/ig));
// console.log(string.replace(/АБВА(?= amet)/ig, 'ALINA'));
// console.log(string.search(/АБВА/ig));
// console.log(string.split(/[\s,]+/));
// console.log(contact.match(/\w+@\w+\.+\w{2,3}/g));
// console.log(contact.match(/\+?[78]([- () ]*\d){10}/g));
// const result = string.match(/[oec]/g);
// const result2 = string.match(/[1-9]/g);
// const tel = contact.match(/\d/g).join('');
// const telefon = contact.match(/\D/g).join('');
// const telefonNice =telefon.match(/\S/g).join('');
// const telOth = contact.match(/[^а-я]/ig).join('');
// // console.log(string.match(/\W/g).join(''));
// console.log(contact.match(/де(в|д)ушка/g));
// console.log(contact.match(/телефон(:|\/факс)/ig));
// console.log(strSample.match(/номера?/g));
// console.log(strSample.match(/ном(ер)?/g));
// console.log(contact.match(/д(е)?вушка/g));
// console.log(contact.match(/дедуш+ка/g));
// console.log(contact.match(/экстрен*о/g));
// console.log(contact.match(/экстрен{1,2}о/g));
// console.log(contact.match(/<.+?>/g));
// // console.log(result2);
// console.log(tel);
// console.log(telefon);
// console.log(telOth)