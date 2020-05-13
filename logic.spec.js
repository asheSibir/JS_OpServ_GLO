import funcNum from './logic';

describe('Функция funcNum', () => {
    it('Возвращает количество справа, которые меньше самого левого', () => {
        const arr = funcNum([15, 2, 9, 0, 6]);
        const res = [4,1,2,0,0];
        expect(arr).toEqual(res);
    });
});