
const calculator= (a: number, b:number, op:'add'|'divide'|'multiply'|'minus') => {

    if (op == 'add') return a + b
    if (op == 'divide') {
        if (b == 0 ) return 'Cannot Divide by 0'
        return a/b
    }
    if (op == 'multiply') return a * b
    if (op =='minus') return a -b
}

console.log(calculator(2,4,'add'))