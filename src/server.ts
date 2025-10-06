import fastify from "fastify"
import { app_routes } from "./routes/index.js"
import { error_handler_middleware } from "./middlewares/error-handler-middleware.js"
import { env } from "./utils/env.config.js"
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'

const PORT = env.PORT
const app = fastify()

await app.register(swagger, {
    openapi: {
        info: {
            title: 'API Backend - Documentação',
            description: 'Documentação gerada automaticamente com Swagger (OpenAPI)',
            version: '1.0.0'
        },
        servers: [
            { url: 'http://localhost:3333', description: 'Servidor local' }
        ]
    }
})

// Interface visual do Swagger em /docs
await app.register(swaggerUi, {
    routePrefix: '/docs',
    staticCSP: true,
    transformStaticCSP: (header) => header,
    uiConfig: {
        docExpansion: 'list',
        deepLinking: false
    }
})

app.register(app_routes)

app.setErrorHandler(error_handler_middleware)

await app.listen({ "port": PORT }, () => {
    console.log(`Server running on port ${PORT}`)
    console.log('Documentação Swagger em http://localhost:3333/docs')
})

