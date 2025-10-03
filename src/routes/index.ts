import type { FastifyInstance } from 'fastify';

import { transactions_routes } from './transaction.routes.js';
import { user_routes } from './user.routes.js';

async function app_routes(app: FastifyInstance) {
    app.register(user_routes, { prefix: '/users' })
    app.register(transactions_routes, { prefix: '/transactions' })
}

export { app_routes }