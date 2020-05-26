# RegExp

O construtor RegExp cria um objeto de expressão regular para realizar uma correspondência de texto com um padrão.

Descrição
Há dois modos de criar um objeto RegExp: uma notação literal e um construtor. Para indicar strings, os parâmetros para a notação literal não usam aspas, enquanto os parâmetros para a função do construtor usam. Então, as seguintes expressões criam a mesma expressão regular:

/ab+c/i;
new RegExp('ab+c', 'i');

Quando se usa a função construtora, as regras de escapar em uma string (preceder caracteres especiais com \ quando incluídos na string) são necessárias. Por exemplo, as declarações a seguir são equivalentes:

var re = /\w+/;
var re = new RegExp('\\w+');
