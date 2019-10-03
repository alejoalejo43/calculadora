/* document.getElementById("1").addEventListener("click", function(){display(1)});
document.getElementById("2").addEventListener("click", function(){display(2)});
document.getElementById("3").addEventListener("click", function(){display(3)});
document.getElementById("4").addEventListener("click", function(){display(4)});
document.getElementById("5").addEventListener("click", function(){display(5)});
document.getElementById("6").addEventListener("click", function(){display(6)});
document.getElementById("7").addEventListener("click", function(){display(7)});
document.getElementById("8").addEventListener("click", function(){display(8)});
document.getElementById("9").addEventListener("click", function(){display(9)}); */

/* var cantidad = document.getElementsByTagName("button").length;
var botones = document.getElementsByTagName("button");
for(var i = 0; i<cantidad; i++){
    botones[i].addEventListener("click", function(){display(i)});
}
function display(numero){
    document.getElementById("display").value = numero;
} */

document.querySelectorAll("button[data-number]")
    .forEach(element => element.addEventListener("click", event => display(event)));


function display(event) {
    const numero = event.target.dataset.number;
    valor = valor+numero;
    document.getElementById("display").value = valor;    
}


document.getElementById("display").value = 0;
var valor = " ";
var acumulado = 0;
var suma = false;
var resta = false;
var multi = false;
var divi = false;
var p_operacion = true;

function display2(numero){
    
    console.log("numeroValor: ",valor);
    console.log("numeroAcumulado: ",acumulado);
    console.log("numeroSuma: ",suma);
    console.log("numeroResta: ",resta);
    console.log("numeroOp: ",p_operacion);
    valor = valor+numero;
    document.getElementById("display").value = valor;
}
function reset(){
    
    document.getElementById("display").value = 0;
    valor = " ";
    acumulado = 0;
    suma = false;
    resta = false;
    multi = false;
    divi = false;
    p_operacion = true;
    console.log("resetValor: ",valor);
    console.log("resetAcumulado: ",acumulado);
    console.log("resetSuma: ",suma);
    console.log("resetResta: ",resta);
    console.log("resetOp: ",p_operacion);
}
function sumar(){
    if (resta){
        acumulado = acumulado - parseInt(valor);
        valor = " ";
    }
    else {
    acumulado = acumulado + parseInt(valor);
    valor = " ";
    }
    document.getElementById("display").value = acumulado;
    suma = true;
    resta = false;
    multi = false;
    divi = false;
    p_operacion = false;
}
function restar(){
    if (p_operacion===true){
        acumulado = parseInt(valor);
        p_operacion = false;
    }
    else {
        if(suma){
            acumulado = acumulado + parseInt(valor);
        }
        else{
        acumulado = acumulado - parseInt(valor);
    }
    }
    
    valor = " ";
    document.getElementById("display").value = acumulado;
    suma = false;
    resta = true;
    multi = false;
    divi = false;
    p_operacion = false;
}
function igual(){
    if (suma){
        document.getElementById("display").value = acumulado + parseInt(valor);
    }
    else if (resta){
        document.getElementById("display").value = acumulado -parseInt(valor);
    }
    acumulado = parseInt(document.getElementById("display").value);
    valor=0;
}