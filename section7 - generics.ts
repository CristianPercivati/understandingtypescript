//Generics section from the course


//This function shows how to use generics:

//This below won't work when trying to access merged.name.
//function mergeObject(a: object, b: object){

function mergeObject<T extends object,U extends object>(a: T, b: U) {
    return Object.assign(a, b)

}
const merged = mergeObject({name: 'Perci'},{age: 34})
console.log(merged.name)

//This function shows how extends works:

interface hasLenght{
    length: number
}

//In this example, we admit only objects that has "lenght" element
//This also would work:
//function countAndShow<T extends {length: number}>(element: T): [T, number] {

function countAndShow<T extends hasLenght>(element: T): [T, string] {
let descriptionText = "Not a value."
if(element.length===1){
    descriptionText = "Got 1 value"
} else if (element.length>1){
    descriptionText = "Got "+element.length+" values."
}

    return [element, descriptionText]
}

console.log(countAndShow("Hola"))

//Showing how extends keoyf works:

function extractAndConvert<T extends object, U extends keyof T>(a: T,b: U){

//To access an unknown property while runtime, we use [] instead of .

    return(`The value is: ${a[b]} and the key is "${String(b)}"`)

}

console.log(extractAndConvert({name: 'Perci', age: '34'},'age'))

/*
This function shows how important is generics in async functions. If it's an async function, it has to return an Promise type.

async function fetchApi<ResultType>(path: string): Promise<ResultType> {
  const response = await fetch(`https://example.com/api${path}`);
  return response.json();
}
*/
