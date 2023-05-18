type operation ='add'|'divide'|'multiply'|'minus'
const calculatorV2= (a: number, b:number, op:operation) => {

    if (op == 'add') return a + b
    if (op == 'divide') {
        if (b == 0 ) return 'Cannot Divide by 0'
        return a/b
    }
    if (op == 'multiply') return a * b
    if (op =='minus') return a -b
}

console.log(calculatorV2(2,4,'add'))