title: Entenda porque o Docker é sensacional para desenvolvedores
---
Cada vez escutamos falar mais e mais sobre Docker¹, containers… Mas pulando a parte introdutória do que o Docker é², como ele pode ser útil a nós, desenvolvedores? Eu mesmo confesso que o ignorei nos primeiros testes que fiz, ainda no ano passado. Movido a um incômodo de escutar cada mais gente falar sobre Docker, e eu ficar boiando no meio da conversa, neste mês eu resolvi pegar firme para aprender a usá-lo. O resultado foi um frio arrependimento de não ter lhe dado a devida atenção antes!

Neste artigo eu não vou explicar o que é o Docker e nem abordar os comandos básicos. Mas eu recomendo que você leia primeiro o meu artigo, para não cair na cilada de desistir de aprendê-lo ou deixar para depois, pois aqui eu vou lhe dizer como o Docker solucionou várias dores que eu tinha com frequência em meu ambiente de desenvolvimento, do meu ponto de vista de desenvolvedor. Lembrando que o Docker é uma ótima ferramenta também para sysadmins, mas eu não vou entrar neste mérito aqui.

### Frustração nº 1: Configuração de ambiente

Que atire a primeira pedra quem nunca reclamou de ficar preparando ambiente só para executar uma aplicação que você mesmo desenvolveu! Afinal de contas, não parece tão difícil baixar todos os instaladores do Node.js, MongoDB, Redis, clicar várias vezes em Next e depois Finish, e depois dar um “npm install” para instalar as dependências de seu projeto, certo? Exceto quando uma das versões teve um update que torna parte de seu trabalho incompatível, e você perde o resto do dia para descobrir que o problema foi este. Não estou aconselhando ninguém a não atualizar as suas versões (pelo contrário, eu os encorajo a serem early adopters de beta tests), mas tenho certeza que você já apanhou durante horas por causa de um update justo naquela hora crítica, que você precisava resolver um bug com urgência pois ele tirou a aplicação do ar, e tem que ficar esquentando a cabeça com preparação de ambiente.

Com o Docker você pode armazenar toda a configuração de seu ambiente em um Dockerfile, que é uma receita da configuração de um container, e deixar que todo ambiente seja instalado de acordo com a receita, e no final da instalação, você terá um ambiente idêntico ao que está acostumado a utilizar em cada projeto! Após instalar o ambiente, você pode executá-lo quantas vezes quiser sem nenhum delay adicional caso esteja usando Linux, ou com um pequeno delay de alguns milisegundos caso esteja usando Windows ou Mac OS.

### Frustração nº 2: Programas tunados para Linux fora de ambientes Linux

Eu passei raiva por muito tempo tentando rodar o Nginx em Windows, mas nunca consegi fazê-lo funcionar no meu OS principal. No Linux é muito fácil, basta instalá-lo via APT, copiar os arquivos de configuração para o diretório de includes de configuração do mesmo, e mandar o Nginx recarregar a configuração!

Deve ter sido muita incompetência minha. Afinal de contas, sou desenvolvedor, o que me torna um usuário muito chato dos programas criados pelos outros. Enfim, horas afora de muita impaciência não me deram maturidade suficiente para conseguir fazer o Nginx funcionar em Windows de uma forma decente como eu costumo usar em Linux, instalado como serviço e fácil de ser reiniciado. Consequência: eu acabei tendo de criar configurações de portas alternativas nos meus micro-services Node.js para servir de muleta à falta do Nginx! O efeito de tudo isto foi um ambiente difícil de ser gerenciado e implantado em produção.

Com o Docker, eu simplesmente crio um Dockerfile que sempre monta um diretório da minha máquina host com os meus arquivos de configuração, e o inicio em qualquer sistema operacional sem problemas - afinal de contas, o Docker está sempre dentro do Linux³, o que torna o uso de aplicativos tunados para Linux mais fácil. Sem contar que não preciso reconfigurar o Nginx toda hora.

### Frustração nº 3: Portabilidade de ambientes

