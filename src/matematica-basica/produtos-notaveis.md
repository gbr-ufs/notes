# Produtos Notáveis

Expressões algébricas fundamentais. São *notáveis* pela sua importância na matemática.

# Legenda

- \\( \therefore \\) significa *Logo*, *Portanto*

# Propriedades

Nas última igualdades, a propriedade distributiva é aplicada.

## Quadrado

### Quadrado da Soma de Dois Termos

\\[
(x + y)^{2} = (x + y) \cdot (x + y) = x^{2} + 2xy + y^{2}
\\]

### Quadrado da Diferença de Dois Termos

\\[
(x - y)^{2} = (x - y) \cdot (x - y) = x^{2} - 2xy + y^{2}
\\]

## Produto da Soma pela Diferença da Dois Termos

\\[
x^2 - y^{2} = (x + y) \cdot (x - y)
\\]

### Visualização

[Esta](https://youtu.be/9FBQRWRe9ls?si=Im567cxXyGXaC1yx) aula serve como visualização para essas operações.

Basicamente, imagine um quadrado. Nesse quadrado, para cada lado, divida-o—com "o" referindo-se ao lado—em um comprimento \\( x \\) e outro \\( y \\). Essas divisões serão feitas sob a mesma medida em todos os lados. Ao fazer isso, percebe-se que quadrados e retângulos são formados.

- Quadrados: Um do comprimento maior, outro do menor.

- Retângulos: Lados maiores têm o comprimento do maior, lados menores o do menor.

Feitas essas observações, fica claro que a área desse polígono, por ser um quadrado, é nada mais nada menos que \\( (x + y)^{2} \\\).
Como esse quadrado é composto por dois outros menores, fazemos uma igualdade:

\\[
(x + y)^{2} = x^{2} + y^{2}
\\]

Porém, isso está incorreto, pois esquecemos dos dois retângulos—adicionando-os, chegamos à equação:

\\[
(x + y)^{2} = x^{2} + 2xy + y^{2}
\\]

## Cubo

### Cubo da Soma de Dois Termos

\\[
(x + y)^{3} = (x + y) \cdot (x + y) \cdot (x + y) = x^{3} + 3x^{2}y + 3xy^{2} + y^{3}
\\]

### Cubo da Diferença de Dois Termos

\\[
(x - y)^{3} = (x - y) \cdot (x - y) \cdot  (x - y) = x^{3} - 3x^{2}y + 3xy^{2} - y^{3}
\\]

# Exceções

No caso de \\( a = 1 \\), \\( b = 0 \\), essa equivalência é correta:

\\[
(x + y)^{2} = x^{2} + y^{2}
\\]

# Exercícios

## [Produtos Notáveis: Parte 1 - Aula 25](https://www.youtube.com/watch?v=AvNnnTpwLug)

### [Questão 1](https://youtu.be/AvNnnTpwLug?si=oS_DFKOKpG29waSJ&t=508)

Sejam \\( x \\) e \\( y \\) números reais positivos, onde:

- \\( x^{2} + y^{2} = 91 \\)
- \\( x \cdot y = 15 \\)

Encontre o valor de \\( x + y \\).

#### Resolução

<details>
\\[
x^{2} + y^{2} = (x + y)^{2} \therefore
\\]

\\[
(x + y)^{2} = x^{2} + 2xy + y^{2}
\\]

Como a ordem dos fatores não altera o resultado (pelo menos em operações simples como a soma):

\\[
(x + y)^{2} = 91 + 30x + y = \sqrt{121} \therefore
\\]

\\[
x + y = 11
\\]

\\( y \\) e \\( y \\) são números **reais** e **positivos**, então -11 não é um resultado possível.
</details>

### [Questão 2](https://youtu.be/AvNnnTpwLug?si=hDvE9Ao-5TxLvJ3_&t=657)

Sabendo-se que \\( x + \frac{1}{x} = 5 \\), calcule \\(x^{2} + \frac{1}{x^{2}} \\), onde \\( x > 0 \\).

#### Resolução

<details>
\\[
(x + \frac{1}{x})^{2} = x^{2} + 2 \cdot x \\cancel{\cdot \frac{1}{x}} + \left(\frac{1}{x}\right)^{2} \therefore
\\]

\\[
(x + \frac{1}{x})^{2} = x^{2} + 2 + \frac{1}{x^{2}}
\\]

O professor no vídeo recomenda nomear \\( x^{2} + \frac{1}{x} \\) para a equação não ficar "poluída". Farei o mesmo aqui:

\\[
S = x^{2} + \frac{1}{x}
\\]

\\[
5^{2} = S + 2 \therefore
\\]

\\[
S = 25 - 2 = 23
\\]
</details>

## [Produtos Notáveis: Parte 2 - Aula 26](https://www.youtube.com/watch?v=odhFAYUg2Zs)

### [Questão 1](https://youtu.be/odhFAYUg2Zs?si=i-iNDwTN3aY22LEf&t=270)

Sejam \\( a \\) e \\( b \\) números reais, podemos afirmar que \\( a^{2} + b^{2} \geq 2ab \\)?

#### Resolução

<details>
Como uma potência sempre resulta num número positivo (exemplo: \\( -8^{2} = 64 \\)), podemos usar o zero como ponto de partida:

\\[
(a \pm b)^{2} \geq 0
\\]

Como isso é uma desigualdade, podemos passar o \\( 2ab \\) para o outro lado:

\\[
a^{2} + b^{2} \geq 2ab
\\]

Com isso, podemos afirmar que \\( a^{2} + b ^{2} \\) é sim maior ou igual à \\( 2ab \\).
</details>

### [Questão 2](https://youtu.be/odhFAYUg2Zs?si=NdTKaxDmdx04RB4D&t=469)

Considere três números reais \\( a \\), \\( b \\) e \\(c \\), tal que \\(a > b > c\\). Podemos afirmar que \\(a^{2} + b^{2} + c^{2} \geq ab + ac + bc\\)?

#### Resolução

<details>
\\[
(a - b)^{2} \geq 0 \therefore a^{2} - 2ab + b^{2} \geq 0 \therefore a^{2} + b^{2} \geq 2ab
\\]

\\[
(a - c)^{2} \geq 0 \therefore a^{2} - 2ac + c^{2} \geq 0 \therefore a^{2} + c^{2} \geq 2ac
\\]

\\[
(b - c)^{2} \geq 0 \therefore b^{2} - 2bc + c^{2} \geq 0 \therefore b^{2} + c^{2} \geq 2bc
\\]

Como uma igualdade, somando os termos de uma desigualdade, mesmo se somados, continuarão verdadeiros.

Exemplo:

\\[
5 \geq 1
\\]

\\[
7 \geq 2
\\]

\\[
\therefore 12 \geq 3
\\]

Tendo isso em vista, podemos simplesmente pegar as últimas desigualdades, viz. \\( a^{2} + b^{2} \geq 2ab \\), \\( a^{2} + c^{2} \ge q2ac \\), \\(b^{2} + c^{2} \geq 2bc \\), e fazer a comparação:

\\[
2a^{2} + 2b^{2} + 2c^{2} = 2ab + 2ac + 2bc
\\]

Cortando os 2, chegamos ao resultado:

\\[
\\cancel{2}a^{2} + \\cancel{2}b^{2} + \\cancel{2}c^{2} = \\cancel{2}ab + \\cancel{2}ac + \\cancel{2}bc = a^{2} + b^{2} + c^{2} \geq ab + ac + bc
\\]

Com isso, podemos afirmar que \\( a^{2} + b^{2} + c^{2} \\) é sim maior que \\( ab + ac + bc \\).
</details>

## [Produtos Notáveis: Parte 3](https://www.youtube.com/watch?v=9FBQRWRe9ls)

### [Questão 1](https://youtu.be/9FBQRWRe9ls?si=fIzpUXmnSVcqwtA3&t=294)

Sejam \\( x \\), \\( y \\) e \\( z \\) números positivos, onde \\( x^{2} + y^{2} + z^{2} = 38 \\) e \\( xy + xz + yz = 31 \\), calcule o valor de \\( x + y + z \\).

#### Resolução

<details>
O professor deu uma boa sugestão, para dividir em termos quando tiver três termos (com \\( x + y \\) sendo o "primeiro termo"):

\\[
(x + y + z)^{2} = [(x + y) + z]^{2}
\\]

\\[
(x + y)^{2} + 2 \cdot (x + y) \cdot z + z^{2} = x^{2} + 2xy + y^{2} + 2xz + 2yz + z^{2}
\\]

Arrumando a ordem, fica fácil de substituir:

\\[
(x + y + z)^{2} = x^{2} + y^{2} + z^{2} + 2xy + 2yz + 2xz
\\]

\\[
(x + y + z)^{2} = 38 + 31 \cdot 2
\\]

\\[
(x + y + z)^{2} = 100 \therefore
\\]

\\[
x + y + z = \sqrt{100}
\\]

\\[
x + y + z = 10
\\]
</details>

### [Questão 2](https://youtu.be/9FBQRWRe9ls?si=wevTLThkWqqA8KBE&t=615)

Sabendo-se das seguintes afirmações:

- \\( x \\) e \\( y \\) são números reais
- \\( x \cdot y = 9 \\)
- \\( x + y = 6 \\)

Calcule o valor de \\( \frac{x}{y} + \frac{y}{x} + 2 \\).

#### Resolução

<details>
Para igualar os denominadores, o professor multiplica os numeradores pelos denominadores:

\\[
\frac{x}{y} + \frac{y}{x} + 2 = \frac{x^{2}}{xy} + \frac{y^{2}}{xy} + \frac{2xy}{xy}
\\]

A primeira fração foi multiplicada por \\( x \\), a segunda por \\( y \\) e a última por \\( xy \\) para igular.

Já sabmos o valor de \\( x \cdot y \\), é 9—podemos juntar tudo:

\\[
\frac{x^{2} + 2xy + y^{2}}{9} = \frac{(x + y)^{2}}{9}
\\]

E também sabemos que \\( x + y = 6 \\), logo chegamos ao resultado:

\\[
6^{2} = 36 \therefore
\\]

\\[
\frac{(x + y)^{2}}{9} = \frac{36}{9} = 4
\\]
</details>

## [Produtos Notáveis: Parte 4 - Aula 28](https://www.youtube.com/watch?v=waX7T66U8R4)

### [Questão 1](https://youtu.be/waX7T66U8R4?si=GuA1-n0CnqWxRSE3&t=262)

Calcule o valor de \\( 0,651^{2} - 0,349^{2} \\).

#### Resolução

<details>
\\[
0,0651^{2} - 0,349^{2} = (0,651 + 0,349) \cdot (0,651 - 0,349) \therefore
\\]

\\[
0,651^{2} - 0,349^{2} = 1 \cdot 0,302
\\]
</details>

### [Questão 2](https://youtu.be/waX7T66U8R4?si=rW7MG5yqhl0D9mez&t=481)

Desenvolva e reduza os termos semelhantes:

\\[
(x + y)^{2} + (x + y) \cdot (x - y)
\\]

#### Resolução

<details>
\\[
(x + y)^{2} + (x + y) \cdot (x - y)
\\]

O quadrado do primeiro, mais duas vezes o primeiro vezes o segundo, mais o quadrado do segundo:

\\[
x^{2} + 2xy + y^{2} + (x + y) \cdot (x - y)
\\]

\\[
x^{2} - y^{2} = (x + y) \cdot (x - y) \therefore
\\]

\\[
x^{2} + 2xy + y^{2} + (x + y) \cdot (x - y) = x^{2} + 2xy + y^{2} + x^{2} - y^{2}
\\]

Cancelando:

\\[
x^{2} + 2xy \\cancel{+ y^{2}} + x^{2} \\cancel{- y^{2}} = 2x^{2} 2xy
\\]
</details>

### [Questão 3](https://youtu.be/waX7T66U8R4?si=ioggq48dt7g1sRb_&t=568)

Sabendo-se as seguintes afirmações:

- \\( 9x + 5y = 1 \\)
- \\( 9x - 5y = 3 \\)

Calcule o valor de \\( \frac{2^{81x^{2}}}{2^{25y^{2}}} \\).

#### Resolução

<details>
\\[
\frac{2^{81x^{2}}}{2^{25y^{2}}} = 2^{81x^{2} - 25y^{2}}
\\]

\\[
x^{2} - y^{2} = (x + y) \cdot (x - y) \therefore
\\]

\\[
2^{81x^{2} - 25y^{2}} = 2^{1 \cdot 3} = 8
\\]
</details>

## [Produtos Notáveis: Parte 5 - Aula 29](https://www.youtube.com/watch?v=WGLefHEIByI)

### [Questão 1](https://youtu.be/WGLefHEIByI?si=DG8H6Rj7Pyeg4YgY&t=264)

Desenvolva \\( (x + 2)^{3} \\).

#### Resolução

<details>
\\[
(x + 2)^{3} = x^{3} + 3 \cdot x^{2} \cdot 2 + 3 \cdot x \cdot 2^{2} + 2^{3} = x^{3} + 6x^{2} + 12x + 8
\\]
</details>

### [Questão 2](https://youtu.be/WGLefHEIByI?si=PsqzKc92c4nlc-YB&t=404)

Seja \\( x > 0 \\), onde \\( x + \frac{1}{x} = 4 \\), calcule o valor de \\( x^{3} + \frac{1}{x^{3}} \\).

#### Resolução

<details>
\\[
\left(x^{3} + \frac{1}{x}\right)^{3} = x^{3} + 3x^{2} \cdot \frac{1}{x} + 3x \cdot \frac{1}{x^{2}} + \frac{1}{x^{3}}
\\]

Dá pra cancelar uns x:

\\[
\left(x^{3} + \frac{1}{x}\right)^{3} = x^{3} + 3\\cancel{x^{2}} \cdot \frac{1}{\\cancel{x}} + 3\\cancel{x} \cdot \frac{1}{\\cancel{x^{2}}} + \frac{1}{x^{3}} \therefore
\\]

\\[
\left(x^{3} + \frac{1}{x}\right)^{3} = x^{3} + \frac{1}{x^{3}} + 3x + \frac{3}{x}
\\]

Substituindo o valor:

\\[
4^{3} = x^{3} + \frac{1}{x^{3}} + 3x + \frac{3}{x}
\\]

Observamos que \\( 3x + \frac{3}{x} \\) é simplesmente o triplo de \\( x + \frac{1}{x} = 4 \\), então adicionamos o valor:

\\[
4^{3} = x^{3} + \frac{1}{x^{3}} + 12 \therefore
\\]

\\[
x^{3} + \frac{1}{x^{3}} = 64 - 12 = 52
\\]
</details>

### [Questão 3](https://youtu.be/WGLefHEIByI?si=yp1IywROl--g5s1B&t=591)

Seja \\( x + y + z = 0 \\), demonstre que \\( x^{3} + y^{3} + z^{3} = 3xyz \\).

#### Resolução

<details>
\\[
x + y + z = 0 \therefore
\\]

\\[
x + y = -z
\\]

\\[
(x + y)^{3} = (-z)^{3} \therefore
\\]

\\[
x^{3} + 3x^{2}y + 3x^{2} + y^{3} = -z^{3} \therefore
\\]

\\[
x^{3} + y^{3} + z^{3} + 3x^{2}y + 3xy^{2} = 0
\\]

Como \\( x + y = -z \\), podemos aplicar a distributiva para chegar ao valor de \\(3x^{2}y + 2xy^{2} \\):

\\[
3x^{2}y + 3xy^{2} = 3xy \cdot (x + y) = 3xy \cdot (-z) \therefore
\\]

\\[
3x^{2}y + 3xy^{2} = -3xyz
\\]

\\[
x^{3} + y^{3} + z^{3} - 3xyz = 0 \therefore
\\]

\\[
x^{3} + y^{3} + z^{3} - 3xyz = 0
\\]
</details>

## [Produtos Notáveis Parte 1 - Aula 30](https://www.youtube.com/watch?v=o5kepLCKAdA)

### [Questão 1](https://youtu.be/o5kepLCKAdA?si=PUviBuMGHdmu6ujQ&t=20)

(35ª OBM/1ª Fase)

Na adição de temos iguais, \\( 2013^{2013} + 2013^{2013} + 2013^{2013} + ... + 2013^{2013} = 2013^{2014} \\), escrita de forma simplificada, foram escritos muitos sinais de adição (+). Quantos sinais foram escritos?

a) 1006
b) 2009
c) 2012
d) 2014
e) 4026

