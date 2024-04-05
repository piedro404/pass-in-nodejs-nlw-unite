import fastify from "fastify";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { generateSlug } from "./utils/generate-slug";

const app = fastify();

const prisma = new PrismaClient({
  log: ["query"],
});

// Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, ...

// Corpo da requisição (Request Body)
// Parâmetros de busca (Search Params / Query Params) 'http://IocaIhost:3333/users?name=Diegos
// Parâmetros de rota (Route Params) -> Identificação de recursos 'DELETE http://IocaIhost:3333/users/5
// Cabeçalhos (Headers) -> Contexto

// Semânticas Significado

// Driver nativo / Query Builders / ORMS

// Object Relatianal Mapping (Hibernate / Doctrine / ActiveRecord)

// JSON - JavaScript Object Notation

// 20x => Sucesso
// 30x => Redirecionamento
// 40x => Erro do cliente (Erro em alguma informação enviada por QUEM está fazendo a chamada p/ API)
// 50x => Erro do servidor (Um erro que está acontecendo INDEPENDENTE do que este sendo enviado p/ o servidor)

app.post("/events", async (request, reply) => {
  const createEventSchema = z.object({
    title: z.string().min(4),
    details: z.string().nullable(),
    maximumAttendees: z.number().int().positive().nullable(),
  });

  const { title, details, maximumAttendees } = createEventSchema.parse(
    request.body
  );

  const slug = generateSlug(title);

  const eventWithSameSlug = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
  });

  if (eventWithSameSlug !== null) {
    throw new Error("Another event with same title already exists.");
  }

  const event = await prisma.event.create({
    data: {
      title: title,
      details: details,
      maximunAttendees: maximumAttendees,
      slug: slug,
    },
  });

  return reply.status(201).send({ eventId: event.id });
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
