const rdline = require('readline-sync');
const nome=rdline.question('qual seu primeiro nome?');
const sobrenome=rdline.question('e qual seria o seu sobrenome?');
const nomecompleto=`${nome} ${sobrenome}`;
console.log('seu nome e ',nomecompleto);