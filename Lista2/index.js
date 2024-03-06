"use strict";
//EXERCICIO 1 
class Carro {
    constructor(ano) {
        this.ano = ano;
    }
    calcularIdadeCarro() {
        let idade = 2024 - this.ano;
        return `A idade do carro em 2024 é ${idade}`;
    }
}
const carroA = new Carro(2005);
console.log(carroA.calcularIdadeCarro());
