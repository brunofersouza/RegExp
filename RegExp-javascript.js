// Exemplo1.js
/* O construtor RegExp cria um objeto de expressão regular 
para realizar uma correspondência de texto com um padrão.*/ 

var regExp = /9999-9999/;
var telefone = "9999-9999";
console.log(regExp.test(telefone));

//exemplo2.js
var regExp = /\(48\) 9999-9999/;
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone));

//exemplo3.js
var regExp = /^\(48\) 9999-9999$/;
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone));

//exemplo4.js
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
  
var telefone = "(80) 9876-1234";
console.log(regExp.test(telefone)); // true

//exemplo5.js
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
  
var telefone = "(80) 9876-1234";
console.log(regExp.test(telefone)); // true

//exemplo6.js
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
  
var telefone1 = "(80) 9876-1234";
console.log(regExp.test(telefone1));
var telefone2 = "(80) 99876-1234";
console.log(regExp.test(telefone2));

//exemplo7.js
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
  
var telefone1 = "(80) 98761234";
console.log(regExp.test(telefone1));
var telefone2 = "(80) 9876-1234";
console.log(regExp.test(telefone2));

//exemplo8.js
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
  
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(regExp.test(telefone));

//exemplo9.js
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;
  
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(regExp.test(telefone));

//exemplo10.js
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/;
  
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.match(regExp));

//exemplo11.js
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
  
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.match(regExp));

//exemplo12.js
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
  
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.replace(regExp, "telefone"));

//Número
new Number(value);