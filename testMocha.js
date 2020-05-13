const assert = require('chai').assert; //https://www.chaijs.com/guide/installation/#browser
const expect = require('chai').expect;
const over = require('./over');

describe('Функция over', () => {
    it('должно вернуться большее число', () => {
        assert(over(3, 6) === 6);
        assert(over(103, 88) === 103);
        assert(over(8, 5) !== 5);
    });
    it('ожидаем "string", если аргумент строка, 0, если аргумент не строка и не число', () => {
        expect(over(false, null)).equal(0);
        expect(over('hi', 'null')).equal('x - string');
        expect(over(10, 'world')).equal('y - string');
    });
});