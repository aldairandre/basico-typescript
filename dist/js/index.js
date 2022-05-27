"use strict";
//string,boolean,number..-
const numero = 30;
console.log(numero);
//formas de declaração de tipos
//inferencia
let y = 12;
// annotation
let z = 12;
//tipos basicos 
let firstName = 'Aldair';
let age = 22;
const isAdmin = true;
//Oject
const myNumbers = [1, 2, 3];
//tuplas  
let myTuplas;
const user = {
    name: "Aldair",
    age: 22
};
console.log(user);
//Any, é uma ma pratica usar ele
let qualquerDado = 0;
qualquerDado = 'Aldair';
qualquerDado = [];
//Quando não se sabe qual tipo de dado armazenado na variavel
let id = 10;
id = '10';
let userId = 10;
console.log(userId);
userId = 'Aldair';
console.log(userId);
//enum
//Enumera uma colecao e consegue se usar dados complexos de uma forma mais simples
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dia";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Aldair",
    size: Size.M
};
//literal type, basicamente é determinar valor com um tipo
let teste;
// console.log(teste) --> Vai retornar um erro pq a variavel teste não foi atribuida o valor de "autenticado", o tipolitera tbm é bastante usado com null, da ao poder de inicializar o a minha variabel com dois valores
teste = "autenticado";
teste = null;
console.log(teste);
//Funcoes, as propriedades 
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 3));
