# 🎮 Loja de Games API

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
  <img src="https://img.shields.io/badge/REST%20API-000000?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" />
</p>

---

## 📖 Sobre o Projeto

O **Loja de Games API** é uma aplicação backend desenvolvida com **NestJS**, **TypeScript**, **TypeORM** e **MySQL**, focada no gerenciamento de produtos e categorias de uma loja de games através de uma API REST moderna, organizada e escalável.

O sistema foi estruturado utilizando arquitetura modular e boas práticas de desenvolvimento backend, permitindo operações completas de cadastro, consulta, atualização e remoção de dados.

O projeto aplica conceitos importantes como:

- Programação Orientada a Objetos
- Persistência de dados
- Relacionamento entre entidades
- Injeção de dependência
- Validação de dados
- Tratamento de exceções
- Arquitetura REST

---

## ✨ Funcionalidades

✅ CRUD completo de categorias  
✅ CRUD completo de produtos  
✅ Busca de categorias por ID  
✅ Busca de categorias por tipo  
✅ Relacionamento entre produtos e categorias  
✅ Validação automática de dados  
✅ Tratamento de erros HTTP  
✅ Persistência de dados com MySQL  
✅ API REST estruturada com NestJS  
✅ CORS habilitado para integração frontend  

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| NestJS | Framework backend |
| TypeScript | Linguagem principal |
| Node.js | Ambiente de execução |
| TypeORM | ORM para banco de dados |
| MySQL | Banco de dados relacional |
| class-validator | Validação de dados |
| class-transformer | Transformação de dados |
| Jest | Testes automatizados |
| ESLint | Padronização de código |
| Prettier | Formatação automática |

---

## 🧠 Conceitos Aplicados

- REST API
- CRUD
- Programação Orientada a Objetos
- Dependency Injection
- Arquitetura Modular
- Repository Pattern
- Relacionamento OneToMany
- ValidationPipe
- Tratamento de Exceptions
- Clean Code

---

## 📂 Estrutura do Projeto

```bash
.
└── src/
    ├── categoria/
    │   ├── controllers/
    │   │   └── categoria.controller.ts
    │   ├── entities/
    │   │   └── categoria.entity.ts
    │   ├── services/
    │   │   └── categoria.service.ts
    │   └── categoria.module.ts
    │
    ├── produto/
    │   ├── controllers/
    │   │   └── produto.controller.ts
    │   ├── entities/
    │   │   └── produto.entity.ts
    │   ├── services/
    │   │   └── produto.service.ts
    │   └── produto.module.ts
    │
    ├── app.controller.spec.ts
    ├── app.controller.ts
    ├── app.module.ts
    ├── app.service.ts
    └── main.ts
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- NestJS CLI
- MySQL

---

## 🚀 Instalação e Execução

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/loja_de_games.git
```

---

### 2️⃣ Acesse a pasta do projeto

```bash
cd loja_de_games
```

---

### 3️⃣ Instale as dependências

```bash
npm install
```

---

### 4️⃣ Configure o banco de dados

Crie um banco MySQL com o nome:

```sql
CREATE DATABASE db_loja_de_games;
```

---

### 5️⃣ Execute a aplicação

```bash
npm run start:dev
```

---

## 🔗 Endpoints da API

### 📦 Categorias

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/categorias` | Lista todas as categorias |
| GET | `/categorias/:id` | Busca categoria por ID |
| GET | `/categorias/tipo/:tipo` | Busca categoria por tipo |
| POST | `/categorias` | Cria uma categoria |
| PUT | `/categorias` | Atualiza uma categoria |
| DELETE | `/categorias/:id` | Remove uma categoria |

---

### 🎮 Produtos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/produtos` | Lista todos os produtos |
| GET | `/produtos/:id` | Busca produto por ID |
| POST | `/produtos` | Cria um produto |
| PUT | `/produtos` | Atualiza um produto |
| DELETE | `/produtos/:id` | Remove um produto |

---

## 💻 Exemplo de Requisição

### ▶️ Criar categoria

```http
POST /categorias
```

### 📨 Body

```json
{
  "tipo": "RPG"
}
```

### ✅ Resposta

```json
{
  "id": 1,
  "tipo": "RPG"
}
```

---

## 🛡️ Resiliência e Tratamento de Erros

O sistema implementa tratamento de exceções utilizando os recursos nativos do NestJS.

### ✔️ Categoria não encontrada

```json
{
  "statusCode": 404,
  "message": "Categoria não encontrada!"
}
```

---

### ✔️ Validação automática de dados

O projeto utiliza:

- `ValidationPipe`
- `class-validator`
- Decorators de validação
- Respostas HTTP apropriadas

---

### ✔️ Busca segura no banco

As operações utilizam:

- Repository Pattern
- TypeORM Repository
- Queries tipadas
- Busca parcial utilizando `ILike`

---

## 🧪 Testes e Validação

O projeto possui configuração pronta para testes automatizados com Jest.

### ▶️ Executar testes

```bash
npm run test
```

---

### ▶️ Gerar cobertura

```bash
npm run test:cov
```

---

### Cenários validados

| Cenário | Resultado Esperado |
|---|---|
| Cadastro de categoria | Dados persistidos |
| Busca por ID | Retorno correto |
| Busca inexistente | Erro 404 |
| Atualização | Dados alterados |
| Exclusão | Registro removido |
| Validação de campos | Requisição bloqueada |

---

## 📚 Aprendizados

Este projeto permitiu aprofundar conhecimentos em:

- Desenvolvimento backend com NestJS
- APIs REST com TypeScript
- Persistência de dados com TypeORM
- Relacionamentos entre entidades
- Arquitetura modular
- Injeção de dependência
- Tratamento de exceções
- Estruturação profissional de backend

---

## 🔮 Melhorias Futuras

- Autenticação JWT
- Swagger Documentation
- Sistema de usuários
- Upload de imagens
- Paginação de resultados
- Dockerização da aplicação
- Deploy em nuvem
- Logs e monitoramento

---

## 👨‍💻 Autor

Desenvolvido por **Yasmin Guidella** 🚀
