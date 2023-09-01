function cuentaRegresiva(numeroInicial){
    let cuenta = [];

    for(let i = numeroInicial; i > 0; i--){
        cuenta.push(i)
    }
    return cuenta;
}

const array = 54

console.log(array)
console.log (cuentaRegresiva(array))