import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";

const app = fastify();
const prisma = new PrismaClient();

app.get('/', async () => {
  const habit = await prisma.habit.findMany();
  return habit;
});

app.listen({
  port: 3333,
}).then(() => {
  console.log('HAPPY ! Server is running...');
});