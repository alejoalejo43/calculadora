document.getElementById("display").value = 0;
var valor = " ";
var acumulado = 0;
var p_operacion = true;
// es verdadero cuado a cambiado el acumulado
var signo = false;
var lastOperation = null;
var numero = null;
var signCase = null;
var eventTarget = null;
var eTarget = null;
var thisOne = null;
var numSign = false; //numero o signo?



document.querySelectorAll("button[data-number]")
.forEach(button => button.addEventListener("click", e => display(e)));
function display(e) {
    numSign = false;
    numero = e.target.dataset.number;
    pantalla();
    eventTarget = event.target;
    eventTarget.setAttribute("class","strong");
    setTimeout(function(){ eventTarget.setAttribute("class","color");
                        }, 100);
}
function pantalla(){
    valor = valor+numero;
    document.getElementById("display").value = valor;  
    signo = false; 
    numSign = false;// era un signo? => true
    
}
document.querySelectorAll("button[data-sign]")
.forEach(button=>button.addEventListener("click", e => operation(e)));

function operation (e) {
    signCase = e.target.dataset.sign;
    operationCase();
}
function operationCase(){
   
    thisOne = document.querySelector('button[data-sign="'+ signCase +'"]');
            thisOne.setAttribute("class","strong2");
            setTimeout(function(){ thisOne.setAttribute("class","signo");
                                }, 100); 
  
    /* if (signCase === 'add' || signCase === 'subtract' || signCase === 'multiply' || signCase === 'div' ){
        if (numSign){
            
            numSign = true;
        }
        
        else{
            numSign = true;
            
        }
    } */
    switch (signCase) {
        case 'add': {
            igual('suma');        
            break;
        }
        case 'subtract': {
            igual('resta');
            break;
        } 
        case 'multiply': {
            igual('multi');
           break;
        }
        case 'div': {
            igual('divi');
            break;
        }
        case 'equal': {
            igual();
        	break;
        } 
		case 'percent': {
            percent();
        	break;
        }
		case 'reset': {
            reset();
        	break;
        }
		case 'erase': {
            erase();
        	break;
        }
			
		case 'addSub': {
            addSub();
       		break;
        }
    }
    
}

function igual(operation) {

    // si no se ha puesto algun numero antes del signo + => acumulado = 0;
    if (valor === " ") {
        acumulado = 0;
    }
    else {

        // valida si es la primer operacion
        if (p_operacion === true) {
            document.getElementById("display").value = parseFloat(valor);
            acumulado = 0;
            
        } else {
            
            if (lastOperation === 'suma') {
                document.getElementById("display").value = acumulado + parseFloat(valor);
            } else if (lastOperation === 'resta') {
                document.getElementById("display").value = acumulado - parseFloat(valor);
            } else if (lastOperation === 'multi') {
                document.getElementById("display").value = acumulado * parseFloat(valor);
            } else if (lastOperation === 'divi') {
                document.getElementById("display").value = acumulado / parseFloat(valor);   
            }
        }
        valor = "";
        lastOperation = operation;
        acumulado = parseFloat(document.getElementById("display").value);
        p_operacion = false;
        signo = true;
    }
    }
function percent() {
    if (lastOperation === 'multi' || lastOperation === 'divi') {
        valor = valor / 100;
        document.getElementById("display").value = valor; 
    } else if (lastOperation === 'suma' ||lastOperation === 'restar') {
        valor = acumulado * valor / 100;  
        document.getElementById("display").value = valor; 
    } else {
        reset();
    }
}
function reset() {
    document.getElementById("display").value = 0;
    valor = " ";
    acumulado = 0;
    math = '';
    p_operacion = true;
    signo = false;

}
function addSub() {
    if (signo) {
        // cambia el sigo del valor acumulado despues del igual o una opereacion
        acumulado = acumulado * -1; 
        document.getElementById("display").value = acumulado;
    } else {
        // Cambia el signo del valor digitado
        valor = valor * -1;  
        document.getElementById("display").value = valor;
    }
}

function erase() {
    valor = (valor.slice(0,((valor.length)-1)));
    if (valor == " "){
        valor = 0
    }
    document.getElementById("display").value = valor;
}
function manejador(elEvento) {
    var evento = elEvento || window.event;
    
    if ((evento.keyCode >=48 && evento.keyCode <=57)||evento.keyCode===46 ) {
        numero = String.fromCharCode(evento.charCode);
        pantalla();
        thisOne = document.querySelector('button[data-number="'+ numero + '"]');
        thisOne.setAttribute("class","strong");
        setTimeout(function(){ thisOne.setAttribute("class","");
    }, 100);
    }
    
    switch (evento.keyCode) {
        case 47: {
            signCase = 'div';
            operationCase(); 
                    
            break;
        }
        case 42: {
            signCase = 'multiply';
            operationCase();            
            break;
        }
        case 45: {
            signCase = 'subtract';
            operationCase();            
            break;
        }
        case 43: {
            signCase = 'add';
            operationCase();            
            break;
        }
        case 13: {
            thisOne = document.querySelector('button[data-sign="equal"]');
            thisOne.setAttribute("class","strong2");
            setTimeout(function(){ thisOne.setAttribute("class","signo");
                                }, 100); 
            igual(); 
            break;
        }
        //c
        case 99: {
            signCase = 'reset';
            operationCase();            
            break;
        }
        case 37: {
            signCase = 'percentage';
            operationCase();            
            break;
            }
        //m menos-mas
        case 109: {
            signCase = 'addSub';
            operationCase();            
            break;
        }
        }
  }
  
  document.onkeypress = manejador;
  document.onkeyup = backKey;
  function backKey(elEvento2) {
    var evento2 = elEvento2 || window.event;
    if (evento2.keyCode === 8) {
        signCase = 'erase';
        operationCase();
    }
  }



  document.querySelectorAll("button[data-number]")
  .forEach(button => button.addEventListener("mouseover", event => getIn(event)));
  function getIn (event){
      event.target.setAttribute("class","color");
  }
  document.querySelectorAll("button[data-number]")
  .forEach(button => button.addEventListener("mouseout", event => getOut(event)));
  function getOut (event){
      event.target.setAttribute("class","");
  }

  
document.querySelectorAll("button[data-sign]")
.forEach(button => button.addEventListener("mouseover", event => getIn2(event)));
function getIn2 (event){
    event.target.setAttribute("class","signo2");
}
document.querySelectorAll("button[data-sign]")
.forEach(button => button.addEventListener("mouseout", event => getOut2(event)));
function getOut2 (event){
    event.target.setAttribute("class","signo");
} 