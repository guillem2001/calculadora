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

function punt(){
    let mostrar = document.getElementById("numero");
    let value = mostrar.value;
    if(!value.includes(".")){
      mostrar.value += ".";
    }else{
      alert("No pot tenir més de un punt decimal");
    }
}

function esborrarDigit(){
    let mostrar = document.getElementById("numero");
    mostrar.value = mostrar.value.substring(0, mostrar.value.length - 1);
}

function resultat(){
    let mostrar = document.getElementById("numero");
    if (mostrar.value==="") {
      alert("No pots acabar l'operació amb un operador");
    }else if(operadors.length === 1){
      mostrar.value = mostrar.value;
    }else{
      numeros.push(mostrar.value);
      let total = 0;
      let resultat = parseFloat(numeros[0]);
      for(let i = 1; i < numeros.length; i++){
         if(operadors[i]!="" && operadors[i]==="+"){
           total = resultat + parseFloat(numeros[i]);
         }else if(operadors[i]!="" && operadors[i]==="-"){
           total = resultat - parseFloat(numeros[i]);
         }else if(operadors[i]!="" && operadors[i]==="*"){
           total = resultat * parseFloat(numeros[i]);
         }else if(operadors[i]!="" && operadors[i]==="/"){
           total = resultat / parseFloat(numeros[i]);
         }
        resultat = total;
      }
        let entero = Math.trunc(resultat);
        var e = parseFloat(entero - total);
        if(e != 0){
          mostrar.value = resultat.toFixed(3);
          numeros = [];
          operadors = [];
          operadors.push("");
        }else{
          mostrar.value = Math.trunc(resultat);
          numeros = [];
          operadors = [];
          operadors.push("");
        }
    }
}
