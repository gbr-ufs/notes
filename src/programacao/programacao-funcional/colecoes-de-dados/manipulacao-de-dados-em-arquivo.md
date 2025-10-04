# Manipulação de dados em arquivo

## Modo síncrono

Neste modo, o arquivo é acessado e o programa interrompe seu processamento enquanto os dados estão sendo lidos.

Para leitura síncrona, JavaScript disponibiliza a função `readFileSync`. Essa função possui o caminho do arquivo como parâmetro de entrada e retorna seu conteúdo.

### Exemplo

Programa que lê o conteúdo de um arquivo de texto, exibe esse conteúdo no terminal e A SEGUIR, realiza a próxima operação programada.

```javascript
// Bibliotecas Node para ler arquivos.
const fs = require('fs')
const path = require('path')

// Especifica o nome do arquivo.
const caminho = path.join(__dirname, 'dados.txt')

// Fica esperando a leitura do arquivo para avançar o código.
console.log('=== INICIO da leitura do arquivo...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('=== FIM da leitura.\n')

console.log('=== INICIO de uma outra operação qualquer...')
const exec = (fn, a, b) => fn(a, b)
const somarNoTerminal = (x, y) => console.log(`Resultado: ${x + y}.`)
exec(somarNoTerminal, 56, 38)
console.log('=== FIM da outra operação.\n')
```

## Modo assíncrono

Executa sem travar a execução de outras funções. Executa depois do arquivo ter sido completamente lido.

Para leitura assíncrona, JavaScript disponibiliza a função `readFile`. Além do caminho do arquivo, essa função exige um segundo parâmetro de entrada: uma função responsável por realizar o processamento desejado assim que o conteúdo do arquivo tiver sido completamente lido, uma função de **callback**.

### Exemplo

Programa que lê o conteúdo de um arquivo de texto no modo assíncrono, com *callback*.

```javascript
// Bibliotecas Node para ler arquivos.
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

// Callback.
const exibirConteudo = (_, conteudo) =>
      console.log(conteudo.toString())

console.log('=== INICIO da leitura do arquivo...')
fs.readFile(caminho, exibirConteudo)
console.log('=== FIM da leitura.\n')

console.log('=== INICIO de uma outra operação qualquer...')
const exec = (fn, a, b) => fn(a, b)
const somarNoTerminal = (x, y) => console.log(`Resultado: ${x + y}.`)
exec(somarNoTerminal, 56, 38)
console.log('=== FIM da outra operação.\n')
```
