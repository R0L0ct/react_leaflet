import express from "express";
import cors from "cors";

import poligonoRoutes from "./routes/poligono.routes";
import coordenadaRoutes from "./routes/coordenada.routes";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", poligonoRoutes);
app.use("/", coordenadaRoutes);

export default app;
