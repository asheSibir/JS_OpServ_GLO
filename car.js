export default class Car{
    constructor(option){
        const {brand, model} = option;
        this.brand = brand;
        this.model = model;
    }
    get information() {
        return this.brand + ' ' + this.model;
    }
}