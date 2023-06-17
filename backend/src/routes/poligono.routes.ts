import prisma from "../db";
import { Router, Request, Response } from "express";

const router = Router();

router.get("/poligono", async (_req: Request, res: Response) => {
  const getPoligono = await prisma.poligono.findMany({
    include: {
      coordenadas: true,
    },
  });
  res.json(getPoligono);
});

router.get("/poligono/:id", async (req: Request, res: Response) => {
  const getPoligono = await prisma.poligono.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      coordenadas: true,
    },
  });
  res.json(getPoligono);
});

router.post("/poligono", async (req: Request, res: Response) => {
  const createPoligono = await prisma.poligono.create({
    data: req.body,
  });
  res.json(createPoligono);
});

router.put("/poligono/:id", async (req: Request, res: Response) => {
  const updatePoligono = await prisma.poligono.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });
  res.json(updatePoligono);
});

router.delete("/poligono/:id", async (req: Request, res: Response) => {
  const deletePoligono = await prisma.poligono.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(deletePoligono);
});

export default router;
