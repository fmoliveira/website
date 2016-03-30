---
layout: post
title:  "Simples Message Queue com Redis"
categories: redis
---
É comum cairmos em cenários no qual precisamos realizar processamentos demorados em nossas aplicações. Estes processamentos podem ser desde acesso a serviços externos, tais como sincronização de muitos dados com APIs de terceiros, até processos mais elaborados, como transformação de arquivos, entre outros.

Para que a experiência de uso de sua aplicação não seja degradada nestes cenários, é fundamental que esta demora seja negociada e comunicada aos usuários.

O princípio desta comunicação é indicar ao usuário que uma tarefa demorada está em andamento. Isto pode ser uma simples mensagem "Por favor aguarde", ou até uma indicação de progresso para tarefas mais demoradas.

Neste artigo eu não quero debater as escalas de tempo em UX, mas chamar a atenção para tarefas mais demoradas do que 1 segundo. O artigo [Powers of 10: Time Scales in User Experience](https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/) relata que os usuários começam a ficar impacientes quando percebem que o computador demora mais do que 1 segundo para responder. Ao chegar em 10 segundos, o fluxo de interação é quebrado, e os usuários provavelmente vão fechar o seu site.

Neste caso, você deve considerar uma alteração em sua UX. Em vez de pedir ao usuário que aguarde a conclusão da tarefa, apenas notifique-o que você irá realizá-la, e faça-a em plano de fundo, sem bloquear o fluxo de uso de sua aplicação. O usuário pode fazer outras tarefas enquanto aguarda a conclusão desta. Esta alteração em UX pode ser implementada de diferentes formas, de acordo com o propósito desta tarefa demorada e diversos outros fatores, e cabe a você identificar a melhor forma de implementação. Você pode avisar o usuário por email, ou receber um alerta em sua Single Page Application utilizando WebSockets, dizendo  ao usuário que ele pode continuar de onde havia parado.

## Message Queue
Um Message Queue (abreviado como MQ), ou "fila de mensagens", é um componente usado para comunicação entre processos. Grosseiramente, funciona desta forma:

1. Uma aplicação envia uma mensagem ao MQ, que é adicionada a uma fila de mensagens.
2. O "carteiro" pega todas as mensagens disponíveis na fila, e distribui aos respectivos destinatários.

Desta forma, o destinatário irá começar a trabalhar somente quando receber a mensagem. Quando terminar, enviará uma mensagem de resposta ao remetente original, caso seja apropriado.

Um exemplo na vida real seria uma interação de uma aplicação que precisa sincronizar muitos dados de uma rede social, pois irá agregá-los em sua aplicação. Para sincronizar tantos dados, centenas de requisições na API desta rede social seriam necessárias, uma tarefa que pode levar alguns minutos, dependendo de restrições de consumo desta API. O fluxo de interação poderia ser:

1. Sua aplicação web salva no banco de dados as requisições que precisa fazer, e envia uma mensagem ao MQ com o ID dos objetos salvos.
2. Sua aplicação worker pede ao "carteiro" do MQ as mensagens que lhe interessam, lê seu conteúdo, faz a sincronização com a rede social, e salva o retorno no banco de dados.
