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
