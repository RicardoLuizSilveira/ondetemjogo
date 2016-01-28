# Onde tem jogo?
http://projetochernobyl.github.io/ondetemjogo

O projeto "Onde Tem Jogo?" é uma plataforma que auxilia na busca de jogos do seu time favorito em bares/lanchonetes.
Enquanto os usuários podem encontrar o melhor horário e local para se reunir os donos de estabelecimento podem utilizar a plataforma para divulgação de suas marcas atingindo uma infinidade de clientes em potencial.

Em resumo desejamos criar **conexões!**     
colocando as pessoas certas nos lugares certos em um momento específico de suas vidas.


#### Pré requisitos

* Node.js

Download em https://nodejs.org/en/

#### Configuração do ambiente de desenvolvimento

Navegue até o diretório `web` (pasta contendo o arquivo `package.json`) e execute os comandos abaixo:

```JavaScript

  bower install
  npm install

```

#### Iniciando o servidor e acessando o projeto

```JavaScript
  npm start
```

Agora abra o navegador e digite `http:/localhost:8080/app`

Caso queira acessar externamente, alterar o valor `localhost` pelo seu `endereço de IP` no arquivo `package.json` conforme exemplo a seguir.

De:

```JavaScript
  "start": "http-server -a localhost -p 8000 -c-1",
```

Para:

```JavaScript
  "start": "http-server -a 192.168.1.23 -p 8000 -c-1",
```
