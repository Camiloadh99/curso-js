//Codigo cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
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

const alturaTriangulo = Math.sqrt(Math.pow(ladoTriangulo1,2) - Math.pow(baseTriangulo/2,2) );
console.log("La altura del triangulo es: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + alturaTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo);

console.groupEnd();