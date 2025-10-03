import type { FastifyInstance } from 'fastify';

import { transations_routes } from './transations.routes.js';
import { user_routes } from './user.routes.js';

async function app_routes(app: FastifyInstance) {
    app.register(user_routes, { prefix: '/users' })
    app.register(transations_routes, { prefix: '/transations' })
}

export { app_routes }