# API Digital Wallet

## Descrição
API simples de carteira digital (criação/atualização/remoção de usuários e criação/listagem de transações). Projeto de exemplo em TypeScript usando Fastify + Knex + SQLite.

## Propósito
Servir como backend de uma aplicação de wallet para:
- CRUD de usuários
- Realizar transferências entre usuários (transações)
- Listar transações globais e por usuário

## Stack
- Node.js + TypeScript
- Fastify (web framework)
- Knex (query builder)
- SQLite (banco local)
- Zod (validações)
- bcryptjs (hash de senha)
- dotenv (variáveis de ambiente)
- tsx (execução em dev)

## Pré-requisitos
- Node.js >= 18
- npm
- (opcional) yarn

## Instalação (passo-a-passo)
1. Clone o repositório:
   ```bash
   git clone <repo-url>
   cd API-digital-wallet-main
