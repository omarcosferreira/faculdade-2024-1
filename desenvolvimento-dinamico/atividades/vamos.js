var bebida= 'suco de laranja';
var valor;

switch(bebida){
    case 'chá':
    
        valor='5.00';
        console.log('Sua bebida escolhida foi '+ bebida+', e o valor é R$'+ valor+'.')
    break;
    case 'leite':
    
        valor='3.00';
        console.log('Sua bebida escolhida foi '+ bebida+', e o valor é R$'+ valor+'.');
    break;
    case 'café':
    
        valor='4.00';
        console.log('Sua bebida escolhida foi '+ bebida+', e o valor é R$'+ valor+'.');
    break;
    default:
         console.log('Você deve escolher entre café, chá ou leite.');
}


