# NLW UNITE (NODE.JS) 🚀
Este repositório foi desenvolvido durante a trilha Node do evento NLW Unite da Rocketseat. O projeto é focado na criação de uma api para eventos presenciais onde é feito o cadastro do evento, participantes e check-in no evento.

<img width="930" alt="2024-04-11_08h04_58" src="https://github.com/piedro404/pass-in-nodejs-nlw-unite/assets/88720549/be45998a-c074-43ad-8b19-9b35d843c317">

# Principais Tecnologias Utilizadas 🌐
- Node.js: Um ambiente de tempo de execução JavaScript que permite aos desenvolvedores criar aplicativos de rede escaláveis..
- TypeScript: Uma linguagem de programação que é uma extensão tipada do JavaScript, fornecendo recursos de tipagem estática opcionais.
- Prisma: Uma ferramenta de banco de dados ORM (Object-Relational Mapping) para Node.js e TypeScript, que simplifica o acesso e a manipulação de bancos de dados.
- Outras Bibliotecas: Uma variedade de bibliotecas adicionais utilizadas no projeto, cujos detalhes podem ser encontrados no arquivo package.json.

## pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

### Requisitos

#### Requisitos funcionais

- [X] O organizador deve poder cadastrar um novo evento;

- [X] O organizador deve poder visualizar dados de um evento;

- [X] O organizador deve poder visualizar a lista de participantes;

- [X] O participante deve poder se inscrever em um evento;

- [X] O participante deve poder visualizar seu crachá de inscrição;

- [X] O participante deve poder realizar check-in no evento;

#### Regras de negócio

- [X] O participante só pode se inscrever em um evento uma única vez;

- [X] O participante só pode se inscrever em eventos com vagas disponíveis;

- [X] O participante só pode realizar check-in em um evento uma única vez;

#### Requisitos não-funcionais

- [X] O check-in no evento será realizado através de um QRCode;

## Anotações

#### Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, ...

Corpo da requisição (Request Body)

Parâmetros de busca (Search Params / Query Params) 'http://IocaIhost:3333/users?name=Diegos

Parâmetros de rota (Route Params) -> Identificação de recursos 'DELETE http://IocaIhost:3333/users/5

Cabeçalhos (Headers) -> Contexto

Semânticas Significado

Driver nativo / Query Builders / ORMS

Object Relatianal Mapping (Hibernate / Doctrine / ActiveRecord)

JSON - JavaScript Object Notation

20x => Sucesso

30x => Redirecionamento

40x => Erro do cliente (Erro em alguma informação enviada por QUEM está fazendo a chamada p/ API)

50x => Erro do servidor (Um erro que está acontecendo INDEPENDENTE do que este sendo enviado p/ o servidor)
