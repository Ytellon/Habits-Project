import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import { z } from "zod";
import daysjs from "dayjs";

export async function appRoutes(app: FastifyInstance) {

  app.post("/habits", async (request, response) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6)),
        
  });

    const { title, weekDays } = createHabitBody.parse(request.body);

    const today = daysjs(0).startOf("day").toDate();

    const habit = await prisma.habit.create({
      data: {
        title,
        created_at: new Date(),
        weekDays: {
          create: weekDays.map((weekDay) => ({ week_day: weekDay })),
        },
      },
    });
  });
};