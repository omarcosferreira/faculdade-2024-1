var bebida;

var valor;

switch (bebida) {
  case "café":
    valor = 4.00;
    break;

  case "leite":
    valor = 3.00;
    break;

  case "chá":
    valor = 3.50;
    break;

  default:
alert("Opção inválida. Escolha entre café, leite ou chá.");
    return;
}

alert("Você escolheu " + bebida + ". O valor a ser pago é R$ " + valor.toFixed(2));