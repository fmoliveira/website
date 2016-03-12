---
layout: post
title:  "Crie facilmente seu próprio REPL em Node.js"
date:   2016-03-12 14:46:50
categories: node.js
---
Um REPL é um console presente em várias plataformas de desenvolvimento e bancos de dados para execução interativa de comandos. Significa Read-Eval-Print-Loop, que são os nomes das funcionalidades realizadas pelo aplicativo, nesta mesma ordem.

Read: lê uma entrada de texto do usuário; Eval: avalia a entada de texto, em REPLs de linguagens de programação geralmente a entrada de texto é interpretada como código fonte, sendo executada; Print: imprime a saída de texto das instruções executadas; Loop: repete o processo desde o início.

O Node.js fornece um módulo que permite a criação do seu próprio REPL com muita facilidade. Isto pode ser útil para a criação de seus próprios aplicativos de linha de comando, e também para facilitar testes de aplicativos sem interface, no qual o [usuário interage com o app através de um chat](http://www.businessinsider.com/7-best-invisible-apps-to-help-you-find-what-you-need-2015-11). Eu estou usando este REPL simples justamente para testar um bot que será integrado com Slack.

## Primeiros comandos

O módulo em questão é chamado `repl` e já acompanha a sua instalação do Node.js. O seu uso é bem intuitivo, veja um código de exemplo:

```js
// inicializa o repl
var repl = require('repl')

var server = repl.start({
  prompt: ' > '
})

// define o comando "oi"
server.context.oi = "Eu sou C-3PO, ciborgue de relações humanas e fluente em 6 milhões de línguas e falas de comunicações diferentes."
```

Salve como `primeiro-repl.js` e execute com `node primeiro-repl.js`. Agora, vamos testar o comando que definimos, e qualquer outro que não foi definido.

```sh
 > oi
'Eu sou C-3PO, ciborgue de relações humanas e fluente em 6 milhões de línguas e falas de comunicações diferentes.'
 > teste
ReferenceError: teste is not defined
```

Como esperado, o comando "oi" é respondido com a frase pré-determinada, e o comando "teste" apresenta erro de objeto não definido.

Funciona, mas ainda é bem limitado pois não permite você especificar comandos que executam funções.

## Assumindo controle do eval

Nós podemos assumir controle total sobre a função "eval" da seguinte forma:

```js
// inicializa o repl
var repl = require('repl')

var server = repl.start({
  prompt: ' > ',
  eval: callBot
})

// envia os comandos do repl para o bot
function callBot (cmd, context, filename, callback) {
  var lines = cmd.split('\n')
  var text = lines[0]

  // envia a resposta do bot ao repl
  var answer = 'Você disse "' + text + '", mas eu ainda não fui programado a entender isto!'
  callback(null, answer)
}
```

Salve como `segundo-repl.js` e execute com `node segundo-repl.js`. Vamos interagir com o nosso aplicativo:

```sh
 > oi
'Você disse "oi", mas eu ainda não fui programado a entender isto!'
 > teste
'Você disse "teste", mas eu ainda não fui programado a entender isto!'
```

Agora basta você integrar a função de eval com o seu código responsável por interpretar e responder as mensagens. Mais ou menos isto:

```js
// trecho de exemplo, precisa de suas adaptações para funcionar!
function callBot (cmd, context, filename, callback) {
  ...
  var answer = mybot.talk(text) // passa o texto do REPL para o seu bot
  callback(null, answer) // envia a resposta do seu bot para o REPL
}
```

Leia a documentação completa do REPL do Node.js [clicando aqui](https://nodejs.org/api/repl.html).

## O que vem depois?

O módulo que apresentei aqui é bem simples de ser usado, porém, também é bastante limitado. Para tarefas simples, ele pode ser bem efetivo, mas se você precisa de um REPL mais poderoso, você pode querer dar uma olhada nas seguintes bibliotecas:

* [Vorpal](https://github.com/dthree/vorpal): Permite a criação de CLIs e REPLs com uma API simples e poderosa.
* [Vantage](https://github.com/dthree/vantage): É descrito pelo autor como "Vorpal com asas", mas eu diria "Vorpal com lasers". É uma extensão do Vorpal muito mais complexa e poderosa, inclusive com funcionalidade de cliente/servidor parecida com SSH.

Ambas são muito poderosas e merecem ser experimentadas com carinho!
