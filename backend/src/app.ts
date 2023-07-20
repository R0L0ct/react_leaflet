import express from "express";
import cors from "cors";

import poligonoRoutes from "./routes/poligono.routes";
import coordenadaRoutes from "./routes/coordenada.routes";
var corsOptions = {
  origin: "react-leaflet-yz3w-git-main-r0l0ct.vercel.app",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const app = express();
app.use(cors(corsOptions));
app.use(function (_req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "react-leaflet-yz3w-git-main-r0l0ct.vercel.app"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

app.use("/", poligonoRoutes);
app.use("/", coordenadaRoutes);

export default app;
