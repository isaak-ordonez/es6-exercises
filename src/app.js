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

const minimoAbsoluto = (arr1, arr2) => {
	const arreglos = [...arr1, ...arr2]
	let resp = arreglos[0];
	let number;
	for ( number of arreglos ) {
		if ( number < resp ) {
			resp = number;
		}
	}
	
	return resp;
}

console.log(minimoAbsoluto([21,9,34], [9,8,13]));