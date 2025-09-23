import fastify from "fastify"

const PORT = 3333
const app = fastify()

app.get("/", (req, reply) => {
    return reply.status(200).send("Hello World!")
})

app.listen({ "port": PORT }, () => {
    console.log(`Server running on port ${PORT}`)
})