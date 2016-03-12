---
layout: post
title:  "Crie facilmente seu próprio REPL em Node.js"
categories: node.js
---
Relembrando, REPL é um console presente em várias plataformas de desenvolvimento e bancos de dados para execução interativa de comandos. Significa Read-Eval-Print-Loop, que são os nomes das funções realizadas pelo console, nesta mesma ordem.

Primeiro, o REPL lê uma entrada de texto do usuário, e em seguida a avalia. Esta avaliação pode ser consultar um arquivo texto, executar uma consulta em um banco de dados, alterar arquivos de configuração, ou qualquer outra coisa. Após concluir a avaliação, o usuário recebe uma resposta, e o loop se repete.

O Node.js fornece um módulo que permite a criação do seu próprio REPL com muita facilidade. Caso vocẽ esteja pensando ou trabalhando em um aplicativo sem interface, conhecidos também como [apps invisíveis](http://www.businessinsider.com/7-best-invisible-apps-to-help-you-find-what-you-need-2015-11), esta dica pode ser bastante útil.

O módulo em questão é chamado `repl` e já acompanha a sua instalação do Node.js. O seu uso é bem intuitivo, veja um código de exemplo:

```js
'use strict'

// inicializa o repl
const repl = require('repl')

const server = repl.start({
  prompt: ' > '
})

server.context.oi = "Eu sou C-3PO, ciborgue de relações humanas e fluente em 6 milhões de línguas e falas de comunicações diferentes."
```

Salve como `primeiro-repl.js` e execute com `node primeiro-repl.js`. Agora, vamos testar o comando que você definiu e um que não foi definido.

```sh
 > oi
'Eu sou C-3PO, ciborgue de relações humanas e fluente em 6 milhões de línguas e falas de comunicações diferentes.'
 > teste
ReferenceError: teste is not defined
```












Exemplo:

```sh
 > olá!
'Você disse "olá!", mas eu ainda não fui ensinado a entender isto!'
 > ok, eu vou te ensinar!
'Você disse "ok, eu vou te ensinar!", mas eu ainda não fui ensinado a entender isto!'
 > 
```


---

```js
'use strict'

// inicializa o repl
const repl = require('repl')

const server = repl.start({
  prompt: ' > ',
  eval: callBot
})

server.context.oi = "Eu sou C-3PO, ciborgue de relações humanas e fluente em 6 milhões de línguas e falas de comunicações diferentes."

// envia os comandos do repl para o proto bot
function callBot (cmd, context, filename, callback) {
  let lines = cmd.split('\n')
  let text = lines[0]

  // envia a resposta do bot ao repl
  let answer = `Você disse "${text}", mas eu ainda não fui ensinado a entender isto!`
  callback(null, answer)
}
```
