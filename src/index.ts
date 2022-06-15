import { sub, sum } from "./1-basico-sobre-tipos/calcFunctions"

//string,boolean,number..-
const numero: number = 30

console.log(numero)

//formas de declaração de tipos

//inferencia
let y = 12

// annotation
let z:number = 12

//tipos basicos 

let firstName:string = 'Aldair'
let age:number = 22
const isAdmin:boolean = true 

//Oject

const myNumbers:number[] = [1,2,3]

//tuplas  

let myTuplas:[number,string, string[]]

const user:{name: string; age:number} = {
    name: "Aldair",
    age: 22
}

console.log(user)

//Any, é uma ma pratica usar ele
let qualquerDado: any = 0
qualquerDado = 'Aldair'
qualquerDado = []

//Quando não se sabe qual tipo de dado armazenado na variavel

let id:string | number = 10
id = '10'

//id = true --> vai mostrar erro pq não foi passado o tipo boolean para id

//type alias
//define um determinado por mim com multipos tipos igual a any, mas a diferença é que eu defino um nome para o meu tipo e depois os tipos que eu quero que ess meu tipo tenha.

type myIdType = number | string 

let userId:myIdType = 10
console.log(userId)
userId = 'Aldair'

console.log(userId)

//enum
//Enumera uma colecao e consegue se usar dados complexos de uma forma mais simples

enum Size {
    P = "Pequeno",
    M = "Média",
    G = "Grande"
}

const camisa = {
    name: "Aldair",
    size: Size.M
}

//literal type, basicamente é determinar valor com um tipo

let teste: "autenticado" | null

// console.log(teste) --> Vai retornar um erro pq a variavel teste não foi atribuida o valor de "autenticado", o tipolitera tbm é bastante usado com null, da ao poder de inicializar o a minha variabel com dois valores

teste = "autenticado"
teste = null

console.log(teste)

// Calculos

console.log(sum(1,1))
console.log(sub(7,8))