#### Resolução

Para simplificar, podemos deixar a igualdade com o mesmo expoente:

<details>
\\[
2013^{2014} = 2013 \cdot 2013^{2013}
\\]

Com isso, também notamos que, para o resultado ser 2014 nessa forma, 2013 parcelas são necessárias. Como o primeiro número não usa sinal, 2012 sinais foram escritos.

Alternativa C.
</details>

### [Questão 2](https://youtu.be/o5kepLCKAdA?si=HmW28cobOfabEea1&t=256)

(35ª OBM/2ª Fase [Adaptada])

Sendo \\( x \\) e \\( y \\) números reais, os quais as seguintes afirmações se aplicam:

- \\(x^{3} + y^{3} = 5 \cdot (x + y) \\)
- \\( x^{2} + y^{2} = 4 \\)
- \\( x + y \neq 0 \\)

Determine o valor de \\( x \cdot y \\).

a) 4
b) 3
c) 1
d) 0
e) -1

#### Resolução

<details>
Para a primeira afirmação, aplicando as propriedades:

\\[
(x + y) \cdot (x^{2} - xy + y^{2})
\\]

\\[
x^{3} \\cancel{- x^{2}y} \\cancel{+ xy^{2}} \\cancel{+ x^{2}y} \\cancel{- xy^{2}} + y^{3}
\\]

