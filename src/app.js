const PI = 3.141593;

const calcularArea = (radio) => {

    let area = ( radio *2);
    area = area * PI;
    return area;
};


console.log('El valor de PI es ' + PI +
    ' y de un circulo con radio ' +  3 +
    ' el valor del area es: '+calcularArea(3) );


let arr = ['a','b','c'];

for (let [index, elem] of arr.entries() ) {
    console.log( [index, '. ',elem].join('') );
}