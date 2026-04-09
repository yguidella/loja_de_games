# Loja de Games

Este projeto é uma API REST desenvolvida com NestJS para o gerenciamento de uma loja de games. A aplicação permite o cadastro de produtos vinculados a categorias específicas, utilizando um banco de dados relacional.

## Tecnologias Utilizadas

* Node.js & NestJS
* TypeScript
* TypeORM (Object Relational Mapper)
* MySQL (Banco de dados)
* Class Validator & Class Transformer (Validação de dados)

## Estrutura do Projeto

O projeto foi desenvolvido seguindo as melhores práticas de organização em camadas:

* Entities: Definição das tabelas do banco de dados e seus relacionamentos.
* Repositories: Comunicação direta com o banco de dados via TypeORM.
* Services: Camada de lógica de negócio e regras da aplicação.
* Controllers: Exposição das rotas da API e tratamento de requisições/respostas.

## Relacionamentos

A API implementa um relacionamento do tipo One-to-Many (Um para Muitos):

* Uma Categoria pode estar vinculada a vários Produtos.
* Um Produto pertence obrigatoriamente a uma Categoria.
* Foi configurado o comportamento de onDelete: 'CASCADE', garantindo que, ao remover uma categoria, todos os produtos vinculados sejam removidos automaticamente, mantendo a integridade dos dados.

## Rotas da API

### Produtos

* GET /produtos - Lista todos os produtos.
* GET /produtos/:id - Busca um produto pelo ID.
* GET /produtos/nome/:nome - Busca produtos por nome.
* POST /produtos - Cadastra um novo produto.
* PUT /produtos - Atualiza um produto existente.
* DELETE /produtos/:id - Remove um produto.

### Categorias

* GET /categorias - Lista todas as categorias.
* GET /categorias/:id - Busca uma categoria pelo ID.
* GET /categorias/tipo/:tipo - Busca categorias por descrição.
* POST /categorias - Cadastra uma nova categoria.
* PUT /categorias - Atualiza uma categoria.
* DELETE /categorias/:id - Remove uma categoria.

## Organização de Branches

Este projeto seguiu um fluxo de desenvolvimento organizado por branches:

* main: Versão estável e configurada.
* feat/categoria: Desenvolvimento do recurso de Categorias.
* feat/produto: Desenvolvimento do recurso de Produtos e Relacionamentos.