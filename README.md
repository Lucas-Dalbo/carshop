[Read it in English!](./README-Eng.md)

# Projeto: Carshop-DB
Este projeto foi desenvolvido enquanto estudante da Trybe no módulo de Back-End!

---
## Sobre o projeto
O objetivo do projeto era construir uma API para registro de Veículos, utilizando o mongoDB com mongoose e TypeScript.
Para estruturação da API, foi utilizada a Programação Orientada a Objetos (POO) seguidos os princípios do SOLID.
A API foi testada utilizando mocha, sinon e chai, como foco em testes de unidade (unit tests).

---
## Funcionalidades das Rotas

#### Carros

| Tipo   | Rota       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `POST` | `/cars` | Registra um novo carro |
| `GET` | `/cars` | Lista todos os carros |
| `GET` | `/cars/:id` | Lista o carro com o id indicado |
| `PUT` | `/cars/:id` | Edita as informações do carro com id indicado |
| `DELETE` | `/cars/:id` | Deleta as informações do carro com id indicado |

#### Motocicletas

| Tipo   | Rota       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `POST` | `/motorcycle` | Registra uma nova motocicleta |
| `GET` | `/motorcycle` | Lista todos as motocicletas |
| `GET` | `/motorcycle/:id` | Lista a motocicleta com o id indicado |
| `PUT` | `/motorcycle/:id` | Edita as informações da motocicleta com id indicado |
| `DELETE` | `/motorcycle/:id` | Deleta as informações da motocilceta com id indicado |

---
## O que foi utilizado?
 - Node.js com Express;
 - TypeScript;
 - MongoDB com Mongoose;
 - Validações com ZOD;
 - POO e SOLID;
 - Mocha, sinon, chai;
 - ESlint para manter a integridade do código.
