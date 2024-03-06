"use strict";
/*
//EXERCICIO 1
function maiorNumero(n: number[], int: number){
    for (let i=0; i<n.length; i++){
    if (n[i]>int)
        int = n[i];
    }
    return int;
}

let int

console.log("O Maior numero eh:", maiorNumero([5, 7, 9, 12, 15, 23], 0));
*/
/*
//EXERCICIO 2
function ehPar(n:number) {
    if (n % 2 == 0)
        return console.log("O numero",n, "eh par");
    else
        return console.log("O numero",n, "nao eh par");
}

let n=10;

console.log(ehPar(n));
*/
//EXERCICIO 3
/*
function mediaArit(n: number[]){
    let soma = 0;
    for(let i = 0; i<n.length; i++){
        soma+=n[i];
    }
    return soma/n.length;
}

console.log("A media aritmetica eh:", mediaArit([1, 2, 3, 4, 5]));
*/
/*
//EXERCICIO 4
function maius(n:string = "abelha"){
    return n.toUpperCase();
}
 
let n;
console.log("String maiuscula", maius(n));
*/
/*
//EXERCICIO 5
function ehPrimo(n:number) {
    for (let i = 2; i < n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return n != 1;
}

console.log(ehPrimo(8));
*/
/*
//EXERCICIO 6
function inverteOrdem(n:number[]){
    let narray = "";
    for(let i=n.length -1; i>= 0; i--){
        narray+=n[i];
    }
    return narray;
}
console.log("O array invertido:", inverteOrdem([1,2,3,4]));
*/
/*
//EXERCICIO 7
function aumentoPorc(n: number, porcent: number){
    return n*(1 +(porcent/100));
}

let n = 10;
let porcent = 100;

console.log("O valor",n, "com acrescimo de", porcent,"eh:", aumentoPorc(n, porcent));
*/
/*
//EXERCICIO 8
function inverteString(n:string){
    let array: string[] = n.split("")
    let reverte: string = array.reverse().join("")

    return reverte;
}
console.log("As palavras invertidas:", inverteString("Abelha Arrasa"));
*/
/*
//EXERCICIO 9
function somaPares(n: number[]){
    let soma = 0;
    for(let i = 0; i<n.length; i++){
        if(n[i] % 2 == 0){
        soma+=n[i];
        }
    }
    return soma;
}

console.log(somaPares([3,5,6,8,10,17]));
*/
/*
//EXERCICIO 10
function fatorial(n:number){
    if (n == 0)
        return 1;
    else
        return n * fatorial(n-1);
}
let n = 3;
let x = 5;
let y = 9;
let z = 10;
console.log("O fatorial de", n,"eh", fatorial(n));
console.log("O fatorial de", x,"eh", fatorial(x));
console.log("O fatorial de", y,"eh", fatorial(y));
console.log("O fatorial de", z,"eh", fatorial(z));
*/ 
