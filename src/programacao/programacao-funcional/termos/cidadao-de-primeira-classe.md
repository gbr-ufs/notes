# Cidadão de Primeira Classe

Um elemento numa linguagem de programação é dito ser *de primeira classe* se suportar as operações gerais de uma linguagem, como ser usado como um valor.

A maneira mais simples de explicar isso é com um exemplo. Em C, não podemos usar uma definição de função como uma expressão.

<details>

```c
#include <stdio.h>

int main = int () {
  printf("Hello, World!\n");
}

main();
```

```
bla.c:3:12: error: expected expression before ‘int’
    3 | int main = int () {
      |            ^~~
bla.c:7:1: warning: data definition has no type or storage class
    7 | main();
      | ^~~~
bla.c:7:1: error: type defaults to ‘int’ in declaration of ‘main’ [-Wimplicit-int]
bla.c:7:1: error: ‘main’ redeclared as different kind of symbol
bla.c:3:5: note: previous definition of ‘main’ with type ‘int’
    3 | int main = int () {
      |     ^~~~
```

</details>

Mas em JavaScript, você pode:

<details>

```javascript
const main = function () {
    console.log("Hello, World!");
}

main();
```

`Hello, World!`

</details>