\\[
x^{3} + y^{3} = (x + y) \cdot (x^{2} - xy + y ^{2})
\\]

\\[
x^{3} - y^{3} = (x + y) \cdot (x^{2} + xy + y ^{2})
\\]

Usando a primeira afirmação:

\\[
x^{3} + y^{3} = 5 \cdot (x + y) \therefore
\\]

\\[
(x + y) \cdot (x^{2} - xy + y^{2}) = 5 \cdot (x + y)
\\]

Pelos números serem diferentes de zero, podemos cancelar:

\\[
\\cancel{(x + y) \cdot} (x^{2} - xy + y^{2}) = 5 \\cancel{\cdot (x + y)}
\\]

Usando a segunda afirmação:

\\[
4 - xy = 5 \therefore
\\]

\\[
xy = 1
\\]

Alternativa C.
</details>

## [Resolução de exercícios: Produtos Notáveis Parte 2 - Aula 31](https://youtu.be/LcTnn4GPjbk?si=1y9bUwcRG69CHnmv)

### [Questão 1](https://youtu.be/LcTnn4GPjbk?si=1y9bUwcRG69CHnmv&t=15)

(35ª OBM)

Determine \\( x + y \\), onde \\(x \\) e \\( y \\) são reais, sabendo que \\( x^{3} + y^{3} = 9 \\) e \\( x^{2}y + xy^{2} = 6 \\).

