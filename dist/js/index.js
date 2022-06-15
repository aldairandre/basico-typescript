"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcFunctions_1 = require("./1-basico-sobre-tipos/calcFunctions");
const numero = 30;
console.log(numero);
let y = 12;
let z = 12;
let firstName = 'Aldair';
let age = 22;
const isAdmin = true;
const myNumbers = [1, 2, 3];
let myTuplas;
const user = {
    name: "Aldair",
    age: 22
};
console.log(user);
let qualquerDado = 0;
qualquerDado = 'Aldair';
qualquerDado = [];
let id = 10;
id = '10';
let userId = 10;
console.log(userId);
userId = 'Aldair';
console.log(userId);
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
let teste;
teste = "autenticado";
teste = null;
console.log(teste);
console.log((0, calcFunctions_1.sum)(1, 1));
console.log((0, calcFunctions_1.sub)(7, 8));
