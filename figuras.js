//Codigo cuadrado
console.group("Cuadrado");

function perimetroCuadrado(ladoC) { return ladoC * 4; }

perimetroCuadrado();


function areaCuadrado(ladoC) { return ladoC * ladoC; } 

areaCuadrado();

console.groupEnd();


console.group("Triangulo");
//Codigo TRIANGULO

function alturaTriangulo(lado1,base){ return Math.sqrt(Math.pow(lado1,2) - Math.pow(base/2,2) ); }

alturaTriangulo();


function perimetroTrianguloFun(lado1,lado2,lado3){ return lado1 + lado2 + lado3; }

perimetroTrianguloFun(6,6,4);


function areaTriangulo(base,lado1){
    altura = alturaTriangulo(lado1,base);           //Desde una funcion
    return (base * altura) / 2;
}

areaTriangulo();

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo);

console.groupEnd();

//Aqui  interactuamos con el html

function calcularPerimetroCuadrado(){
    const inputC = document.getElementById("ingresoCuadrado");
    const value = inputC.value;
    
    const perimetro = perimetroCuadrado(value);

    alert("El perimetro del cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado(){
    const inputC = document.getElementById("ingresoCuadrado");
    const value = inputC.value;
    
    const area = areaCuadrado(value);

    alert("El area del cuadrado es: " + area + "cm");
    
}