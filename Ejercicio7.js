const array = [2,4,7,8,9,6,7]

const arrayFiltrado = array.filter(filtrarNumeros);

function filtrarNumeros(array){
    return array >= 6;
}

console.log(array)
console.log(arrayFiltrado)
