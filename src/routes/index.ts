import type { FastifyInstance } from 'fastify';

import { transantions_routes } from './transations.routes.js';
import { user_routes } from './user.routes.js';

async function app_routes(app: FastifyInstance) {
    app.register(user_routes, { prefix: '/users' })
    app.register(transantions_routes, { prefix: '/transations' })
}

export { app_routes }