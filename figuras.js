//Codigo cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(ladoC) {
    return ladoC * 4;
}

perimetroCuadrado();

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(ladoC) {
    return ladoC * ladoC;
} 

areaCuadrado();

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo TRIANGULO
console.group("TRIANGULOS")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " 
            + ladoTriangulo1 + "cm, " 
            + ladoTriangulo2 + "cm, " 
            + baseTriangulo + "cm"          
            );

// const alturaTriangulo = Math.sqrt(Math.pow(ladoTriangulo1,2) - Math.pow(baseTriangulo/2,2) );
// console.log("La altura del triangulo es: " + alturaTriangulo);
function alturaTriangulo(lado1,base){
    return Math.sqrt(Math.pow(lado1,2) - Math.pow(base/2,2) );
}

alturaTriangulo();

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + alturaTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo);


function perimetroTrianguloFun(lado1,lado2,lado3){
    return lado1 + lado2 + lado3;
}

perimetroTrianguloFun(6,6,4);


function areaTriangulo(base,lado1){
    altura = alturaTriangulo(lado1,base);           //Desde una funcion
    return (base * altura) / 2;
}

areaTriangulo();



// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo);

console.groupEnd();