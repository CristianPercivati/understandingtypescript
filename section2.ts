//Little exercise showing how to use basic ts types like number, boolean and string. 

function sum(num1: number, num2: number, showResult: boolean, phrase: string){
    const result = num1+num2
    if(showResult){
        console.log(phrase+result)
        return result
    } else {
        return result
    }
}

//Only for demo purposes, I show how to cast a type without intializating a variable, but in this case it's inferred by TS when I make the assignment.
let number1: number
number1 = 10
const number2 = 3

sum(number1,number2,true,"The result is: ")

/*
const ADMIN = 0
const READ_ONLY = 1
const AUTHOR = 2
*/

enum Role {ADMIN, READ_ONLY, AUTHOR=2}

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] //tuple

} = {
    name: 'Perci',
    age: 34,
    hobbies: ['Music','Videogames'],
    role: [Role.AUTHOR, 'author']
}

console.log(person.name)
person.role.push('Admin') // js exception

for (let hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

type NumOrStr = number | string
type Conversion = 'as-number' | 'as-text'

function combine(
    input1: NumOrStr,
    input2: NumOrStr,
    resultConversion: Conversion
    ){
        let result;
        if (typeof(input1) === 'number' && typeof(input2) === 'number' || resultConversion==='as-number'){
            result = +input1 + +input2
        } else {
            result = input1.toString() + input2.toString()
        }
        return(result) 
}

console.log(combine(2,2,'as-number'))


