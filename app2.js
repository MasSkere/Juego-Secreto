function hello() {
    console.log("Hola mundo")
}

function hello2(nombre){
    console.log(`Hola ${nombre}`);
    //alt+96 `
}

function muestranumero(numero){
  let doble = parseInt(numero)*2;
  console.log(typeof(numero));
  console.log(doble);
  console.log(typeof(doble));
}

function promedio (numero1,numero2,numero3){
    let promedio = (numero1 + numero2 +numero3)/3;
    console.log(typeof(numero1));
    console.log(typeof(numero2));
    console.log(typeof(numero3));
    console.log(promedio);
    console.log(typeof(promedio));
}

function mayor (numero11,numero22){
    /*
{
  return a > b ? a : b;
}   */

    if (numero11 > numero22) 
    { console.log(numero11)}
    else {console.log(numero22)}
    }

function doble2(numero33){
    let cuadrado = parseInt(numero33)*parseInt(numero33);
    console.log(cuadrado);
}

hello();
hello2('Ronal');
muestranumero(4);
promedio(4,5,6);
mayor(12,15);
doble2(4);