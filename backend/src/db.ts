import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgres://rolo:Qxee5lan4dfVdvscSwdi7v6D0hyZKrrb@dpg-circdu5iuie930maplfg-a.oregon-postgres.render.com/mapadb",
    },
  },
});

export default prisma;
