var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var resultados = numeros.filter(item => item %2 == 0);
console.log(resultados);

var numerosfiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);
console.log(numerosfiltrados);
function buscarvalores(valor){
    return valor < 5;
}
var numerosencontrados = numeros.filter(buscarvalores);
console.log(numerosencontrados);

var r1 = numeros.filter((valor) =>{
    return valor > 5;
});
console.log(r1);

var r2 = numeros.filter(valor => valor > 5);
console.log(r2);

var funcionarios = [
    {nome: 'luiz', idade: 62},
    {nome: 'davi', idade: 22},
    {nome: 'arthur', idade: 18},
    {nome: 'lucas', idade: 40},
]

var pessoaslistagem = funcionarios.filter(
    function(valor){ 
        return valor.nome.length < 5
    });
    console.log(pessoaslistagem);

var produtos = [
    {id: 1, descricao: 'smartphone', categoria: 'eletronico'},
    {id: 2, descricao: 'notebook', categoria: 'eletronico'},
    {id: 3, descricao: 'geladeira', categoria: 'eletrodomestico'}
] 
var eletronico1 = produtos.filter(
    function (valor) {
        return valor.categoria.length = eletronico
    } )  
console.log(eletronico1);