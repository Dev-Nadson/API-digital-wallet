# API Digital Wallet

## 📝 Descrição

API simples de carteira digital desenvolvida em TypeScript, permitindo operações completas de CRUD de usuários e gerenciamento de transações financeiras entre contas.

## 🎯 Propósito

Esta API serve como backend para uma aplicação de wallet digital, oferecendo:

- **Gerenciamento de Usuários**: Criação, atualização, listagem e remoção de usuários
- **Sistema de Transações**: Transferências de valores entre usuários
- **Histórico Financeiro**: Listagem de transações globais e por usuário específico

## 🚀 Stack de Tecnologias

- **Node.js** + **TypeScript** - Runtime e linguagem
- **Fastify** - Framework web de alta performance
- **Knex** - Query builder SQL
- **SQLite** - Banco de dados local
- **Zod** - Validação de schemas e tipos
- **bcryptjs** - Hash de senhas
- **dotenv** - Gerenciamento de variáveis de ambiente
- **tsx** - Execução TypeScript em desenvolvimento

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** >= 18
- **npm** ou **yarn**

## ⚙️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <repo-url>
cd API-digital-wallet-main
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
BCRYPT_ROUNDS=10
```

> **Nota**: O valor 10 é suficiente para desenvolvimento local. Define o número de rounds usados na criptografia das senhas.

### 4. Prepare o banco de dados

Execute as migrações:
```bash
npm run migrate:latest
```

Popule a base inicial com seeds:
```bash
npm run seed:run
```

### 5. Inicie o servidor

```bash
npm run dev
```

O servidor Fastify iniciará automaticamente na porta `3333`.

> **Dica**: Para alterar a porta, edite o arquivo `server.ts` ou defina uma variável de ambiente `PORT`.

### 6. Teste a API

Após esses passos, sua API estará pronta para uso! Você pode testar as rotas usando:
- Postman
- Insomnia
- Thunder Client
- cURL
- Qualquer outro cliente HTTP

## 📁 Estrutura de Pastas

```
src/
  ├── controllers/
  │   ├── users/
  │   └── transactions/
  ├── repositories/
  │   ├── users/
  │   └── transactions/
  ├── routes/
  ├── database/
  │   ├── migrations/
  │   ├── seeds/
  │   └── database.db
  ├── middlewares/
  ├── schemas/
  ├── utils/
  ├── types/
  └── server.ts
knexfile.ts
package.json
tsconfig.json
```

### Descrição das Pastas

- **controllers/**: Controladores com lógica de negócio
- **repositories/**: Camada de acesso aos dados
- **routes/**: Definição das rotas da API
- **database/**: Migrações, seeds e arquivo do banco SQLite
- **middlewares/**: Middlewares customizados
- **schemas/**: Schemas de validação com Zod
- **utils/**: Funções utilitárias
- **types/**: Definições de tipos TypeScript

## 🗄️ Banco de Dados

- **Tipo**: SQLite
- **Localização**: `src/database/database.db`
- **ORM/Query Builder**: Knex.js
- **Configuração**: Automática via `knexfile.ts`

Nenhuma configuração adicional de conexão é necessária.

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia o servidor em modo desenvolvimento

# Migrações
npm run migrate:latest   # Executa todas as migrações pendentes
npm run migrate:rollback # Reverte a última migração

# Seeds
npm run seed:run         # Executa os seeds do banco de dados

# Build
npm run build            # Compila o TypeScript para JavaScript

# Produção
npm start                # Inicia o servidor em modo produção
```

## 🔌 Endpoints da API

### Usuários

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/users` | Cria um novo usuário |
| `GET` | `/users` | Lista todos os usuários |
| `GET` | `/users/:id` | Busca um usuário específico |
| `PUT` | `/users/:id` | Atualiza um usuário |
| `DELETE` | `/users/:id` | Remove um usuário |

### Transações

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/transactions` | Cria uma nova transação |
| `GET` | `/transactions` | Lista todas as transações |
| `GET` | `/transactions/user/:userId` | Lista transações de um usuário |

## 📄 Licença

Este é um projeto de exemplo para fins educacionais.