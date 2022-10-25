// compilado de código para executar a funçao quando o button for acionado
function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value; // pegar o valor que virá dentro do Id do input
    var valorEmDolarNumerico = parseFloat(valor); //conversão do dado em número
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido"); //elemento aonde irá aparecer o resultado
    var valorConvertido = "O resultado em rel é R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  //colocar dentro do html o valor do código
  //valor do valor do dolar * valor da cotação
  //<div id="valorConvertido"></div> alterar o valor com código da funçã
  