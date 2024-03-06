//EXERCICIO 1 
class Carro{
    private ano: number;

    constructor(ano: number){
        this.ano = ano;
    }

    calcularIdadeCarro(): string{
        let idade: number = 2024-this.ano;
        return `A idade do carro em 2024 é ${idade}`
    }
}

const carroA = new Carro(2005);

console.log(carroA.calcularIdadeCarro());