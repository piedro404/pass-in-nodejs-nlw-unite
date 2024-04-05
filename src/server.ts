import fastify from "fastify";

const app = fastify()

app.get('/', () => {
    return {"Hello NLW UNITE": "Oi"}
})

app.listen({port: 3333})
.then(() => {
    console.log("HTTP server RUN")
})