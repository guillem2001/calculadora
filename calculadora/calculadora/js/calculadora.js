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
