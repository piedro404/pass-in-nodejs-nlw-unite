import fastify from "fastify";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { generateSlug } from "./utils/generate-slug";

const app = fastify();

const prisma = new PrismaClient({
  log: ["query"],
});

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
