let bebida = "chá";
let valor;


switch (bebida){

    case "Chá":
    console.log("Chá");
    valor = 5,0;
    break;


    case "Café":
    console.log("Café");
    valor = 3.0;
    break;


    case "Leite":
    console.log("Leite");
    valor = 5.7;
    break;


  

    default:
    console.log("Escolha entre café, leite ou chá")
}
if (valor){
    console.log( 'A bebida escolhida foi '+bebida+ 'e o valor é  R$'+valor)
}