a) 1
b) 2
c) 3
d) 4
e) 5

#### Resolução

<details>
\\[
(x + y)^{3} = x^{3} + 3x^{2}y + 3xy^{2} + y^{3}
\\]

\\[
(x + y)^{3} = x^{3} + y^{3} + 3x^{2}y + 3xy^{2}
\\]

Usando dos valores disponibilizados:

\\[
(x + y)^{3} = 9 + 18 \therefore
\\]

\\[
x + y = \sqrt[3]{27} = 3
\\]

Alternativa C.
</details>

### [Questão 2](https://youtu.be/LcTnn4GPjbk?si=W8bdBjrWHUxW3419&t=251)

Um possível valor de \\( ^{n} \\) para que \\( 2^{20} + 2^{26} + 2^{n} \\) seja um quadrado perfeito, é:

a) 10
b) 15
c) 30
d) 20
e) 12

#### Resolução

<details>
\\[
20^{20} + 2^{26} + 2^{n} = (2^{10})^{2} + 2 \cdot (2^{10}) \cdot 2^{15} + 2^{n}
\\]

\\[
20^{20} + 2^{26} + 2^{30} = (2^{10})^{2} + 2 \cdot 2^{10} \cdot 2^{15} + (2^{15})^{2} = (2^{10} + 2^{15})^{2}
\\]
</details>

