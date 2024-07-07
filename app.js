//let numeroSecreto = generarNumeroAleatorio();
//let intentos = 1;
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asiganarTextoElemento(elemento,texto){
    let elementoHtlm = document.querySelector(elemento);
    elementoHtlm.innerHTML = texto;
    return;
    //no es nesario pero es buena practica el return
}

function verificarIntento()  {
    let NumeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    /* value para recien obtener el valor de ese input
    console.log(typeof(NumeroDeUsuario));
    console.log(NumeroDeUsuario);
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(NumeroDeUsuario === numeroSecreto);
    // el triple igual es un comparacion exaustiva , tipo de dato y valor
    */

    //console.log(numeroSecreto);
    //console.log(intentos);

    if(NumeroDeUsuario === numeroSecreto){
        asiganarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez':'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        if(NumeroDeUsuario > numeroSecreto){
            asiganarTextoElemento('p','El número secreto es menor');
        }
        else {
            asiganarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
} 

function reiniciarJuego(){
    // limpiar la caja
    limpiarcaja();
    // indicar mensaje de inicio
    // generar el numero aleatorio
    // inicar el intento
    CondicionesInciales()
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    // dar el el tipo y el valor caundo es set   
}

function limpiarcaja(){
    let valorcaja = document.querySelector('#ValorUsuario');
    // es lo mismo que usar por get id dado que query selctor es un selectero generico
    valorcaja.value = ""; // por apostrofe seria lo mismo

  /* tambien 
  document.querySelector('#ValorUsuario').value="";
  */
}

function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya se sorteo todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo ){
        asiganarTextoElemento('p','Ya se sortearon todos los números')

    } else {
        //si el numero generado ya esta en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        // includes recorre todo el array para ver si ya esta el numero 
        // la cual recibe un parametro siempre
        return generarNumeroAleatorio();
        //esto se llama recursividad el usar un metodo creado para q vuela a repetirse
     }
     else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        // si no pones eso sera un bucle creando y creando
     }
    }
    
    
}

function CondicionesInciales(){
    asiganarTextoElemento('h1','Juego del Número Secreto');
    asiganarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //se cmabio templece string para trabajar
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
}




// queryselecto para buscar por etiquetas de html
CondicionesInciales();

// control mas f para buscar
// aparte del push que agrega el pop quita el ultimo elemento