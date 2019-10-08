document.getElementById("display").value = 0;
var valor = " ";
var acumulado = 0;
var suma = false;
var resta = false;
var multi = false;
var divi = false;
var p_operacion = true;
var sign = " ";
var signo = false;// es verdadero cuado a cambiado el acumulado

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
        case 'add' : sumar();
        break;
        case 'subtract' : restar();
        break;
        case 'multiply' : multiply();
        break;
        case 'div' : division();
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



function sumar(){
/*     if (valor===" "){  si acabado de oprimir un sigo y se oprime otro el display muestra NaN  (sigo acumulado)
        valor=0;
    } */
    //else{
        if (resta){
            acumulado = acumulado - parseFloat(valor);
            valor = " ";
        }
        else if(multi){
            acumulado = acumulado * parseFloat(valor);
            valor = " ";
        }
        else {
            if(valor === " "){
                acumulado = 0;
            }
            else{
                acumulado = acumulado + parseFloat(valor);
                valor = " ";
                console.log("acumulado: " + acumulado);
            }
        }
        
        document.getElementById("display").value = acumulado;
    //}
    suma = true;
    resta = false;
    multi = false;
    divi = false;
    p_operacion = false;
    signo = true;
}
function restar(){
    if (p_operacion===true){
        if(valor === " "){
            acumulado = 0;
        }
        else{
            acumulado = parseFloat(valor);
        }
        
        p_operacion = false;
       
    }
    else {
        if(suma){
            console.log("etra a suma de multi" + valor);
            acumulado = acumulado + parseFloat(valor);
            console.log("acumulado: " + acumulado);
        }
        else if (multi){
            acumulado = acumulado * parseFloat(valor);
        }
        else{
        acumulado = acumulado - parseFloat(valor);
    }
    }
    
    valor = " ";
    document.getElementById("display").value = acumulado;
    suma = false;
    resta = true;
    multi = false;
    divi = false;
    p_operacion = false;
    signo = true;

}
function multiply(){
    if (p_operacion===true){
        if(valor === " "){
            acumulado = 0;
        }
        else{
            acumulado = parseFloat(valor);
        }
        
        p_operacion = false;
    }
    else{
        
        if(suma){
            acumulado = acumulado + parseFloat(valor);
        }
        else if (resta){
            acumulado = acumulado - parseFloat(valor);
        }
        else if (multi){
            acumulado = acumulado * parseFloat(valor);
        }
    }
    
    valor = " ";
    document.getElementById("display").value = acumulado;
    suma = false;
    resta = false;
    multi = true;
    divi = false;
    p_operacion = false; 
    signo = true;

} 
function division(){
    if (p_operacion===true){
        if(valor === " "){
            acumulado = 0;
        }
        else{
            acumulado = parseFloat(valor);
        }
        
        p_operacion = false;
    }
    else{
    
        if(suma){
            acumulado = acumulado + parseFloat(valor);
        }
        else if (multi){
            acumulado = acumulado * parseFloat(valor);
        }
        else if (resta){
            acumulado = acumulado - parseFloat(valor);
        }
        else{
            console.log("etra  a divi");
            acumulado = acumulado / parseFloat(valor);
        }
    }
    valor = " ";
    document.getElementById("display").value = acumulado;
    suma = false;
    resta = false;
    multi = false;
    divi = true;
    p_operacion = false;
    signo = true;

}
function percentage(){
    if(multi || divi){
        console.log("get in multi");
        valor = valor / 100;
        document.getElementById("display").value = valor; 
    }
    else if(suma ||restar){
        console.log("get in suma");
        valor = acumulado * valor / 100;  
        document.getElementById("display").value = valor; 
    }
    
    else{ reset();}
}
function igual(){
    if (suma){
        document.getElementById("display").value = acumulado + parseFloat(valor);
        suma = true;
        resta = false;
        multi = false;
        divi = false;
        p_operacion = false;
        valor=0;
    }
    else if (resta){
        document.getElementById("display").value = acumulado - parseFloat(valor);
        suma = false;
        resta = true;
        multi = false;
        divi = false;
        p_operacion = false;
        valor=0;
    }
    else if (multi){
        document.getElementById("display").value = acumulado * parseFloat(valor);
        suma = false;
        resta = false;
        multi = true;
        divi = false;
        p_operacion = false; 
        valor=1;
    }
    else if (divi){
        document.getElementById("display").value = acumulado / parseFloat(valor);
        suma = false;
        resta = false;
        multi = false;
        divi = true;
        p_operacion = false; 
        valor=1;
    }
    acumulado = parseFloat(document.getElementById("display").value);
    signo = true;

    
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