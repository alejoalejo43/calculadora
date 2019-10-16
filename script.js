document.getElementById("display").value = 0;
var valor = " ";
var acumulado = 0;
var p_operacion = true;
var sign = " ";
var signo = false;// es verdadero cuado a cambiado el acumulado
var math = '';
var tran = 'suma';

//"button[data-number]"atribute selector
document.querySelectorAll("button[data-number]")

/* .forEach(
    function(button){
    button.addEventListener("click",function(e){display(e)})
}); */
.forEach(button=>button.addEventListener("click", e => display(e)));

function display(e) {
    const numero = e.target.dataset.number;
    valor = valor+numero;
    document.getElementById("display").value = valor;  
    signo = false;  
}
document.querySelectorAll("button[data-sign]").forEach(button=>button.addEventListener("click", e=>operation(e)));

function operation(e){
    sign = e.target.dataset.sign;
    
    switch(sign){
        case 'add' : math = 'suma';igual();
        break;
        case 'subtract' : math = 'resta';igual();
        break;
        case 'multiply' : math = 'multi';igual();
        break;
        case 'div' : math = 'divi';igual();
        break;
        case 'equal' : igual();
        break;
        case 'percentage' : percentage();
        break;
        case 'reset' : reset();
        break;
        case 'erase' : erase();
        break;
        case 'addSub' : addSub();
        break;
        case 'point' : console.log("point");
        break;
    
    }
}

function igual(){

    if(valor === " "){// si no se ha puesto algun numero antes del signo + => acumulado = 0;
        acumulado = 0;
    }
    else {
        if (p_operacion === true){// valida si es la primer operacion
            document.getElementById("display").value = parseFloat(valor);
            acumulado = 0;
            valor = "";
            p_operacion = false;
           }
        else{
            if (math === 'suma'){
                document.getElementById("display").value = acumulado + parseFloat(valor);
                valor = "";
                tran = math;
            }
            else if (math === 'resta'){
                document.getElementById("display").value = acumulado - parseFloat(valor);
                valor = "";
            }
            else if (math === 'multi'){
                document.getElementById("display").value = acumulado * parseFloat(valor);
                valor=1;
            }
            else if (math === 'divi'){
                document.getElementById("display").value = acumulado / parseFloat(valor);
                valor=1;
            }
            
        }
        acumulado = parseFloat(document.getElementById("display").value);
        p_operacion = false;
        signo = true;
    }
    }
function percentage(){
    if(math === 'multi' || math === 'divi'){
        valor = valor / 100;
        document.getElementById("display").value = valor; 
    }
    else if(math === 'suma' ||math === 'restar'){
        valor = acumulado * valor / 100;  
        document.getElementById("display").value = valor; 
    }
    
    else{ reset();}
}
function reset(){
    document.getElementById("display").value = 0;
    valor = " ";
    acumulado = 0;
    math = '';
    p_operacion = true;
    signo = false;

}
function addSub(){
    if (signo){
        acumulado = acumulado * -1; // cambia el sigo del valor acumulado despues del igual o una opereacion
        document.getElementById("display").value = acumulado;
    }
    else{
        valor = valor * -1;  // Cambia el signo del valor digitado
        document.getElementById("display").value = valor;
    }
}
function erase(){
    valor = (valor.slice(0,((valor.length)-1)));
    if (valor == " "){
        valor = 0
    }
    document.getElementById("display").value = valor;
}