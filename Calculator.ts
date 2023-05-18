const operations = ['divide','multiply','add', 'minus']

const calculator= (a: number, b:number, op:string) => {
    if (!operations.includes(op)){
        console.log ('this operation does not exist')
    }
    if (op == 'add') return a + b
    if (op == 'divide') {
        if (b == 0 ) return 'Cannot Divide by 0'
        return a/b
    }
    if (op == 'multiply') return a * b
    if (op =='minus') return a -b
}

