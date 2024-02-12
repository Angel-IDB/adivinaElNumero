let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = [];
let numeroMaximo = 10;
let numerosMaximoIntentos = (3)+1;



function elementoDeTexto(elemento, texto){
    //elmentoHTML es el nombre que le puse a la variable "let"
    let elementoHTML = document.querySelector(elemento,texto);
    elementoHTML.innerHTML = (texto)
    return;
}

function verificarIntento(){
    /*
    El parseInt convierte un string en un valor, ahora en vez de entregar un
     "string" entrego un "number" asi no habra errores posibles.*/
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //El "===" verifica que tambien sea igual el tipo de operador y el valor
    //El"==" solo verifica los valores 
    console.log (numeroSecreto === numeroDeUsuario);
    
    
 if (numeroSecreto === numeroDeUsuario){
       
        //El ususario gano
        elementoDeTexto('P',`Bien Hecho! ganaste en ${intentos} ${intentos === 1 ? 'intento!' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    } else {
        //El ususuario no acerto
        if (numeroSecreto > numeroDeUsuario){
            elementoDeTexto('p', 'El numero secreto es mayor');
            
        } else {
            elementoDeTexto ('p', 'El numero secreto es menor');
        }
        
         intentos++;
         if (numerosMaximoIntentos == intentos){
            fallaste();
        }
        
        //Llamamos la funcion 'limpiarCajita()' para vaciar la caja
        limpiarCajita();
        
    }
    return; 
}



function generarNumeroSecreto(){
    /*let numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroScreto;*/
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    /*
    Si ya sorteamos todos los numeros(Si todos los numeros 
    dentro de nuestro rango son igual al numero maximo)
    */
    if (listaNumerosGenerados.length == numeroMaximo){
        elementoDeTexto('p', 'Lograste acertar todos los numeros!')
    } else {

        //Si el numero ya esta en lista 
        console.log (numeroGenerado);
        console.log(listaNumerosGenerados)
        if (listaNumerosGenerados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
    
        }   else{
            /*
            Si el numero no esta en la lista,
            lanzara el numero generado y lo agregrara a la lista
            */
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function limpiarCajita(){
    /*
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
    */
   //Esta es la forma mas cort a (Es lo mismo pero habrebiado)
   document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales() {
    elementoDeTexto('h1', 'Adivina el numero secreto');
    elementoDeTexto('p', `Escribe un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('intentar').removeAttribute('disabled');
}

function reiniciarJuego(){
    //limpiar la cajita
    limpiarCajita();
    //Mostrar parametro de numeros (del 1 al 10)
    //Reiniciar el contador 
    //Generar numero Aleatorio
    //Reiniciar el contador de intententos
    condicionesIniciales();
    //Desabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

function fallaste(){
    elementoDeTexto('h1',`¡OH no Fallaste!`);
    elementoDeTexto('p','Intentalo de nuevo');
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.querySelector('#intentar').setAttribute('disabled', 'true');
    listaNumerosGenerados = [];
}
    