Há dez anos ainda era super viável você ter uma pasta de backup em seu computador com os instaladores de tudo o que você costuma usar. No caso de ter que configurar um novo computador ou reconfigurar o seu após uma formatação, você não precisava contar com a cooperação do seu provedor de banda larga para que ele não fizesse manutenção na rede justo no momento em que você formatou seu computador! Hoje a internet está muito mais madura e conexões de 10 Mbps e superiores são bastante comuns em lares de desenvolvedores, e os links fornecidos em eventos de tecnologia também são bem decentes.

Neste caso, o Docker torna muito mais fácil a portabilidade de seu ambiente através do Dockerfile. Você pode guardar os Dockerfiles nos repositórios Git de seu próprio projeto, tendo um ou múltiplos Dockerfiles por projeto, ou criar um repositório Git para armazenar todos seus ambientes Docker. Ou melhor ainda, use o próprio Docker Hub para armazenar suas configurações. Precisou criar um novo ambiente idêntico ao seu? Apenas baixe a sua configuração e mande o Docker criar o ambiente. O Docker irá se encarregar de baixar tudo o que for necessário para instalá-lo, de acordo com a receita especificada no Dockerfile. Vá tomar um cafézinho e quando você voltar, tudo estará magicamente pronto para uso!

Isto também facilita muito o compartilhamento de ambientes de desenvolvimento entre equipes geograficamente distribuídas (leia: trabalhando remotamente). Para uma empresa isto pode ser usado com muita facilidade para configurar ambientes de home office em sua casa idênticos aos que você usa na empresa.

### Frustração nº 4: Isolamento de ambientes

Este eu deixei para o grand finale de propósito. Certamente você já passou por dificuldades ao atualizar o seu ambiente para novas versões, e lembrar da pior forma possível que os projetos de um determinado cliente ainda não foram portados para esta versão, e o ambiente parar de funcionar para aqueles projetos. O cliente liga para você justo na hora que você acabou de começar a trabalhar no outro projeto e pede para verificar porque a aplicação está respondendo 500 Bad Request. E agora, vida cruel? Qual cliente eu vou enrolar?

Com o Docker, fica incrivelmente muito fácil gerenciar este tipo de situação, afinal, seus containers são ambientes completamente isolados! É tudo tão simples quanto parar um serviço e iniciar outro.

### Conclusão

Hoje eu não tenho dúvidas de que o Docker é uma ferramenta essencial em meu dia a dia. O mais assustador é contar a todos como ele se tornou essencial de forma tão rápida.

O Docker realmente simplifica muito o trabalho chato de preparar e gerenciar ambientes, levando a sua produtividade a um próximo nível.

Sua sintaxe é simples, o que diminui muito a curva de aprendizado, permitindo que ele seja incluído em sua rotina diária com facilidade.

Por isto eu encorajo a todos desenvolvedores que invistam parte de seu tempo aprendendo Docker, principalmente aqueles que já tiveram as dificuldades mencionadas por mim, mas também os que ainda as terão. Em pouco mais de 2 anos de existência, o Docker já ultapassou a marca de 300 milhões de downloads de containers. Não é de se assustar que ele tenha se tornado tão popular em tão pouco tempo, tendo em vista como ele aprimora a nossa produtividade, não é?

Espero que eu tenha conseguido transmitir a mensagem. Me escrevam aqui no blog ou nas redes sociais em caso de dúvidas, sugestões, ou debates! Tem alguma história de uma ou mais dificuldades solucionadas pelo Docker? Escreva para mim, será um prazer adicioná-las ao artigo!

Abraços a todos.

### Materiais suplementares:

1: Site oficial do Docker: https://www.docker.com/

2: Introdução ao Docker: http://imasters.com.br/infra/linux/baleias-na-nuvem-entenda-como-funciona-o-docker/

3: Boot2docker, uma máquina virtual levíssima para rodar Docker de forma transparente em Windows e Mac OS: http://boot2docker.io/
