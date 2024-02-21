 var valores = [8,1,7,2,9];
console.log(valores[4]);

console.log('array invertido: '+ valores.reverse());

for (var pos = 0; pos < valores.length; pos++ ){
    console.log('posicao: '+ pos + ' valor: '+ valores[pos]);
}

var carros=[];
carros[0]= 'jeep';
carros[1]= 'honda';
carros[2]= 'ferrari';

var motos = new Array ('honda crf','bmw','lander xtz','meiota 660');


// calcular a media de todos os numeros de uma array]

var soma=0;
for (var pos = 0; pos < valores.length; pos++){
    soma += valores[pos];
}

var media =  soma/valores.length;

console.log(media);

var arr1 = [1,2,4,5,6,7];

console.log(arr1.join('/'));

var retirado = arr1.shift();
console.log(retirado);
console.log(arr1);
console.log('posicao do numero 5: '+ arr1.indexOf(5));
arr1.push(11);
console.log(arr1);
arr1.pop();
console.log(arr1);

var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,3);
console.log(arr2);

arr2.splice(2,1)

var nomes = ['maria', 'joao','lucas','pedro'];
var novos = nomes.splice(1,1, 'luiz');
console.log(nomes);
console.log(novos);

var pais= ['brasil','argentina','colombia'];

pais.unshift('uruguai');
console.log(pais);

var pessoa = ['eduardo','joana', 'wallace','rosana'];
var gerente= ['davi','manuela'];

var pessoas1= pessoa.slice(1,3);

console.log(pessoas1);
console.log(pessoa);

var empresa = pessoa.concat(gerente);

console.log(empresa);


var todosmeses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho','agosto', 'setembro', 'outubro', 'novembro','dezembro'];

var trimestre1 = todosmeses.slice(0,3);
var trimestre2 = todosmeses.slice(3,6);
var trimestre3 = todosmeses.slice(6,9);
var trimestre4 = todosmeses.slice(9,12);
console.log(trimestre1);
console.log(trimestre2);
console.log(trimestre3);
console.log(trimestre4);
console.log(todosmeses);