Um possível valor é \\( n = 30 \\).

### [Questão 3](https://youtu.be/LcTnn4GPjbk?si=rYVNvFaDiEIZ6FZ1&t=571)

A diferença dos quadrados de dois números naturais consecutivos sempre resulta num número ímpar?

#### Resolução

<details>
\\[
(n + 1)^{2} - n^{2} = n^{2} + 2n + 1 - n^{2}
\\]

Cancelando:

\\[
(n + 1)^{2} - n^{2} = \\cancel{n^{2} +} 2n + 1 \\cancel{- n^{2}} = 2n + 1
\\]

Com isso, chegamos na conclusão que sim, sempre resultará num número ímpar.
</details>

## [Resolução de exercícios: OBM (Olimpíada Brasileira de Matemática) - Aula 32](https://www.youtube.com/watch?v=17bj5G15ZVw)

### [Questão 1](https://youtu.be/17bj5G15ZVw?si=dOvebcR_gx2SDToK&t=27)

(34ª OBM)

Sendo \\(a \\), \\( b \\) e \\( c \\) reais, tais que:

- \\( ab \cdot (a + b + c) = 1001 \\)
- \\( bc \cdot (a + b + c) = 2002 \\)
- \\( ca \cdot (a + b + c) = 3003 \\)

Encontre \\( abc \\).

#### Resolução

<details>
Podemos multiplicar as equações pelos termos que estão faltando para chegar à uma equação que contenha \\( abc \\):

\\[
ab \cdot (a + b + c) = 1001 \therefore
\\]

\\[
abc \cdot (a + b + c) = 1001c
\\]

\\[
bc \cdot (a + b + c) = 2002 \therefore
\\]

\\[
abc \cdot (a + b + c) = 1001a
\\]

\\[
ca \cdot (a + b + c) = 3003 \therefore
\\]

\\[
abc \cdot (a + b + c) = 3003b
\\]

Como a intenção é cancelar os números à direita da igualdade, podemos os decompor até 1001:

\\[
abc \cdot (a + b + c) = 2002a \therefore
\\]

\\[
abc \cdot (a + b + c) = 2 \cdot 1001 \cdot a
\\]

\\[
abc \cdot (a + b + c) = 3003b \therefore
\\]

\\[
abc \cdot (a + b + c) = 3 \cdot 1001 \cdot b
\\]

E aí pra tudo ficar 1001 mesmo, basta passar os números que estão multiplicando para o outro lado, dividindo:

\\[
abc \cdot (a + b + c) = 2 \cdot 1001 \cdot a \therefore
\\]

\\[
\frac{abc \cdot (a + b + c)}{2} = 1001a
\\]

\\[
abc \cdot (a + b + c) = 3 \cdot 1001 \cdot b \therefore
\\]

\\[
\frac{abc \cdot (a + b + c)}{3} = 1001b
\\]

Agora, devemos somar as expressões. Devido às propriedades das frações, é necessário fazer o MMC:

\\[
abc \cdot (a + b + c) + \frac{abc \cdot (a + b + c)}{2} + \frac{abc \cdot (a + b + c)}{3} = \frac{(6abc + 3abc + 2abc) \cdot (a + b + c)}{6}
\\]

\\[
\frac{(6abc + 3abc + 2abc) \cdot (a + b + c)}{6} = \frac{11abc \cdot (a + b + c)}{6}
\\]

E, com o outro lado da igualdade:

\\[
1001a + 1001b + 1001c = 1001 \cdot (a + b + c)
\\]

Com isso, podemos cancelar:

\\[
\frac{11abc \cancel{\cdot (a + b + c)}}{6} = 1001 \cancel{\cdot (a + b + c)} = \frac{11abc}{6} = 1001
\\]

