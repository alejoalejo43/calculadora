document.getElementById("1").addEventListener("click", function(){display(1)});
document.getElementById("2").addEventListener("click", function(){display(2)});
document.getElementById("3").addEventListener("click", function(){display(3)});
document.getElementById("4").addEventListener("click", function(){display(4)});
document.getElementById("5").addEventListener("click", function(){display(5)});
document.getElementById("6").addEventListener("click", function(){display(6)});
document.getElementById("7").addEventListener("click", function(){display(7)});
document.getElementById("8").addEventListener("click", function(){display(8)});
document.getElementById("9").addEventListener("click", function(){display(9)});
function display(numero){
    document.getElementById("display").value = numero;
}