import Car from './car';

describe('Класс Car', () => {
    it('получение информации об автомобиле', () => {
        const mazda = new Car({ brand: 'Mazda', model: '3' });
        expect(mazda.brand).toBe('Mazda');
        expect(mazda.information).toBe('Mazda 3');
    });
});