\\[
abc = \frac{6 \cdot 1001}{11} = abc = 6 \cdot 91 \therefore
abc = 546
\\]
</details>

## [Resolução de exercícios: Produtos Notáveis Parte 3 - Aula 33](https://www.youtube.com/watch?v=WYYhEngzs_M)

### [Questão 1](https://youtu.be/WYYhEngzs_M?si=t-cLbBjBuSB8K_xL&t=224)

Considere \\( A = 1 \\) e \\( B = 1 \\) e analize a seguinte sequência:

1. \\( A^{2} - B^{2} = A - B \\)
2. \\( (A + b) \cdot (A - B) = A - B \\)
3. \\( \frac{(A + B) \cancel{\cdot (A - B)}}{\cancel{A - B}} = \cancel{\frac{A - B}{A - B}} \\)
4. \\( A + B = 1 \\)
5. \\( 1 + 1 \neq 1 \\)

Qual parte contribuiu para a desigualdade no final?

#### Resolução

<details>
O erro está na terceira parte. Não podemos simplificar uma indeterminação—nesse caso, \\( \frac{A - B}{A - B} \\) (que é igual à \\( \frac{0}{0} \\)).
</details>

### [Questão 2](https://youtu.be/WYYhEngzs_M?si=S2-UbR98hdAkhAsj&t=433)

Considere quatro números reais \\( a \\), \\( b \\), \\( c \\) e \\( d \\).

Mostre que se \\( (a + b)^{2} + (b + c)^{2} + (c + d)^{2} = 4 \cdot (ab + bc + cd) \\),, então \\( a = b = c = d\\).

#### Resolução

<details>
\\[
a^{2} + 2ab + b^{2} + b^{2} + 2bc + c^{2} + c^{2} + 2cd + d^{2} = 4ab + 4bc + 4cd
\\]

\\[
(a^{2} + 2ab - 4ab + b^{2}) + (b^{2} + 2bc - 4bc + c^{2}) + (c^{2} + 2cd - 4cd + d^{2}) = 0
\\]

\\[
(a^{2} - 2ab + b^{2}) + (b^{2} - 2bc + c^{2}) + (c^{2} - 2cd + d^{2}) = 0
\\]

\\[
(a - b)^{2} + (b - c)^{2} + (c - d)^{2} = 0
\\]

Por serem potências, os valores são positivos ou zero. Como não dá para chegar num valor positivo, todos são zero:

| Igualdade com Zero | Resultado     |
| ------------------ | ------------- |
| \\( a - b = 0 \\)  | \\( a = b \\) |
| \\( b - c = 0 \\)  | \\( b = c \\) |
| \\( c - d = 0 \\)  | \\( c = d \\) |
</details>

## [Resolução de exercícios: Produtos Notáveis Parte 4 - Aula 34](https://www.youtube.com/watch?v=_07JhoPhAQk)

### [Questão 1](https://youtu.be/_07JhoPhAQk?si=SvAI-WzNBD7iINnv&t=47)

Sabendo-se que \\( a^{2} + b^{2} + c^{2} = 1 \\), onde \\( a \\), \\( b \\) e \\(c \\) são números reais, demonstre que \\( -\frac{1}{2} \leq ab + ac + bc \leq 1 \\).

#### Resolução

<details>
\\[
(a - b)^{2} \geq 0 \therefore
\\]

\\[
a^{2} - 2ab + b^{2} \geq 0 \therefore
\\]

\\[
a^{2} + b^{2} \geq 2ab
\\]

\\[
(b - c)^{2} \geq 0 \therefore
\\]

\\[
b^{2} + c^{2} \geq 2bc
\\]

\\[
(a - c)^{2} \geq 0 \therefore
\\]

\\[
a^{2} + c^{2} \geq 2ac
\\]

Somando as expressões:

\\[
2a^{2} + 2b^{2} + 2c^{2} = 2ab + 2bc + 2ac
\\]

Simplificando por 2:

\\[
a^{2} + b^{2} + c^{2} \geq ab + bc +ac
\\]

Como \\( a^{2} + b^{2} + c^{2} = 1 \\), a primeira parte está completa:

\\( 1 \geq ab + bc + ac \\) ou \\( ab + bc + ac \leq 1 \\).

Agora, a segunda parte:

\\[
(a + b + c)^{2} \geq 0 \therefore
\\]

\\[
a^{2} + b^{2} + c^{2} + 2ab + 2bc + 2ac \geq 0
\\]

\\[
1 + 2ab + 2bc + 2ac \geq 0 \therefore
\\]

\\[
2ab + 2bc + 2ac \geq -1
\\]

Dá para dividir tudo por 2 para igualar, chegando à segunda parte:

\\[
\\cancel{2}ab + \\cancel{2}bc + \\cancel{2}ac \geq \frac{-1}{2}
\\]

Juntando as duas:

\\[
-\frac{1}{2} \leq ab + bc \leq 1
\\]
</details>

