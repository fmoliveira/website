---
layout: post
title:  "Habilite SSL em seu site gratuitamente"
date:   2016-03-10 23:19:35
categories: nuvem
---
Você já deve ter ouvido falar sobre rumores de que o [Google Chrome começou a marcar sites HTTP como inseguros](http://www.zdnet.com/article/google-mark-http-pages-as-insecure/). Pois é, só que [não são rumores](http://motherboard.vice.com/read/google-will-soon-shame-all-websites-that-are-unencrypted-chrome-https): o [Mozilla Firefox](https://blog.mozilla.org/security/2015/04/30/deprecating-non-secure-http/) também [já começou a fazer o mesmo](https://ma.ttias.be/firefox-nightly-starts-marking-login-forms-in-http-as-insecure/)!

Em dezembro de 2014 a equipe do Chromium apresentou a [seguinte proposta](https://www.chromium.org/Home/chromium-security/marking-http-as-non-secure) (texto traduzido):

> "Nós, da Equipe de Segurança do Chrome, propomos que os user agents (UAs) **gradualmente alterem sua UX para exibir origens não-seguras como afirmativamente inseguras.** Nós pretendemos conceber e começar a trabalhar em um plano de transição para o Chrome em 2015.
> 
> O objetivo desta proposta é para exibir claramente aos usuários que o HTTP não fornece nenhuma segurança de dados."

Já faz uns 2 meses que eu escuto alguns amigos comentarem que o seu Google Chrome já exibe alguns sites HTTP com a marcação de inseguros. Comigo isto não aconteceu no Chrome ainda, mas no Mozlila Firefox Developer Edition sim, também há cerca de 2 meses.

Esta feature ainda é experimental, sendo liberada aos poucos para alguns usuários sorteados. Mas não deve levar muito tempo até que todos usuários destes navegadores recebam esta atualização de configuração.

**Dica:** Caso queira testar este recurso no Chrome antes dele ser liberado para todo mundo, digite *chrome://flags* em sua barra de endereços e habilite a flag *"Mark non-secure origins as non-secure"*.

## Eu deveria me preocupar com isto?

![HTTP inseguro]({{ site.baseurl }}/images/http-inseguro.png)
{: center }

Se você já está certo sobre a importância de ter um certificado SSL em seu site, pode pular esta seção. Se você é um hobbista, profissional liberal ou representante de uma empresa que tem seu site pessoal ou institucional sem SSL porque nunca houve nenhuma informação sensível para se preocupar com isto, agora você tem: preocupe-se com a má experiência de navegação que os seus usuários devem começar a sofrer.

O alerta de site inseguro afeta diretamente a UX de seu site, e você está arriscando suas conversões se fechar os olhos para este problema.

Estudos realizados pelas empresas desenvolvedoras destes navegadores e por notáveis universidades como a Carnegie Mellon mostraram que muita gente ainda ignora os avisos de certificado SSL vencido. E com base nisto, os desenvolvedores tem trabalhado duro para tornar os avisos mais assustadores, a fim de convencer os usuários a confiarem no aviso e abandonarem o site, o que tem dado resultado gradativamente.

Mas se você prefere não acreditar na minha opinião sobre UX, aqui vai um fato: o [Google já favorece sites HTTPS](http://thenextweb.com/google/2014/08/07/google-is-now-ranking-websites-with-https-higher-in-its-search-results/) em seus [resultados de busca](http://thenextweb.com/google/2015/12/17/unsecured-websites-are-about-to-get-hammered-in-googles-search-ranking/), e inclusive dá dicas sobre como melhorar ainda mais a [indexação de sites HTTPS](https://security.googleblog.com/2015/12/indexing-https-pages-by-default.html).

## Mas eu sou apenas um pobre hobbista!

Pois é, mas em nenhum momento a intenção do Google e outras empresas em exibir sites HTTP como inseguros teve motivação financeira. O foco delas não é ficarem mais ricas ainda vendendo certificados, mas sim tornar a web um lugar mais seguro para todos.

Basta você se lembrar que várias das features modernas do HTML5 requerem SSL, e que o HTTP 2 está chegando com tudo, que não vai demorar para você cair na real de que utilizar SSL não é mais opcional. A web está em constante evolução, e cabe a você seguir os seus pré-requisitos para manter-se em destaque.

## CloudFlare ao resgate dos hobbistas!

> "O CloudFlare protege e acelera qualquer website online."

O CloudFlare é um dos pioneiros e mais poderosos serviços de CDN e DNS. Ele se torna uma camada intermediária entre seus visitantes e o seu serviço de hospedagem, atuando como um proxy reverso para websites.

Em seu plano gratuito, o CloudFlare permite o gerenciamento de 1 website e inclui certificados SSL para todos os seus subdomínios.

Antes de prosseguir, é importante entender os diferentes níveis de segurança que o CloudFlare pode lhe proporcionar.

![Certificados do CloudFlare]({{ site.baseurl }}/images/certificados-cloudflare.png)
{: center }

O certificado SSL entre os seus usuários e o CloudFlare é fornecido gratuitamente. Isto não requere que você tenha um certificado SSL em seu servidor, o que torna a opção **Flexible SSL** completamente gratuita. Porém, lembre-se: toda comunicação entre o CloudFlare e o seu servidor estará descriptografada.

> Isso é basicamente SSL para inglês ver, pois apenas metade da conexão é segura. **Isto serve perfeitamente para hobbistas** que sabem o que estão fazendo, mas você não vai querer usar esta opção em sites e aplicações que lidam com dados sensíveis de propriedade sua ou de seus clientes.

Eu utilizo CloudFlare e não tenho nada a reclamar. Para mim é uma opção perfeita, não gasto nenhum centavo com isto e tenho meu blog livre dos avisos de HTTP inseguro. A configuração é muito simples e além de habilitar SSL entre meus visitantes e o proxy, me fornece diversas features proveitosas, tais como: cache, minificação automática, estatísticas de acesso mais imediatas do que no Google Analytics (apesar de menos detalhadas), regras de redirecionamento, subdomínios ilimitados, entre outras.

## Mas isto não é gambiarra?

> Não. É apenas para inglês ver. Gambiarra, jamais!

Desde que você entenda plenamente o que é criptografado e o que não é criptografado ao utilizar esta técnica, e reconheça que isto não irá gerar problemas de segurança para seu site, é perfeitamente aceitável utilizá-la.

Porém, é claro que seria muito melhor que você habilitasse um certificado diretamente no seu servidor, para garantir a criptografia de toda a conexão. Utilizar o certificado flexível do CloudFlare irá exibir seu site como seguro para seus visitantes, embora você saiba que apenas metade da conexão está protegida. Ou seja, isto resolve apenas o problema de UX.

Tenha isto em mente ao prosseguir com esta configuração, e faça por sua própria conta e risco.

Eu hospedo apenas um blog com esta técnica, sem formulários que possam trafegar informações de forma insegura, portanto, tenho ciência de que a parte que o inglês não vê não vai me causar problemas.

Em minhas aplicações e clientes que trafegam dados sensíveis, eu utilizo o [Let's Encrypt](#lets-encrypt-o-futuro-do-ssl) para proteger as conexões gratuitamente.

Mas para o caso do meu blog hospedado no [GitHub Pages](https://pages.github.com/), servidor no qual eu não tenho nenhum acesso administrativo, configurar o [Let's Encrypt](#lets-encrypt-o-futuro-do-ssl) não é uma opção. Como eu utilizo um domínio personalizado, não posso usufruir do certificado SSL fornecido gratuitamente pelo [GitHub](https://github.com). Se você está no mesmo barco, veja abaixo como configurar o CloudFlare em seu site.

## Configurando o CloudFlare

[Clique aqui](https://www.cloudflare.com/a/sign-up) para se dirigir à página de cadastro do CloudFlare.

Após cadastrar-se, vá até a aba "Crypto" e altere a opção **SSL** para *Flexible*. Pronto, acesse seu site com `https://` no início e curta o seu novo certificado gratuito! Simples assim!

![Flexible SSL]({{ site.baseurl }}/images/flexible-ssl.png)
{: center }

Você também pode querer redirecionar todo tráfego HTTP para HTTPS. Para isto, vá até a aba "Page Rules" e crie duas regras:

1. Pattern: `http://seusite.com.br/*` (sem www)
   * Habilite a opção **Always use https**.
2. Pattern: `http://www.seusite.com.br/*` (com www)
   * Habilite a opção **Always use https**.

## Let's Encrypt: o futuro do SSL

![Let's Encrypt]({{ site.baseurl }}/images/letsencrypt.svg)
{: center }

> "O Let's Encrypt é uma nova Autoridade de Certificados: É **gratuito**, **automatizado** e **aberto**."

Lembra daquela parte em que eu disse que esta trama toda de depreciar o HTTP não tem intenções financeiras? Prova disto são os nomes dos principais apoiadores da iniciativa gratuita e de código aberto Let's Encrypt. Dois destes nomes são justamente *Mozilla* e *Chrome*.

Então ao mesmo tempo em que os gigantes dos navegadores querem que o uso de SSL se torne obrigatório, eles também querem que os mesmos se tornem mais acessíveis? Agora sim tudo faz sentido!

O Let's Encrypt tem apoio de muitas outras grandes empresas, incluindo o [Facebook](https://www.facebook.com/). Você já pode começar a utilizá-lo hoje mesmo [seguindo o tutorial](https://letsencrypt.org/getting-started/) disponível em seu site oficial. A instalação dos certificados no Apache é automatizada, e o processo de instalação no Nginx também é bem simples e você pode seguir [este ótimo tutorial disponibilizado pela Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-14-04). Eu instalei no Nginx facilmente seguindo este tutorial, caso você tenha alguma dificuldade poste um comentário com a sua dúvida!

## O que vem depois?

Em breve vou escrever mais alguns posts relacionados a este assunto:

* Cuidados especiais com SEO em sites HTTPS
* Como validar e melhorar a classificação de seu certificado SSL

Seja parte da modernização da web! Migre todos seus sites para SSL e tenha um futuro mais seguro!

{:center: style="text-align: center"}
