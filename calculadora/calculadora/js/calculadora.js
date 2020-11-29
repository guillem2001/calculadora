let numeros = [];
let operadors = [];
operadors.push("");


/* Afegir Digit al número actual*/
function afegirDigit(numero){
  let mostrar = document.getElementById("numero");
  let value = mostrar.value;
  if (value.length < 5) {
      mostrar.value += numero;
  }else{
      alert("El número no pot ser superior a 5 xifres")
  }
}

/*Afegir operadros*/
function afegirOperador(operador){
  let mostrar = document.getElementById("numero");
  if (mostrar.value != "") {
      numeros.push(mostrar.value) ;
      if (operador === 1) {
        operadors.push("+");
      }else if(operador === 2){
        operadors.push("-");
      }else if(operador === 3){
        operadors.push("*");
      }else if(operador === 4){
        operadors.push("/");
      }
  }else{
    alert("No pots introduir 2 operadors seguits");
  }
  mostrar.value="";
}

function ce(){
    let mostrar = document.getElementById("numero");
    mostrar.value = "";
}

function c(){
    let mostrar = document.getElementById("numero");
    mostrar.value = "";
}