## [Resolução de exercícios: Produtos Notáveis Parte 5 - Aula 35](https://www.youtube.com/watch?v=yZTdnkP8ZtU)

### [Questão 1](https://youtu.be/yZTdnkP8ZtU?si=LxyiEd7_aKhUrV0i&t=41)

Demonstre a igualdade \\( (a^{2} + b^{2}) \cdot (c^{2} + d^{2}) = (ad - bc)^{2} + (ac + bd)^{2} \\).

#### Resolução

<details>
\\[
a^{2} c^{2} + a^{2} d^{2} + b^{2} c^{2} + b^{2} d^{2} = (a^{2} d^{2} - 2adbc + b^{2} c^{2}) + (a^{2} c^{2} + 2adbc + b^{2} d^{2})
\\]

\\[
(a^{2} c^{2} + 2adbc + b^{2} d^{2}) = (ad - bc)^{2} + (ac + bd)^{2}
\\]
</details>

### [Questão 2](https://youtu.be/yZTdnkP8ZtU?si=ziqT4KMI4WWwI_wU&t=316)

O produto de 4 números positivos consecutivos somado a uma unidade é um quadrado perfeito?

#### Resolução

<details>
\\[
n \cdot (n + 1) \cdot (n + 2) \cdot (n + 3) + 1
\\]

Podemos multiplicar os extremos entre si:

\\[
n \cdot (n + 3) = n^{2} + 3n
\\]

E os que estavam no meio também:

\\[
(n + 1) \cdot (n + 2) = n^{2} + 2n + n + 2
\\]

Então, podemos aplicar a propriedade distributiva com \(n^{2} + 3n\) como se fosse um único elemento:

\\[
(n^{2} + 3n)^{2} + 2 \cdot (n^{2} + 3n) \cdot 1 + 1 = (n^{2} + 3n + 1)^{2}
\\]
</details>

## Plataforma Base

### Questão 1

Simplificando a expressão \\( (x + 10)^{2} - x \cdot (x + 20) \\), encontraremos:

a) 80
b) 75
c) 100
d) 50
e) 120

#### Resolução

<details>
\\[
(x + 10)^{2} = x^{2} + 2 \cdot x \cdot 10 + 10^{2}
\\]

\\[
\\cancel{x^{2} \cdot 2 \cdot x \cdot 10} + 10^{2} \\cancel{- x^{2} - 20x} = 100
\\]

Alternativa C.
</details>

### Questão 2

Realizando a simplificação da expressão algébrica \\( \frac{(2x - 10) \cdot (2x + 10)}{x^{2} - 25 \\), encontraremos:

a) x - 5
b) 2
c) 2x - 5
d) 4
e) \\( 2x^{2} + 5 \\)

#### Resolução

<details>
\\[
x^{2} - 25 = x^{2} - 5^{2} = (x + 5) \cdot (x - 5)
\\]

Colocando em evidência o 2 no numerador:

\\[
\frac{2 \cdot \\cancel{(x - 5) \cdot} 2 \\cancel{\cdot (x + 5)}}{\\cancel{(x + 5) \cdot (x - 5)}} = 2 \cdot 2 = 4
\\]

Alternativa D.
</details>

### Questão 3

Simplificando a expressão \\( (2x - 5) \cdot (2x + 5) - (2x - 5)^{2} \\), encontramos:

a) \\( 8x^{2} - 20x - 50 \\)
b) 20x - 50
c) 20x
d) 50
e) 2x - 25

#### Resolução

<details>
Colocando o \\( (2x - 5) \\) em evidência:

\\[
(2x - 5) \cdot ((2x + 5) - 2x - 5))
\\]

\\[
(2x - 5) \cdot (\\cancel{2x} + 5 \\cancel{- 2x} + 5) = 10 \cdot (2x - 5) = 20x - 50
\\]

Alternativa B.
</details>

### Questão 4

Sabe-se que \\( x^{2} + y^{2} = 20 \\) e \\( xy = 3 \\). Qual o valor de \\( (x + y)^{2} \\)?

a) 26
b) \\( 20^{2} \\)
c) 60
d) \\( 23^{2} \\)
e) 23

#### Resolução

<details>
A ordem dos fatores não altera o resultado:

\\[
(x + y)^{2} = x^{2} + y^{2} + 2xy \therefore
\\]

\\[
(x + y)^{2} = 20 + 2 \cdot 3 \therefore
\\]

\\[
(x + y)^{2} = 26
\\]

Alternativa A.
</details>

### Questão 5

A diferença entre o quadrado da soma e o quadrado da diferença entre dois números rais é igual a:

a) Ao quádruplo do produto dos números.
b) A soma dos quadrados dos dois números.
c) A diferença dos quadrados dos dois números.
d) Ao dobro do produto dos números.
e) A diferença dos dois números.

#### Resolução

<details>
\\[
(a + b)^{2} - (a - b)^{2} = (a^{2} + 2ab + b^{2}) - (a^{2} - 2ab + b^{2})
\\]

