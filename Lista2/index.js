"use strict";
/*
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
    get getano():number{
        return this.ano;
    }
}

const carroA = new Carro(2005);
console.log(carroA.getano);
console.log(carroA.calcularIdadeCarro());
*/
//EXERCICIO 2
/*
class Calculadora{
    private valor1: number;
    private valor2: number;

    constructor(valor1: number, valor2: number){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    calculaSoma():number{
        let soma: number;
        soma = this.valor1 + this.valor2;
        return soma;
    }

    calculaSub():number{
        let sub: number;
        sub = this.valor1 - this.valor2;
        return sub;
    }

    calculaMult():number{
        let mult: number;
        mult = this.valor1 * this.valor2;
        return mult;
    }

    calculaDivi():number{
        let divi: number;
        divi = this.valor1 / this.valor2;
        return divi;
    }

    calculaPorc(): number{
        let porc: number;
        porc = (this.valor1 / 100) * this.valor2;
        return porc;
    }

    getValor1(): number{
        return this.valor1;
    }
    
    getValor2(): number{
        return this.valor2;
    }

    set setValor1(valor1: number){
        this.valor1 = valor1;
    }
    set setValor2(valor2: number){
        this.valor2 = valor2;
    }
}

let calculadora = new Calculadora(10, 2);
//console.log("Valores iniciais são 10 e 2!", Calculadora.getValor1());
console.log();
console.log(calculadora.calculaSoma());
console.log(calculadora.calculaSub());
console.log(calculadora.calculaMult());
console.log(calculadora.calculaDivi());
console.log(calculadora.calculaPorc());
console.log("Mudando os valores para 3 e 5!")
calculadora.setValor1 = 3;
calculadora.setValor2 = 5;
console.log(calculadora.calculaSoma());
console.log(calculadora.calculaSub());
console.log(calculadora.calculaMult());
console.log(calculadora.calculaDivi());
console.log(calculadora.calculaPorc());

//EXERCICIO 3
*/
class Produto {
    constructor(nomeProduto, precoProduto, quantidadeProduto) {
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
        this.quantidadeProduto = quantidadeProduto;
    }
    calcularValorTotalEmEstoque() {
        let totalValor;
        totalValor = this.precoProduto * this.quantidadeProduto;
        return totalValor;
    }
    reporEstoque(quantidade) {
        this.quantidadeProduto += quantidade;
        return this.quantidadeProduto;
    }
    venderEstoque(quantidade) {
        if (quantidade > this.quantidadeProduto)
            console.log("Estoque menor do que venda!!");
        else
            this.quantidadeProduto -= quantidade;
        return this.quantidadeProduto;
    }
}
let produto = new Produto("Produto X", 5.00, 50);
console.log(produto.calcularValorTotalEmEstoque());
console.log(produto.reporEstoque(70));
console.log(produto.venderEstoque(150));