Removendo os parênteses (tem que converter os sinais de todos à direita!):

\\[
\\cancel{a^{2}} + 2ab \\cancel{+ b^{2} - a^{2}} + 2ab \\cancel{b^{2}} = 2ab + 2ab = 4ab
\\]

Alternativa A.
</details>

### Questão 6

Assinale a forma simplificada da expressão:

\\[
\frac{y^{2} - x^{2}}{x^{2} y^{2}} \cdot \frac{xy}{y + x} \cdot \frac{xy}{x - y}
\\]

a) 1
b) -1
c) \\( \frac{(y - x)^{2}}{x^{2} - y^{2}} \\)
d) \\( x^{2} - y^{2} \\)
e) \\( y^{2} - x^{2} \\)

#### Resolução

<details>
\\[
y^{2} - x^{2} = (y - x) \cdot (y + x) \therefore
\\]

\\[
\frac{y^{2} - x^{2}}{x^{2} y^{2}} \cdot \frac{xy}{y + x} \cdot \frac{xy}{x - y} = \frac{(y - x) \cdot \\cancel{(y + x)}}{\\cancel{(xy)} \\cancel{(xy)}} \cdot \frac{\cancel{xy}}{\cancel{y + x}} \cdot \frac{\cancel{xy}}{x - y} = \frac{(y - x)}{x - y}
\\]

Quando chegou nessa parte não entendi, mas segundo a correção você deve negativar:

\\[
\frac{- \\cancel{(x - y)}}{\\cancel{x - y}} = -1
\\]

Alternativa B.
</details>

### Questão 7

Sabendo-se que:

- \\( a + b = 6 \\)
- \\( a \cdot b = 4 \\)

Quanto vale \\( a^{2} + b^{2} \\)?

a) 28
b) 16
c) 10
d) 32
e) 36

#### Resolução

<details>
\\[
a + b = 6 \therefore
\\]

\\[
(a + b)^{2} = 6^{2}
\\]

\\[
6^{2} = a^{2} + b^{2} + 2ab \therefore
\\]

\\[
a^{2} + b^{2} + 8 = 36 \therefore
\\]

\\[
a^{2} + b^{2} = 36 - 8
\\]

\\[
36 - 8 = 28 \therefore
\\]

\\[
a^{2} + b^{2} = 28
\\]

Alternativa A.
</details>

### Questão 8

Assinale a alternativa que representa a forma mais simples da expressão:

\\[
\frac{2x \cdot (x + 4) \cdot (x - 4)}{x^{2} - 16}
\\]

a) 3
b) 2x - 8
c) \\( x^{2} - 16 \\)
d) 2x + 8
e) 2

#### Resolução

<details>
\\[
(x + 4) \cdot (x - 4) = x^{2} - 4^{2} \therefore
\\]

\\[
\frac{2x \cdot (x + 4) \cdot (x - 4)}{x^{2} - 16} = \frac{2 \cdot \\cancel{x^{2} - 4^{2}}}{\\cancel{x^{2} - 16}}
\\]

Alternativa E.
</details>

### Questão 9

O produto de \\( ( \sqrt{4} + \sqrt{5}) \cdot (\sqrt{4} - \sqrt{5}) \\) é:

a) 1
b) 4
c) -1
d) -20
e) 20

#### Resolução

<details>
\\[
(\sqrt{4} + \sqrt{5}) \cdot (\sqrt{4} - \sqrt{5} = \sqrt{4}^{2} - \sqrt{5}^{2}
\\]

Cancelando:

\\[
\\cancel{\sqrt{4}^{2}} - \\cancel{\sqrt{5}^{2}} = 4 - 5 = -1
\\]

Alternativa C.
</details>

### Questão 10

Qual é o resultado, na forma mais simples, da operação \\( \frac{4x^{2}}{1 - x^{2}} - \frac{1 - x}{1 + x} + \frac{1 + x}{1 - x} \\):

a) \\( \frac{4x^{2}}{(1 - x)} \\)
b) \\( \frac{4x}{(1 - x)} \\)
c) \\( \frac{4}{(1 - x)} \\)
d) \\( \frac{4x +1}{(1 + x)} \\)
e) \\( \frac{4 \cdot (x + 1)}{(1 - x)} \\)

#### Resolução

<details>
\\[
\frac{4\\cancel{x^{2}}}{1 \\cancel{- x^{2}}} - \frac{1 \\cancel{- x}}{1 \\cancel{+ x}} = 4 - 1 + 1 = 4
\\]

\\[
\frac{4\\cancel{x}}{1 \\cancel{- x}} = 4
\\]
</details>

Alternativa B.

# Referências Bibliográficas

GOUVEIA, Rosimar. Produtos Notáveis. *Em*: Toda Matéria. Disponível em: <https://www.todamateria.com.br/produtos-notaveis/>. Acesso em: 7 mai. 2025.
